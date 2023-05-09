# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adsense/v1.4/go
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
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, operations.AdsenseAccountsAdclientsGetAdCodeRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        TagPartner: sdk.String("illum"),
        UserIP: sdk.String("vel"),
    }, operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
        Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AdsenseAccountsAdclientsGetAdCode](docs/accounts/README.md#adsenseaccountsadclientsgetadcode) - Get Auto ad code for a given ad client.
* [AdsenseAccountsAdclientsList](docs/accounts/README.md#adsenseaccountsadclientslist) - List all ad clients in the specified account.
* [AdsenseAccountsAdunitsCustomchannelsList](docs/accounts/README.md#adsenseaccountsadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [AdsenseAccountsAdunitsGet](docs/accounts/README.md#adsenseaccountsadunitsget) - Gets the specified ad unit in the specified ad client for the specified account.
* [AdsenseAccountsAdunitsGetAdCode](docs/accounts/README.md#adsenseaccountsadunitsgetadcode) - Get ad code for the specified ad unit.
* [AdsenseAccountsAdunitsList](docs/accounts/README.md#adsenseaccountsadunitslist) - List all ad units in the specified ad client for the specified account.
* [AdsenseAccountsAlertsDelete](docs/accounts/README.md#adsenseaccountsalertsdelete) - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* [AdsenseAccountsAlertsList](docs/accounts/README.md#adsenseaccountsalertslist) - List the alerts for the specified AdSense account.
* [AdsenseAccountsCustomchannelsAdunitsList](docs/accounts/README.md#adsenseaccountscustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [AdsenseAccountsCustomchannelsGet](docs/accounts/README.md#adsenseaccountscustomchannelsget) - Get the specified custom channel from the specified ad client for the specified account.
* [AdsenseAccountsCustomchannelsList](docs/accounts/README.md#adsenseaccountscustomchannelslist) - List all custom channels in the specified ad client for the specified account.
* [AdsenseAccountsGet](docs/accounts/README.md#adsenseaccountsget) - Get information about the selected AdSense account.
* [AdsenseAccountsList](docs/accounts/README.md#adsenseaccountslist) - List all accounts available to this AdSense account.
* [AdsenseAccountsPaymentsList](docs/accounts/README.md#adsenseaccountspaymentslist) - List the payments for the specified AdSense account.
* [AdsenseAccountsReportsGenerate](docs/accounts/README.md#adsenseaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [AdsenseAccountsReportsSavedGenerate](docs/accounts/README.md#adsenseaccountsreportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [AdsenseAccountsReportsSavedList](docs/accounts/README.md#adsenseaccountsreportssavedlist) - List all saved reports in the specified AdSense account.
* [AdsenseAccountsSavedadstylesGet](docs/accounts/README.md#adsenseaccountssavedadstylesget) - List a specific saved ad style for the specified account.
* [AdsenseAccountsSavedadstylesList](docs/accounts/README.md#adsenseaccountssavedadstyleslist) - List all saved ad styles in the specified account.
* [AdsenseAccountsUrlchannelsList](docs/accounts/README.md#adsenseaccountsurlchannelslist) - List all URL channels in the specified ad client for the specified account.

### [Adclients](docs/adclients/README.md)

* [AdsenseAdclientsList](docs/adclients/README.md#adsenseadclientslist) - List all ad clients in this AdSense account.

### [Adunits](docs/adunits/README.md)

* [AdsenseAdunitsCustomchannelsList](docs/adunits/README.md#adsenseadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [AdsenseAdunitsGet](docs/adunits/README.md#adsenseadunitsget) - Gets the specified ad unit in the specified ad client.
* [AdsenseAdunitsGetAdCode](docs/adunits/README.md#adsenseadunitsgetadcode) - Get ad code for the specified ad unit.
* [AdsenseAdunitsList](docs/adunits/README.md#adsenseadunitslist) - List all ad units in the specified ad client for this AdSense account.

### [Alerts](docs/alerts/README.md)

* [AdsenseAlertsDelete](docs/alerts/README.md#adsensealertsdelete) - Dismiss (delete) the specified alert from the publisher's AdSense account.
* [AdsenseAlertsList](docs/alerts/README.md#adsensealertslist) - List the alerts for this AdSense account.

### [Customchannels](docs/customchannels/README.md)

* [AdsenseCustomchannelsAdunitsList](docs/customchannels/README.md#adsensecustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [AdsenseCustomchannelsGet](docs/customchannels/README.md#adsensecustomchannelsget) - Get the specified custom channel from the specified ad client.
* [AdsenseCustomchannelsList](docs/customchannels/README.md#adsensecustomchannelslist) - List all custom channels in the specified ad client for this AdSense account.

### [Metadata](docs/metadata/README.md)

* [AdsenseMetadataDimensionsList](docs/metadata/README.md#adsensemetadatadimensionslist) - List the metadata for the dimensions available to this AdSense account.
* [AdsenseMetadataMetricsList](docs/metadata/README.md#adsensemetadatametricslist) - List the metadata for the metrics available to this AdSense account.

### [Payments](docs/payments/README.md)

* [AdsensePaymentsList](docs/payments/README.md#adsensepaymentslist) - List the payments for this AdSense account.

### [Reports](docs/reports/README.md)

* [AdsenseReportsGenerate](docs/reports/README.md#adsensereportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [AdsenseReportsSavedGenerate](docs/reports/README.md#adsensereportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [AdsenseReportsSavedList](docs/reports/README.md#adsensereportssavedlist) - List all saved reports in this AdSense account.

### [Savedadstyles](docs/savedadstyles/README.md)

* [AdsenseSavedadstylesGet](docs/savedadstyles/README.md#adsensesavedadstylesget) - Get a specific saved ad style from the user's account.
* [AdsenseSavedadstylesList](docs/savedadstyles/README.md#adsensesavedadstyleslist) - List all saved ad styles in the user's account.

### [Urlchannels](docs/urlchannels/README.md)

* [AdsenseUrlchannelsList](docs/urlchannels/README.md#adsenseurlchannelslist) - List all URL channels in the specified ad client for this AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
