# Projects

### Available Operations

* [AccessapprovalProjectsApprovalRequestsApprove](#accessapprovalprojectsapprovalrequestsapprove) - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [AccessapprovalProjectsApprovalRequestsDismiss](#accessapprovalprojectsapprovalrequestsdismiss) - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [AccessapprovalProjectsApprovalRequestsGet](#accessapprovalprojectsapprovalrequestsget) - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* [AccessapprovalProjectsApprovalRequestsInvalidate](#accessapprovalprojectsapprovalrequestsinvalidate) - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* [AccessapprovalProjectsApprovalRequestsList](#accessapprovalprojectsapprovalrequestslist) - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* [AccessapprovalProjectsDeleteAccessApprovalSettings](#accessapprovalprojectsdeleteaccessapprovalsettings) - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* [AccessapprovalProjectsUpdateAccessApprovalSettings](#accessapprovalprojectsupdateaccessapprovalsettings) - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

## AccessapprovalProjectsApprovalRequestsApprove

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

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
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsApprove(ctx, operations.AccessapprovalProjectsApprovalRequestsApproveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApproveApprovalRequestMessage: &shared.ApproveApprovalRequestMessage{
            ExpireTime: sdk.String("tempora"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        Name: "Miriam Huel",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AccessapprovalProjectsApprovalRequestsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```

## AccessapprovalProjectsApprovalRequestsDismiss

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

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
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsDismiss(ctx, operations.AccessapprovalProjectsApprovalRequestsDismissRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "repellendus": "sapiente",
            "quo": "odit",
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        Name: "Erik Lebsack",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AccessapprovalProjectsApprovalRequestsDismissSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```

## AccessapprovalProjectsApprovalRequestsGet

Gets an approval request. Returns NOT_FOUND if the request does not exist.

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
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsGet(ctx, operations.AccessapprovalProjectsApprovalRequestsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        Name: "Tanya Gleason",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AccessapprovalProjectsApprovalRequestsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```

## AccessapprovalProjectsApprovalRequestsInvalidate

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

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
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsInvalidate(ctx, operations.AccessapprovalProjectsApprovalRequestsInvalidateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ad": "natus",
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        Name: "Elias Parker",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AccessapprovalProjectsApprovalRequestsInvalidateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```

## AccessapprovalProjectsApprovalRequestsList

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

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
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsList(ctx, operations.AccessapprovalProjectsApprovalRequestsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Filter: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(358152),
        PageToken: sdk.String("explicabo"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.AccessapprovalProjectsApprovalRequestsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApprovalRequestsResponse != nil {
        // handle response
    }
}
```

## AccessapprovalProjectsDeleteAccessApprovalSettings

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

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
    res, err := s.Projects.AccessapprovalProjectsDeleteAccessApprovalSettings(ctx, operations.AccessapprovalProjectsDeleteAccessApprovalSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        Name: "Juan O'Hara",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AccessapprovalProjectsDeleteAccessApprovalSettingsSecurity{
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

## AccessapprovalProjectsUpdateAccessApprovalSettings

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

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
    res, err := s.Projects.AccessapprovalProjectsUpdateAccessApprovalSettings(ctx, operations.AccessapprovalProjectsUpdateAccessApprovalSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessApprovalSettingsInput: &shared.AccessApprovalSettingsInput{
            ActiveKeyVersion: sdk.String("commodi"),
            EnrolledServices: []shared.EnrolledService{
                shared.EnrolledService{
                    CloudProduct: sdk.String("molestiae"),
                    EnrollmentLevel: shared.EnrolledServiceEnrollmentLevelEnumEnrollmentLevelUnspecified.ToPointer(),
                },
                shared.EnrolledService{
                    CloudProduct: sdk.String("error"),
                    EnrollmentLevel: shared.EnrolledServiceEnrollmentLevelEnumEnrollmentLevelUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Gloria Padberg"),
            NotificationEmails: []string{
                "quo",
            },
            PreferNoBroadApprovalRequests: sdk.Bool(false),
            PreferredRequestExpirationDays: sdk.Int(196582),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        Name: "Sabrina Smitham DVM",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UpdateMask: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessApprovalSettings != nil {
        // handle response
    }
}
```
