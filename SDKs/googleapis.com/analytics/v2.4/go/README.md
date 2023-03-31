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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AnalyticsDataGetRequest{
        Alt: "atom",
        Dimensions: "corrupti",
        EndDate: "provident",
        Fields: "distinctio",
        Filters: "quibusdam",
        Ids: "unde",
        Key: "nulla",
        MaxResults: 544883,
        Metrics: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        Segment: "deserunt",
        Sort: "suscipit",
        StartDate: "iure",
        StartIndex: 297534,
        UserIP: "debitis",
    }

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGet(ctx, req, operations.AnalyticsDataGetSecurity{
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


### Data

* `AnalyticsDataGet` - Returns Analytics report data for a view (profile).

### Management

* `AnalyticsManagementAccountsList` - Lists all accounts to which the user has access.
* `AnalyticsManagementGoalsList` - Lists goals to which the user has access.
* `AnalyticsManagementProfilesList` - Lists views (profiles) to which the user has access.
* `AnalyticsManagementSegmentsList` - Lists advanced segments to which the user has access.
* `AnalyticsManagementWebpropertiesList` - Lists web properties to which the user has access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
