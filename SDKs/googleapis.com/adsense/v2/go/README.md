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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AdsenseAccountsAdclientsAdunitsCreate](docs/accounts/README.md#adsenseaccountsadclientsadunitscreate) - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* [AdsenseAccountsAdclientsAdunitsGetAdcode](docs/accounts/README.md#adsenseaccountsadclientsadunitsgetadcode) - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* [AdsenseAccountsAdclientsAdunitsList](docs/accounts/README.md#adsenseaccountsadclientsadunitslist) - Lists all ad units under a specified account and ad client.
* [AdsenseAccountsAdclientsAdunitsListLinkedCustomChannels](docs/accounts/README.md#adsenseaccountsadclientsadunitslistlinkedcustomchannels) - Lists all the custom channels available for an ad unit.
* [AdsenseAccountsAdclientsCustomchannelsCreate](docs/accounts/README.md#adsenseaccountsadclientscustomchannelscreate) - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsCustomchannelsDelete](docs/accounts/README.md#adsenseaccountsadclientscustomchannelsdelete) - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsCustomchannelsList](docs/accounts/README.md#adsenseaccountsadclientscustomchannelslist) - Lists all the custom channels available in an ad client.
* [AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnits](docs/accounts/README.md#adsenseaccountsadclientscustomchannelslistlinkedadunits) - Lists all the ad units available for a custom channel.
* [AdsenseAccountsAdclientsCustomchannelsPatch](docs/accounts/README.md#adsenseaccountsadclientscustomchannelspatch) - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsList](docs/accounts/README.md#adsenseaccountsadclientslist) - Lists all the ad clients available in an account.
* [AdsenseAccountsAdclientsUrlchannelsList](docs/accounts/README.md#adsenseaccountsadclientsurlchannelslist) - Lists active url channels.
* [AdsenseAccountsAlertsList](docs/accounts/README.md#adsenseaccountsalertslist) - Lists all the alerts available in an account.
* [AdsenseAccountsGetAdBlockingRecoveryTag](docs/accounts/README.md#adsenseaccountsgetadblockingrecoverytag) - Gets the ad blocking recovery tag of an account.
* [AdsenseAccountsList](docs/accounts/README.md#adsenseaccountslist) - Lists all accounts available to this user.
* [AdsenseAccountsListChildAccounts](docs/accounts/README.md#adsenseaccountslistchildaccounts) - Lists all accounts directly managed by the given AdSense account.
* [AdsenseAccountsPaymentsList](docs/accounts/README.md#adsenseaccountspaymentslist) - Lists all the payments available for an account.
* [AdsenseAccountsReportsGenerate](docs/accounts/README.md#adsenseaccountsreportsgenerate) - Generates an ad hoc report.
* [AdsenseAccountsReportsGenerateCsv](docs/accounts/README.md#adsenseaccountsreportsgeneratecsv) - Generates a csv formatted ad hoc report.
* [AdsenseAccountsReportsGetSaved](docs/accounts/README.md#adsenseaccountsreportsgetsaved) - Gets the saved report from the given resource name.
* [AdsenseAccountsReportsSavedGenerate](docs/accounts/README.md#adsenseaccountsreportssavedgenerate) - Generates a saved report.
* [AdsenseAccountsReportsSavedGenerateCsv](docs/accounts/README.md#adsenseaccountsreportssavedgeneratecsv) - Generates a csv formatted saved report.
* [AdsenseAccountsReportsSavedList](docs/accounts/README.md#adsenseaccountsreportssavedlist) - Lists saved reports.
* [AdsenseAccountsSitesGet](docs/accounts/README.md#adsenseaccountssitesget) - Gets information about the selected site.
* [AdsenseAccountsSitesList](docs/accounts/README.md#adsenseaccountssiteslist) - Lists all the sites available in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
