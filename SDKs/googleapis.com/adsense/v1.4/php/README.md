# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `adsenseAccountsAdclientsGetAdCode` - Get Auto ad code for a given ad client.
* `adsenseAccountsAdclientsList` - List all ad clients in the specified account.
* `adsenseAccountsAdunitsCustomchannelsList` - List all custom channels which the specified ad unit belongs to.
* `adsenseAccountsAdunitsGet` - Gets the specified ad unit in the specified ad client for the specified account.
* `adsenseAccountsAdunitsGetAdCode` - Get ad code for the specified ad unit.
* `adsenseAccountsAdunitsList` - List all ad units in the specified ad client for the specified account.
* `adsenseAccountsAlertsDelete` - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* `adsenseAccountsAlertsList` - List the alerts for the specified AdSense account.
* `adsenseAccountsCustomchannelsAdunitsList` - List all ad units in the specified custom channel.
* `adsenseAccountsCustomchannelsGet` - Get the specified custom channel from the specified ad client for the specified account.
* `adsenseAccountsCustomchannelsList` - List all custom channels in the specified ad client for the specified account.
* `adsenseAccountsGet` - Get information about the selected AdSense account.
* `adsenseAccountsList` - List all accounts available to this AdSense account.
* `adsenseAccountsPaymentsList` - List the payments for the specified AdSense account.
* `adsenseAccountsReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsenseAccountsReportsSavedGenerate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsenseAccountsReportsSavedList` - List all saved reports in the specified AdSense account.
* `adsenseAccountsSavedadstylesGet` - List a specific saved ad style for the specified account.
* `adsenseAccountsSavedadstylesList` - List all saved ad styles in the specified account.
* `adsenseAccountsUrlchannelsList` - List all URL channels in the specified ad client for the specified account.

### adclients

* `adsenseAdclientsList` - List all ad clients in this AdSense account.

### adunits

* `adsenseAdunitsCustomchannelsList` - List all custom channels which the specified ad unit belongs to.
* `adsenseAdunitsGet` - Gets the specified ad unit in the specified ad client.
* `adsenseAdunitsGetAdCode` - Get ad code for the specified ad unit.
* `adsenseAdunitsList` - List all ad units in the specified ad client for this AdSense account.

### alerts

* `adsenseAlertsDelete` - Dismiss (delete) the specified alert from the publisher's AdSense account.
* `adsenseAlertsList` - List the alerts for this AdSense account.

### customchannels

* `adsenseCustomchannelsAdunitsList` - List all ad units in the specified custom channel.
* `adsenseCustomchannelsGet` - Get the specified custom channel from the specified ad client.
* `adsenseCustomchannelsList` - List all custom channels in the specified ad client for this AdSense account.

### metadata

* `adsenseMetadataDimensionsList` - List the metadata for the dimensions available to this AdSense account.
* `adsenseMetadataMetricsList` - List the metadata for the metrics available to this AdSense account.

### payments

* `adsensePaymentsList` - List the payments for this AdSense account.

### reports

* `adsenseReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsenseReportsSavedGenerate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsenseReportsSavedList` - List all saved reports in this AdSense account.

### savedadstyles

* `adsenseSavedadstylesGet` - Get a specific saved ad style from the user's account.
* `adsenseSavedadstylesList` - List all saved ad styles in the user's account.

### urlchannels

* `adsenseUrlchannelsList` - List all URL channels in the specified ad client for this AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
