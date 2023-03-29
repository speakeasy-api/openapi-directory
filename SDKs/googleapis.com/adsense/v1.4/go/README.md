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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AdsenseAccountsAdclientsGetAdCodeRequest{
        Security: operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
            Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.AdsenseAccountsAdclientsGetAdCodePathParams{
            AccountID: "unde",
            AdClientID: "deserunt",
        },
        QueryParams: operations.AdsenseAccountsAdclientsGetAdCodeQueryParams{
            Alt: "json",
            Fields: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            TagPartner: "nulla",
            UserIP: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, req)
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
## SDK Available Operations


### Accounts

* `AdsenseAccountsAdclientsGetAdCode` - Get Auto ad code for a given ad client.
* `AdsenseAccountsAdclientsList` - List all ad clients in the specified account.
* `AdsenseAccountsAdunitsCustomchannelsList` - List all custom channels which the specified ad unit belongs to.
* `AdsenseAccountsAdunitsGet` - Gets the specified ad unit in the specified ad client for the specified account.
* `AdsenseAccountsAdunitsGetAdCode` - Get ad code for the specified ad unit.
* `AdsenseAccountsAdunitsList` - List all ad units in the specified ad client for the specified account.
* `AdsenseAccountsAlertsDelete` - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* `AdsenseAccountsAlertsList` - List the alerts for the specified AdSense account.
* `AdsenseAccountsCustomchannelsAdunitsList` - List all ad units in the specified custom channel.
* `AdsenseAccountsCustomchannelsGet` - Get the specified custom channel from the specified ad client for the specified account.
* `AdsenseAccountsCustomchannelsList` - List all custom channels in the specified ad client for the specified account.
* `AdsenseAccountsGet` - Get information about the selected AdSense account.
* `AdsenseAccountsList` - List all accounts available to this AdSense account.
* `AdsenseAccountsPaymentsList` - List the payments for the specified AdSense account.
* `AdsenseAccountsReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `AdsenseAccountsReportsSavedGenerate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `AdsenseAccountsReportsSavedList` - List all saved reports in the specified AdSense account.
* `AdsenseAccountsSavedadstylesGet` - List a specific saved ad style for the specified account.
* `AdsenseAccountsSavedadstylesList` - List all saved ad styles in the specified account.
* `AdsenseAccountsUrlchannelsList` - List all URL channels in the specified ad client for the specified account.

### Adclients

* `AdsenseAdclientsList` - List all ad clients in this AdSense account.

### Adunits

* `AdsenseAdunitsCustomchannelsList` - List all custom channels which the specified ad unit belongs to.
* `AdsenseAdunitsGet` - Gets the specified ad unit in the specified ad client.
* `AdsenseAdunitsGetAdCode` - Get ad code for the specified ad unit.
* `AdsenseAdunitsList` - List all ad units in the specified ad client for this AdSense account.

### Alerts

* `AdsenseAlertsDelete` - Dismiss (delete) the specified alert from the publisher's AdSense account.
* `AdsenseAlertsList` - List the alerts for this AdSense account.

### Customchannels

* `AdsenseCustomchannelsAdunitsList` - List all ad units in the specified custom channel.
* `AdsenseCustomchannelsGet` - Get the specified custom channel from the specified ad client.
* `AdsenseCustomchannelsList` - List all custom channels in the specified ad client for this AdSense account.

### Metadata

* `AdsenseMetadataDimensionsList` - List the metadata for the dimensions available to this AdSense account.
* `AdsenseMetadataMetricsList` - List the metadata for the metrics available to this AdSense account.

### Payments

* `AdsensePaymentsList` - List the payments for this AdSense account.

### Reports

* `AdsenseReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `AdsenseReportsSavedGenerate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `AdsenseReportsSavedList` - List all saved reports in this AdSense account.

### Savedadstyles

* `AdsenseSavedadstylesGet` - Get a specific saved ad style from the user's account.
* `AdsenseSavedadstylesList` - List all saved ad styles in the user's account.

### Urlchannels

* `AdsenseUrlchannelsList` - List all URL channels in the specified ad client for this AdSense account.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
