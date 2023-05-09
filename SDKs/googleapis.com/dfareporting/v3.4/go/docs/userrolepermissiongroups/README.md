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
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("earum"),
        ID: "8493195a-ee79-483a-b469-185f9f7b2434",
        Key: sdk.String("hic"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ratione",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("quae"),
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
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("voluptates"),
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
