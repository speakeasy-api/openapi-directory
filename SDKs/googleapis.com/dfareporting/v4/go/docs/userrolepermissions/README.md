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
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("est"),
        ID: "02230877-bfc5-4a74-b657-74c917bcfeb6",
        Key: sdk.String("ex"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quaerat",
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("eius"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("illo"),
        Ids: []string{
            "aspernatur",
            "in",
            "eius",
            "atque",
        },
        Key: sdk.String("iure"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "possimus",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("accusantium"),
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
