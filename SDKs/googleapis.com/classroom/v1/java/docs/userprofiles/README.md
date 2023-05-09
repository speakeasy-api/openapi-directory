# userProfiles

### Available Operations

* [classroomUserProfilesGet](#classroomuserprofilesget) - Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
* [classroomUserProfilesGuardianInvitationsCreate](#classroomuserprofilesguardianinvitationscreate) - Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
* [classroomUserProfilesGuardianInvitationsGet](#classroomuserprofilesguardianinvitationsget) - Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
* [classroomUserProfilesGuardianInvitationsList](#classroomuserprofilesguardianinvitationslist) - Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
* [classroomUserProfilesGuardianInvitationsPatch](#classroomuserprofilesguardianinvitationspatch) - Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
* [classroomUserProfilesGuardiansDelete](#classroomuserprofilesguardiansdelete) - Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
* [classroomUserProfilesGuardiansGet](#classroomuserprofilesguardiansget) - Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
* [classroomUserProfilesGuardiansList](#classroomuserprofilesguardianslist) - Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

## classroomUserProfilesGet

Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetSecurity;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGetRequest req = new ClassroomUserProfilesGetRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "illo";
                key = "veniam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "possimus";
                uploadProtocol = "dignissimos";
            }};            

            ClassroomUserProfilesGetResponse res = sdk.userProfiles.classroomUserProfilesGet(req, new ClassroomUserProfilesGetSecurity() {{
                option1 = new ClassroomUserProfilesGetSecurityOption1("itaque", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardianInvitationsCreate

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GuardianInvitation;
import org.openapis.openapi.models.shared.GuardianInvitationStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardianInvitationsCreateRequest req = new ClassroomUserProfilesGuardianInvitationsCreateRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                guardianInvitation = new GuardianInvitation() {{
                    creationTime = "delectus";
                    invitationId = "incidunt";
                    invitedEmailAddress = "quod";
                    state = GuardianInvitationStateEnum.GUARDIAN_INVITATION_STATE_UNSPECIFIED;
                    studentId = "ullam";
                }};;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "officia";
                key = "est";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "voluptate";
                uploadProtocol = "consequatur";
            }};            

            ClassroomUserProfilesGuardianInvitationsCreateResponse res = sdk.userProfiles.classroomUserProfilesGuardianInvitationsCreate(req, new ClassroomUserProfilesGuardianInvitationsCreateSecurity("delectus", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guardianInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardianInvitationsGet

Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsGetRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsGetResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardianInvitationsGetRequest req = new ClassroomUserProfilesGuardianInvitationsGetRequest("dolore", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "laboriosam";
                key = "laboriosam";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "officia";
                uploadProtocol = "repellat";
            }};            

            ClassroomUserProfilesGuardianInvitationsGetResponse res = sdk.userProfiles.classroomUserProfilesGuardianInvitationsGet(req, new ClassroomUserProfilesGuardianInvitationsGetSecurity() {{
                option1 = new ClassroomUserProfilesGuardianInvitationsGetSecurityOption1("cupiditate", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.guardianInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardianInvitationsList

Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListSecurity;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListStatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardianInvitationsListRequest req = new ClassroomUserProfilesGuardianInvitationsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "ad";
                invitedEmailAddress = "sapiente";
                key = "voluptates";
                oauthToken = "ut";
                pageSize = 201005L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "quibusdam";
                states = new org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsListStatesEnum[]{{
                    add(ClassroomUserProfilesGuardianInvitationsListStatesEnum.COMPLETE),
                    add(ClassroomUserProfilesGuardianInvitationsListStatesEnum.COMPLETE),
                }};
                uploadType = "nemo";
                uploadProtocol = "cumque";
            }};            

            ClassroomUserProfilesGuardianInvitationsListResponse res = sdk.userProfiles.classroomUserProfilesGuardianInvitationsList(req, new ClassroomUserProfilesGuardianInvitationsListSecurity() {{
                option1 = new ClassroomUserProfilesGuardianInvitationsListSecurityOption1("voluptatum", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGuardianInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardianInvitationsPatch

Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsPatchRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsPatchResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardianInvitationsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GuardianInvitation;
import org.openapis.openapi.models.shared.GuardianInvitationStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardianInvitationsPatchRequest req = new ClassroomUserProfilesGuardianInvitationsPatchRequest("atque", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                guardianInvitation = new GuardianInvitation() {{
                    creationTime = "rerum";
                    invitationId = "totam";
                    invitedEmailAddress = "quod";
                    state = GuardianInvitationStateEnum.GUARDIAN_INVITATION_STATE_UNSPECIFIED;
                    studentId = "eaque";
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "odio";
                key = "delectus";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "ut";
                updateMask = "distinctio";
                uploadType = "eius";
                uploadProtocol = "eos";
            }};            

            ClassroomUserProfilesGuardianInvitationsPatchResponse res = sdk.userProfiles.classroomUserProfilesGuardianInvitationsPatch(req, new ClassroomUserProfilesGuardianInvitationsPatchSecurity("veniam", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guardianInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardiansDelete

Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardiansDeleteRequest req = new ClassroomUserProfilesGuardiansDeleteRequest("sint", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "incidunt";
                key = "porro";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptate";
                uploadProtocol = "tempore";
            }};            

            ClassroomUserProfilesGuardiansDeleteResponse res = sdk.userProfiles.classroomUserProfilesGuardiansDelete(req, new ClassroomUserProfilesGuardiansDeleteSecurity("in", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardiansGet

Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetSecurity;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardiansGetRequest req = new ClassroomUserProfilesGuardiansGetRequest("possimus", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "harum";
                key = "ad";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "totam";
                uploadProtocol = "vero";
            }};            

            ClassroomUserProfilesGuardiansGetResponse res = sdk.userProfiles.classroomUserProfilesGuardiansGet(req, new ClassroomUserProfilesGuardiansGetSecurity() {{
                option1 = new ClassroomUserProfilesGuardiansGetSecurityOption1("dolore", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.guardian != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomUserProfilesGuardiansList

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListRequest;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListResponse;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListSecurity;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomUserProfilesGuardiansListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomUserProfilesGuardiansListRequest req = new ClassroomUserProfilesGuardiansListRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "enim";
                invitedEmailAddress = "eaque";
                key = "ex";
                oauthToken = "eveniet";
                pageSize = 962543L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "aut";
                uploadProtocol = "dolorum";
            }};            

            ClassroomUserProfilesGuardiansListResponse res = sdk.userProfiles.classroomUserProfilesGuardiansList(req, new ClassroomUserProfilesGuardiansListSecurity() {{
                option1 = new ClassroomUserProfilesGuardiansListSecurityOption1("nostrum", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGuardiansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
