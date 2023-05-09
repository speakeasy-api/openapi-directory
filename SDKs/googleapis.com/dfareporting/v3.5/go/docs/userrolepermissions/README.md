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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("saepe"),
        ID: "7b0b8f94-6709-41e6-86fe-d59ba910b7da",
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "error",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("earum"),
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
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("eaque"),
        Ids: []string{
            "molestiae",
        },
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laudantium",
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("distinctio"),
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
