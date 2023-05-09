# invitations

### Available Operations

* [classroomInvitationsAccept](#classroominvitationsaccept) - Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsCreate](#classroominvitationscreate) - Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
* [classroomInvitationsDelete](#classroominvitationsdelete) - Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsGet](#classroominvitationsget) - Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsList](#classroominvitationslist) - Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

## classroomInvitationsAccept

Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomInvitationsAcceptRequest;
import org.openapis.openapi.models.operations.ClassroomInvitationsAcceptResponse;
import org.openapis.openapi.models.operations.ClassroomInvitationsAcceptSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomInvitationsAcceptRequest req = new ClassroomInvitationsAcceptRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "est";
                key = "commodi";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "dicta";
                uploadProtocol = "recusandae";
            }};            

            ClassroomInvitationsAcceptResponse res = sdk.invitations.classroomInvitationsAccept(req, new ClassroomInvitationsAcceptSecurity("sapiente", "id") {{
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

## classroomInvitationsCreate

Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomInvitationsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomInvitationsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomInvitationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Invitation;
import org.openapis.openapi.models.shared.InvitationRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomInvitationsCreateRequest req = new ClassroomInvitationsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                invitation = new Invitation() {{
                    courseId = "inventore";
                    id = "98258fd0-a9eb-4a47-b7d3-ef049640d6a1";
                    role = InvitationRoleEnum.TEACHER;
                    userId = "ratione";
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "nihil";
                key = "culpa";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "ad";
                uploadProtocol = "cupiditate";
            }};            

            ClassroomInvitationsCreateResponse res = sdk.invitations.classroomInvitationsCreate(req, new ClassroomInvitationsCreateSecurity("suscipit", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.invitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomInvitationsDelete

Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomInvitationsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomInvitationsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomInvitationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomInvitationsDeleteRequest req = new ClassroomInvitationsDeleteRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "praesentium";
                key = "neque";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "debitis";
                uploadProtocol = "voluptatum";
            }};            

            ClassroomInvitationsDeleteResponse res = sdk.invitations.classroomInvitationsDelete(req, new ClassroomInvitationsDeleteSecurity("voluptatem", "quisquam") {{
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

## classroomInvitationsGet

Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomInvitationsGetRequest;
import org.openapis.openapi.models.operations.ClassroomInvitationsGetResponse;
import org.openapis.openapi.models.operations.ClassroomInvitationsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomInvitationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomInvitationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomInvitationsGetRequest req = new ClassroomInvitationsGetRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "occaecati";
                key = "quis";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "iste";
                uploadProtocol = "unde";
            }};            

            ClassroomInvitationsGetResponse res = sdk.invitations.classroomInvitationsGet(req, new ClassroomInvitationsGetSecurity() {{
                option1 = new ClassroomInvitationsGetSecurityOption1("quas", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.invitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomInvitationsList

Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomInvitationsListRequest;
import org.openapis.openapi.models.operations.ClassroomInvitationsListResponse;
import org.openapis.openapi.models.operations.ClassroomInvitationsListSecurity;
import org.openapis.openapi.models.operations.ClassroomInvitationsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomInvitationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomInvitationsListRequest req = new ClassroomInvitationsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                courseId = "dolor";
                fields = "hic";
                key = "iure";
                oauthToken = "sint";
                pageSize = 418787L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "ab";
                uploadProtocol = "fuga";
                userId = "a";
            }};            

            ClassroomInvitationsListResponse res = sdk.invitations.classroomInvitationsList(req, new ClassroomInvitationsListSecurity() {{
                option1 = new ClassroomInvitationsListSecurityOption1("dolor", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
