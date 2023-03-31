# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/highwaysengland.co.uk/v1/go
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

    req := operations.AreasGetRequest{
        Version: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Areas.AreasGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AreaResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Areas

* `AreasGet` - Returns list of areas
* `GetVVersionAreasAreaIds` - Returns details of selected area

### Quality

* `QualityGetDailyDataQualityForSite` - Get Site DailyQuality
* `QualityGetOverallDataQualityForSites` - Get Site OverallQuality

### Reports

* `ReportsIndex` - Gets the daily report.
* `GetVVersionReportsStartDateToEndDateReportType` - Gets the daily report.

### SiteTypes

* `SiteTypesGetSitesForPublicFacingAPI` - Returns the layer metadata for the LayerId specified.
* `SiteTypesIndex` - Return list of site types

### Sites

* `SitesIndex` - Get a list of sites
* `GetVVersionSitesSiteIds` - Get selected sites
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
