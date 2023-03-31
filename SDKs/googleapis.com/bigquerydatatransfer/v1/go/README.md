# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigquerydatatransfer/v1/go
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

    req := operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(ctx, req, operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity{
        Option1: &operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckValidCredsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds` - Returns true if valid credentials exist for the given data source and requesting user.
* `BigquerydatatransferProjectsLocationsDataSourcesList` - Lists supported data sources and returns their settings.
* `BigquerydatatransferProjectsLocationsEnrollDataSources` - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* `BigquerydatatransferProjectsLocationsList` - Lists information about the supported locations for this service.
* `BigquerydatatransferProjectsTransferConfigsCreate` - Creates a new data transfer configuration.
* `BigquerydatatransferProjectsTransferConfigsList` - Returns information about all transfer configs owned by a project in the specified location.
* `BigquerydatatransferProjectsTransferConfigsPatch` - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* `BigquerydatatransferProjectsTransferConfigsRunsDelete` - Deletes the specified transfer run.
* `BigquerydatatransferProjectsTransferConfigsRunsGet` - Returns information about the particular transfer run.
* `BigquerydatatransferProjectsTransferConfigsRunsList` - Returns information about running and completed transfer runs.
* `BigquerydatatransferProjectsTransferConfigsRunsTransferLogsList` - Returns log messages for the transfer run.
* `BigquerydatatransferProjectsTransferConfigsScheduleRuns` - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* `BigquerydatatransferProjectsTransferConfigsStartManualRuns` - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
