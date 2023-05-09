# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/analytics/v2.4/go
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
    res, err := s.Data.AnalyticsDataGet(ctx, operations.AnalyticsDataGetRequest{
        Alt: shared.AltEnumAtom.ToPointer(),
        Dimensions: sdk.String("corrupti"),
        EndDate: "provident",
        Fields: sdk.String("distinctio"),
        Filters: sdk.String("quibusdam"),
        Ids: "unde",
        Key: sdk.String("nulla"),
        MaxResults: sdk.Int64(544883),
        Metrics: "illum",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        Segment: sdk.String("deserunt"),
        Sort: sdk.String("suscipit"),
        StartDate: "iure",
        StartIndex: sdk.Int64(297534),
        UserIP: sdk.String("debitis"),
    }, operations.AnalyticsDataGetSecurity{
        Option1: &operations.AnalyticsDataGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Data](docs/data/README.md)

* [AnalyticsDataGet](docs/data/README.md#analyticsdataget) - Returns Analytics report data for a view (profile).

### [Management](docs/management/README.md)

* [AnalyticsManagementAccountsList](docs/management/README.md#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [AnalyticsManagementGoalsList](docs/management/README.md#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [AnalyticsManagementProfilesList](docs/management/README.md#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [AnalyticsManagementSegmentsList](docs/management/README.md#analyticsmanagementsegmentslist) - Lists advanced segments to which the user has access.
* [AnalyticsManagementWebpropertiesList](docs/management/README.md#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
