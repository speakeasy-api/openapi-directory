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

* `adsensehostAccountsAdclientsGet` - Get information about one of the ad clients in the specified publisher's AdSense account.
* `adsensehostAccountsAdclientsList` - List all hosted ad clients in the specified hosted account.
* `adsensehostAccountsAdunitsDelete` - Delete the specified ad unit from the specified publisher AdSense account.
* `adsensehostAccountsAdunitsGet` - Get the specified host ad unit in this AdSense account.
* `adsensehostAccountsAdunitsGetAdCode` - Get ad code for the specified ad unit, attaching the specified host custom channels.
* `adsensehostAccountsAdunitsInsert` - Insert the supplied ad unit into the specified publisher AdSense account.
* `adsensehostAccountsAdunitsList` - List all ad units in the specified publisher's AdSense account.
* `adsensehostAccountsAdunitsPatch` - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* `adsensehostAccountsAdunitsUpdate` - Update the supplied ad unit in the specified publisher AdSense account.
* `adsensehostAccountsGet` - Get information about the selected associated AdSense account.
* `adsensehostAccountsList` - List hosted accounts associated with this AdSense account by ad client id.
* `adsensehostAccountsReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### adclients

* `adsensehostAdclientsGet` - Get information about one of the ad clients in the Host AdSense account.
* `adsensehostAdclientsList` - List all host ad clients in this AdSense account.

### associationsessions

* `adsensehostAssociationsessionsStart` - Create an association session for initiating an association with an AdSense user.
* `adsensehostAssociationsessionsVerify` - Verify an association session after the association callback returns from AdSense signup.

### customchannels

* `adsensehostCustomchannelsDelete` - Delete a specific custom channel from the host AdSense account.
* `adsensehostCustomchannelsGet` - Get a specific custom channel from the host AdSense account.
* `adsensehostCustomchannelsInsert` - Add a new custom channel to the host AdSense account.
* `adsensehostCustomchannelsList` - List all host custom channels in this AdSense account.
* `adsensehostCustomchannelsPatch` - Update a custom channel in the host AdSense account. This method supports patch semantics.
* `adsensehostCustomchannelsUpdate` - Update a custom channel in the host AdSense account.

### reports

* `adsensehostReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### urlchannels

* `adsensehostUrlchannelsDelete` - Delete a URL channel from the host AdSense account.
* `adsensehostUrlchannelsInsert` - Add a new URL channel to the host AdSense account.
* `adsensehostUrlchannelsList` - List all host URL channels in the host AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
