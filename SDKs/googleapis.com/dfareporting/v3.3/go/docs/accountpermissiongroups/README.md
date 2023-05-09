# AccountPermissionGroups

### Available Operations

* [DfareportingAccountPermissionGroupsGet](#dfareportingaccountpermissiongroupsget) - Gets one account permission group by ID.
* [DfareportingAccountPermissionGroupsList](#dfareportingaccountpermissiongroupslist) - Retrieves the list of account permission groups.

## DfareportingAccountPermissionGroupsGet

Gets one account permission group by ID.

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
    res, err := s.AccountPermissionGroups.DfareportingAccountPermissionGroupsGet(ctx, operations.DfareportingAccountPermissionGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        ID: "51a05dfc-2ddf-47cc-b8ca-1ba928fc8167",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DfareportingAccountPermissionGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountPermissionGroup != nil {
        // handle response
    }
}
```

## DfareportingAccountPermissionGroupsList

Retrieves the list of account permission groups.

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
    res, err := s.AccountPermissionGroups.DfareportingAccountPermissionGroupsList(ctx, operations.DfareportingAccountPermissionGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolor",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.DfareportingAccountPermissionGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountPermissionGroupsListResponse != nil {
        // handle response
    }
}
```
