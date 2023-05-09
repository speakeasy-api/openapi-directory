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
    res, err := s.Anomalies.PlaydeveloperreportingAnomaliesList(ctx, operations.PlaydeveloperreportingAnomaliesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.PlaydeveloperreportingAnomaliesListSecurity{
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


### [Anomalies](docs/anomalies/README.md)

* [PlaydeveloperreportingAnomaliesList](docs/anomalies/README.md#playdeveloperreportinganomalieslist) - Lists anomalies in any of the datasets.

### [Vitals](docs/vitals/README.md)

* [PlaydeveloperreportingVitalsErrorsIssuesSearch](docs/vitals/README.md#playdeveloperreportingvitalserrorsissuessearch) - Searches all error issues in which reports have been grouped.
* [PlaydeveloperreportingVitalsErrorsReportsSearch](docs/vitals/README.md#playdeveloperreportingvitalserrorsreportssearch) - Searches all error reports received for an app.
* [PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet](docs/vitals/README.md#playdeveloperreportingvitalsstuckbackgroundwakelockrateget) - Describes the properties of the metric set.
* [PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery](docs/vitals/README.md#playdeveloperreportingvitalsstuckbackgroundwakelockratequery) - Queries the metrics in the metric set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
