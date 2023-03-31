# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/chromemanagement/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    customer="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    order_by="vel",
    org_unit_id="error",
    page_size=645894,
    page_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.customers.chromemanagement_customers_apps_count_chrome_app_requests(req, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_chrome_management_v1_count_chrome_app_requests_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `chromemanagement_customers_apps_count_chrome_app_requests` - Generate summary of app installation requests.
* `chromemanagement_customers_reports_count_chrome_browsers_needing_attention` - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* `chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date` - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* `chromemanagement_customers_reports_count_chrome_devices_that_need_attention` - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `chromemanagement_customers_reports_count_chrome_hardware_fleet_devices` - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `chromemanagement_customers_reports_count_chrome_versions` - Generate report of installed Chrome versions.
* `chromemanagement_customers_reports_count_installed_apps` - Generate report of app installations.
* `chromemanagement_customers_reports_count_print_jobs_by_printer` - Get a summary of printing done by each printer.
* `chromemanagement_customers_reports_count_print_jobs_by_user` - Get a summary of printing done by each user.
* `chromemanagement_customers_reports_find_installed_app_devices` - Generate report of managed Chrome browser devices that have a specified app installed.
* `chromemanagement_customers_telemetry_devices_list` - List all telemetry devices.
* `chromemanagement_customers_telemetry_events_list` - List telemetry events.
* `chromemanagement_customers_telemetry_users_get` - Get telemetry user.
* `chromemanagement_customers_telemetry_users_list` - List all telemetry users.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
