# Quality

### Available Operations

* [QualityGetDailyDataQualityForSite](#qualitygetdailydataqualityforsite) - Get Site DailyQuality
* [QualityGetOverallDataQualityForSites](#qualitygetoveralldataqualityforsites) - Get Site OverallQuality

## QualityGetDailyDataQualityForSite

Get Site DailyQuality

### Example Usage

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
    res, err := s.Quality.QualityGetDailyDataQualityForSite(ctx, operations.QualityGetDailyDataQualityForSiteRequest{
        EndDate: "unde",
        SiteID: "nulla",
        StartDate: "corrupti",
        Version: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyQualityResponse != nil {
        // handle response
    }
}
```

## QualityGetOverallDataQualityForSites

Get Site OverallQuality

### Example Usage

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
    res, err := s.Quality.QualityGetOverallDataQualityForSites(ctx, operations.QualityGetOverallDataQualityForSitesRequest{
        EndDate: "vel",
        Sites: "error",
        StartDate: "deserunt",
        Version: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OverallQualityResponse != nil {
        // handle response
    }
}
```
