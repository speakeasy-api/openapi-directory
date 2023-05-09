# Grants

### Available Operations

* [AndroidpublisherGrantsCreate](#androidpublishergrantscreate) - Grant access for a user to the given package.

## AndroidpublisherGrantsCreate

Grant access for a user to the given package.

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
    res, err := s.Grants.AndroidpublisherGrantsCreate(ctx, operations.AndroidpublisherGrantsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Grant: &shared.Grant{
            AppLevelPermissions: []shared.GrantAppLevelPermissionsEnum{
                shared.GrantAppLevelPermissionsEnumCanManageTrackUsers,
            },
            Name: sdk.String("Kristina Moore MD"),
            PackageName: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("praesentium"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("quos"),
    }, operations.AndroidpublisherGrantsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Grant != nil {
        // handle response
    }
}
```
