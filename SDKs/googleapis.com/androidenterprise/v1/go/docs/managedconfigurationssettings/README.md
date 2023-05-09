# Managedconfigurationssettings

### Available Operations

* [AndroidenterpriseManagedconfigurationssettingsList](#androidenterprisemanagedconfigurationssettingslist) - Lists all the managed configurations settings for the specified app.

## AndroidenterpriseManagedconfigurationssettingsList

Lists all the managed configurations settings for the specified app.

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
    res, err := s.Managedconfigurationssettings.AndroidenterpriseManagedconfigurationssettingsList(ctx, operations.AndroidenterpriseManagedconfigurationssettingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        EnterpriseID: "laboriosam",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "vitae",
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.AndroidenterpriseManagedconfigurationssettingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfigurationsSettingsListResponse != nil {
        // handle response
    }
}
```
