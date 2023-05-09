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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Areas.AreasGet(ctx, operations.AreasGetRequest{
        Version: "corrupti",
    })
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


### [Areas](docs/areas/README.md)

* [AreasGet](docs/areas/README.md#areasget) - Returns list of areas
* [GetVVersionAreasAreaIds](docs/areas/README.md#getvversionareasareaids) - Returns details of selected area

### [Quality](docs/quality/README.md)

* [QualityGetDailyDataQualityForSite](docs/quality/README.md#qualitygetdailydataqualityforsite) - Get Site DailyQuality
* [QualityGetOverallDataQualityForSites](docs/quality/README.md#qualitygetoveralldataqualityforsites) - Get Site OverallQuality

### [Reports](docs/reports/README.md)

* [ReportsIndex](docs/reports/README.md#reportsindex) - Gets the daily report.
* [GetVVersionReportsStartDateToEndDateReportType](docs/reports/README.md#getvversionreportsstartdatetoenddatereporttype) - Gets the daily report.

### [SiteTypes](docs/sitetypes/README.md)

* [SiteTypesGetSitesForPublicFacingAPI](docs/sitetypes/README.md#sitetypesgetsitesforpublicfacingapi) - Returns the layer metadata for the LayerId specified.
* [SiteTypesIndex](docs/sitetypes/README.md#sitetypesindex) - Return list of site types

### [Sites](docs/sites/README.md)

* [SitesIndex](docs/sites/README.md#sitesindex) - Get a list of sites
* [GetVVersionSitesSiteIds](docs/sites/README.md#getvversionsitessiteids) - Get selected sites
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
