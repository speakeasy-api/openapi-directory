# UserRolePermissionGroups

### Available Operations

* [DfareportingUserRolePermissionGroupsGet](#dfareportinguserrolepermissiongroupsget) - Gets one user role permission group by ID.
* [DfareportingUserRolePermissionGroupsList](#dfareportinguserrolepermissiongroupslist) - Gets a list of all supported user role permission groups.

## DfareportingUserRolePermissionGroupsGet

Gets one user role permission group by ID.

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
    res, err := s.UserRolePermissionGroups.DfareportingUserRolePermissionGroupsGet(ctx, operations.DfareportingUserRolePermissionGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("incidunt"),
        ID: "8ee833e5-6841-4f03-bdb5-71d09bc1e7c6",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DfareportingUserRolePermissionGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRolePermissionGroup != nil {
        // handle response
    }
}
```

## DfareportingUserRolePermissionGroupsList

Gets a list of all supported user role permission groups.

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
    res, err := s.UserRolePermissionGroups.DfareportingUserRolePermissionGroupsList(ctx, operations.DfareportingUserRolePermissionGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("cum"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.DfareportingUserRolePermissionGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRolePermissionGroupsListResponse != nil {
        // handle response
    }
}
```
