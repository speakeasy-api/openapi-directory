# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/playdeveloperreporting/v1alpha1/go
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

    req := operations.PlaydeveloperreportingAnomaliesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PageSize: 423655,
        PageToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Anomalies.PlaydeveloperreportingAnomaliesList(ctx, req, operations.PlaydeveloperreportingAnomaliesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Anomalies

* `PlaydeveloperreportingAnomaliesList` - Lists anomalies in any of the datasets.

### Vitals

* `PlaydeveloperreportingVitalsErrorsIssuesSearch` - Searches all error issues in which reports have been grouped.
* `PlaydeveloperreportingVitalsErrorsReportsSearch` - Searches all error reports received for an app.
* `PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet` - Describes the properties of the metric set.
* `PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery` - Queries the metrics in the metric set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
