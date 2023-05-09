# AccountPermissions

### Available Operations

* [DfareportingAccountPermissionsGet](#dfareportingaccountpermissionsget) - Gets one account permission by ID.
* [DfareportingAccountPermissionsList](#dfareportingaccountpermissionslist) - Retrieves the list of account permissions.

## DfareportingAccountPermissionsGet

Gets one account permission by ID.

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
    res, err := s.AccountPermissions.DfareportingAccountPermissionsGet(ctx, operations.DfareportingAccountPermissionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        ID: "6eb10faa-a235-42c5-9559-07aff1a3a2fa",
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "commodi",
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
    }, operations.DfareportingAccountPermissionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountPermission != nil {
        // handle response
    }
}
```

## DfareportingAccountPermissionsList

Retrieves the list of account permissions.

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
    res, err := s.AccountPermissions.DfareportingAccountPermissionsList(ctx, operations.DfareportingAccountPermissionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odit",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DfareportingAccountPermissionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountPermissionsListResponse != nil {
        // handle response
    }
}
```
