# UserProfiles

### Available Operations

* [ClassroomUserProfilesGet](#classroomuserprofilesget) - Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
* [ClassroomUserProfilesGuardianInvitationsCreate](#classroomuserprofilesguardianinvitationscreate) - Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
* [ClassroomUserProfilesGuardianInvitationsGet](#classroomuserprofilesguardianinvitationsget) - Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
* [ClassroomUserProfilesGuardianInvitationsList](#classroomuserprofilesguardianinvitationslist) - Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
* [ClassroomUserProfilesGuardianInvitationsPatch](#classroomuserprofilesguardianinvitationspatch) - Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
* [ClassroomUserProfilesGuardiansDelete](#classroomuserprofilesguardiansdelete) - Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
* [ClassroomUserProfilesGuardiansGet](#classroomuserprofilesguardiansget) - Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
* [ClassroomUserProfilesGuardiansList](#classroomuserprofilesguardianslist) - Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

## ClassroomUserProfilesGet

Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGet(ctx, operations.ClassroomUserProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("dolore"),
        UserID: "aliquid",
    }, operations.ClassroomUserProfilesGetSecurity{
        Option1: &operations.ClassroomUserProfilesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserProfile != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardianInvitationsCreate

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardianInvitationsCreate(ctx, operations.ClassroomUserProfilesGuardianInvitationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GuardianInvitation: &shared.GuardianInvitation{
            CreationTime: sdk.String("aspernatur"),
            InvitationID: sdk.String("quod"),
            InvitedEmailAddress: sdk.String("dolorem"),
            State: shared.GuardianInvitationStateEnumGuardianInvitationStateUnspecified.ToPointer(),
            StudentID: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("aut"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        StudentID: "quibusdam",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.ClassroomUserProfilesGuardianInvitationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuardianInvitation != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardianInvitationsGet

Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardianInvitationsGet(ctx, operations.ClassroomUserProfilesGuardianInvitationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("consequatur"),
        InvitationID: "sit",
        Key: sdk.String("iure"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        StudentID: "dolorem",
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("sed"),
    }, operations.ClassroomUserProfilesGuardianInvitationsGetSecurity{
        Option1: &operations.ClassroomUserProfilesGuardianInvitationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuardianInvitation != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardianInvitationsList

Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardianInvitationsList(ctx, operations.ClassroomUserProfilesGuardianInvitationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quia"),
        InvitedEmailAddress: sdk.String("veniam"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("rem"),
        PageSize: sdk.Int64(738403),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        States: []ClassroomUserProfilesGuardianInvitationsListStatesEnum{
            operations.ClassroomUserProfilesGuardianInvitationsListStatesEnumComplete,
        },
        StudentID: "excepturi",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ClassroomUserProfilesGuardianInvitationsListSecurity{
        Option1: &operations.ClassroomUserProfilesGuardianInvitationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGuardianInvitationsResponse != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardianInvitationsPatch

Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardianInvitationsPatch(ctx, operations.ClassroomUserProfilesGuardianInvitationsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GuardianInvitation: &shared.GuardianInvitation{
            CreationTime: sdk.String("molestias"),
            InvitationID: sdk.String("fuga"),
            InvitedEmailAddress: sdk.String("at"),
            State: shared.GuardianInvitationStateEnumPending.ToPointer(),
            StudentID: sdk.String("laborum"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("soluta"),
        InvitationID: "earum",
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        StudentID: "illo",
        UpdateMask: sdk.String("architecto"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("ad"),
    }, operations.ClassroomUserProfilesGuardianInvitationsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuardianInvitation != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardiansDelete

Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardiansDelete(ctx, operations.ClassroomUserProfilesGuardiansDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("iste"),
        GuardianID: "blanditiis",
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        StudentID: "repellat",
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.ClassroomUserProfilesGuardiansDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardiansGet

Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardiansGet(ctx, operations.ClassroomUserProfilesGuardiansGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nihil"),
        GuardianID: "sed",
        Key: sdk.String("optio"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        StudentID: "modi",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ClassroomUserProfilesGuardiansGetSecurity{
        Option1: &operations.ClassroomUserProfilesGuardiansGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Guardian != nil {
        // handle response
    }
}
```

## ClassroomUserProfilesGuardiansList

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserProfiles.ClassroomUserProfilesGuardiansList(ctx, operations.ClassroomUserProfilesGuardiansListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quam"),
        InvitedEmailAddress: sdk.String("eos"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(184774),
        PageToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        StudentID: "numquam",
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.ClassroomUserProfilesGuardiansListSecurity{
        Option1: &operations.ClassroomUserProfilesGuardiansListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGuardiansResponse != nil {
        // handle response
    }
}
```
