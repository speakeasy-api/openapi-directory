<!-- Start SDK Example Usage -->
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
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, operations.AdsenseAccountsAdclientsAdunitsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdUnitInput: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: sdk.String("provident"),
                Type: shared.ContentAdsSettingsTypeEnumMatchedContent.ToPointer(),
            },
            DisplayName: sdk.String("quibusdam"),
            State: shared.AdUnitStateEnumActive.ToPointer(),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("deserunt"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.AdsenseAccountsAdclientsAdunitsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->