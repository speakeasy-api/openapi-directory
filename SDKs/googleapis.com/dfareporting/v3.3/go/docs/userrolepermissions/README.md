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
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("laborum"),
        ID: "e092b704-b119-4594-8dc7-f113e7df636c",
        Key: sdk.String("unde"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tempore",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("amet"),
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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("error"),
        Ids: []string{
            "reprehenderit",
            "beatae",
            "libero",
            "ratione",
        },
        Key: sdk.String("magni"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "recusandae",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("ab"),
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
