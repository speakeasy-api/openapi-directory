# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/bigquerydatatransfer/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.bigquerydatatransfer_projects_locations_data_sources_check_valid_creds(req, operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity(
    option1=operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.check_valid_creds_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `bigquerydatatransfer_projects_locations_data_sources_check_valid_creds` - Returns true if valid credentials exist for the given data source and requesting user.
* `bigquerydatatransfer_projects_locations_data_sources_list` - Lists supported data sources and returns their settings.
* `bigquerydatatransfer_projects_locations_enroll_data_sources` - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* `bigquerydatatransfer_projects_locations_list` - Lists information about the supported locations for this service.
* `bigquerydatatransfer_projects_transfer_configs_create` - Creates a new data transfer configuration.
* `bigquerydatatransfer_projects_transfer_configs_list` - Returns information about all transfer configs owned by a project in the specified location.
* `bigquerydatatransfer_projects_transfer_configs_patch` - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* `bigquerydatatransfer_projects_transfer_configs_runs_delete` - Deletes the specified transfer run.
* `bigquerydatatransfer_projects_transfer_configs_runs_get` - Returns information about the particular transfer run.
* `bigquerydatatransfer_projects_transfer_configs_runs_list` - Returns information about running and completed transfer runs.
* `bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list` - Returns log messages for the transfer run.
* `bigquerydatatransfer_projects_transfer_configs_schedule_runs` - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* `bigquerydatatransfer_projects_transfer_configs_start_manual_runs` - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
