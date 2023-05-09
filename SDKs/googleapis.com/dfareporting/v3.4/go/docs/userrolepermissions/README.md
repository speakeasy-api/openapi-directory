# UserRolePermissions

### Available Operations

* [DfareportingUserRolePermissionsGet](#dfareportinguserrolepermissionsget) - Gets one user role permission by ID.
* [DfareportingUserRolePermissionsList](#dfareportinguserrolepermissionslist) - Gets a list of user role permissions, possibly filtered.

## DfareportingUserRolePermissionsGet

Gets one user role permission by ID.

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
    res, err := s.UserRolePermissions.DfareportingUserRolePermissionsGet(ctx, operations.DfareportingUserRolePermissionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("qui"),
        ID: "36e2f3f2-4104-492e-9b68-14400acba34c",
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "expedita",
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DfareportingUserRolePermissionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRolePermission != nil {
        // handle response
    }
}
```

## DfareportingUserRolePermissionsList

Gets a list of user role permissions, possibly filtered.

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
    res, err := s.UserRolePermissions.DfareportingUserRolePermissionsList(ctx, operations.DfareportingUserRolePermissionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("mollitia"),
        Ids: []string{
            "modi",
        },
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.DfareportingUserRolePermissionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRolePermissionsListResponse != nil {
        // handle response
    }
}
```
