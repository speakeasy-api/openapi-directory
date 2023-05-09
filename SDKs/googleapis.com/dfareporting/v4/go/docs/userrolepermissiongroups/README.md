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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("debitis"),
        ID: "c18606d3-0574-4ea6-8943-253597a26abb",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quos",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("amet"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("autem"),
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
