# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/adsense/v1.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdsenseAccountsAdclientsGetAdCodeRequest(
    account_id="corrupti",
    ad_client_id="provident",
    alt="json",
    fields_="quibusdam",
    key="unde",
    oauth_token="nulla",
    pretty_print=False,
    quota_user="corrupti",
    tag_partner="illum",
    user_ip="vel",
)
    
res = s.accounts.adsense_accounts_adclients_get_ad_code(req, operations.AdsenseAccountsAdclientsGetAdCodeSecurity(
    option1=operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.ad_code is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `adsense_accounts_adclients_get_ad_code` - Get Auto ad code for a given ad client.
* `adsense_accounts_adclients_list` - List all ad clients in the specified account.
* `adsense_accounts_adunits_customchannels_list` - List all custom channels which the specified ad unit belongs to.
* `adsense_accounts_adunits_get` - Gets the specified ad unit in the specified ad client for the specified account.
* `adsense_accounts_adunits_get_ad_code` - Get ad code for the specified ad unit.
* `adsense_accounts_adunits_list` - List all ad units in the specified ad client for the specified account.
* `adsense_accounts_alerts_delete` - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* `adsense_accounts_alerts_list` - List the alerts for the specified AdSense account.
* `adsense_accounts_customchannels_adunits_list` - List all ad units in the specified custom channel.
* `adsense_accounts_customchannels_get` - Get the specified custom channel from the specified ad client for the specified account.
* `adsense_accounts_customchannels_list` - List all custom channels in the specified ad client for the specified account.
* `adsense_accounts_get` - Get information about the selected AdSense account.
* `adsense_accounts_list` - List all accounts available to this AdSense account.
* `adsense_accounts_payments_list` - List the payments for the specified AdSense account.
* `adsense_accounts_reports_generate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsense_accounts_reports_saved_generate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsense_accounts_reports_saved_list` - List all saved reports in the specified AdSense account.
* `adsense_accounts_savedadstyles_get` - List a specific saved ad style for the specified account.
* `adsense_accounts_savedadstyles_list` - List all saved ad styles in the specified account.
* `adsense_accounts_urlchannels_list` - List all URL channels in the specified ad client for the specified account.

### adclients

* `adsense_adclients_list` - List all ad clients in this AdSense account.

### adunits

* `adsense_adunits_customchannels_list` - List all custom channels which the specified ad unit belongs to.
* `adsense_adunits_get` - Gets the specified ad unit in the specified ad client.
* `adsense_adunits_get_ad_code` - Get ad code for the specified ad unit.
* `adsense_adunits_list` - List all ad units in the specified ad client for this AdSense account.

### alerts

* `adsense_alerts_delete` - Dismiss (delete) the specified alert from the publisher's AdSense account.
* `adsense_alerts_list` - List the alerts for this AdSense account.

### customchannels

* `adsense_customchannels_adunits_list` - List all ad units in the specified custom channel.
* `adsense_customchannels_get` - Get the specified custom channel from the specified ad client.
* `adsense_customchannels_list` - List all custom channels in the specified ad client for this AdSense account.

### metadata

* `adsense_metadata_dimensions_list` - List the metadata for the dimensions available to this AdSense account.
* `adsense_metadata_metrics_list` - List the metadata for the metrics available to this AdSense account.

### payments

* `adsense_payments_list` - List the payments for this AdSense account.

### reports

* `adsense_reports_generate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsense_reports_saved_generate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsense_reports_saved_list` - List all saved reports in this AdSense account.

### savedadstyles

* `adsense_savedadstyles_get` - Get a specific saved ad style from the user's account.
* `adsense_savedadstyles_list` - List all saved ad styles in the user's account.

### urlchannels

* `adsense_urlchannels_list` - List all URL channels in the specified ad client for this AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
