# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adsense/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AdsenseAccountsAdclientsAdunitsCreateRequest{
        DollarXgafv: "2",
        AdUnitInput: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: "provident",
                Type: "MATCHED_CONTENT",
            },
            DisplayName: "quibusdam",
            State: "ACTIVE",
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, req, operations.AdsenseAccountsAdclientsAdunitsCreateSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Accounts

* `AdsenseAccountsAdclientsAdunitsCreate` - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* `AdsenseAccountsAdclientsAdunitsGetAdcode` - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* `AdsenseAccountsAdclientsAdunitsList` - Lists all ad units under a specified account and ad client.
* `AdsenseAccountsAdclientsAdunitsListLinkedCustomChannels` - Lists all the custom channels available for an ad unit.
* `AdsenseAccountsAdclientsCustomchannelsCreate` - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `AdsenseAccountsAdclientsCustomchannelsDelete` - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `AdsenseAccountsAdclientsCustomchannelsList` - Lists all the custom channels available in an ad client.
* `AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnits` - Lists all the ad units available for a custom channel.
* `AdsenseAccountsAdclientsCustomchannelsPatch` - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `AdsenseAccountsAdclientsList` - Lists all the ad clients available in an account.
* `AdsenseAccountsAdclientsUrlchannelsList` - Lists active url channels.
* `AdsenseAccountsAlertsList` - Lists all the alerts available in an account.
* `AdsenseAccountsGetAdBlockingRecoveryTag` - Gets the ad blocking recovery tag of an account.
* `AdsenseAccountsList` - Lists all accounts available to this user.
* `AdsenseAccountsListChildAccounts` - Lists all accounts directly managed by the given AdSense account.
* `AdsenseAccountsPaymentsList` - Lists all the payments available for an account.
* `AdsenseAccountsReportsGenerate` - Generates an ad hoc report.
* `AdsenseAccountsReportsGenerateCsv` - Generates a csv formatted ad hoc report.
* `AdsenseAccountsReportsGetSaved` - Gets the saved report from the given resource name.
* `AdsenseAccountsReportsSavedGenerate` - Generates a saved report.
* `AdsenseAccountsReportsSavedGenerateCsv` - Generates a csv formatted saved report.
* `AdsenseAccountsReportsSavedList` - Lists saved reports.
* `AdsenseAccountsSitesGet` - Gets information about the selected site.
* `AdsenseAccountsSitesList` - Lists all the sites available in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
