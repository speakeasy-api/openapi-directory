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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("amet"),
        ID: "58a4d591-898f-4a43-a80b-67d94f20a9f7",
        Key: sdk.String("similique"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "et",
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("illum"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fuga",
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("vero"),
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
