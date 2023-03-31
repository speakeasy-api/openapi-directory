# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tomtom.com/search/1.0.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetSearchVersionNumberAdditionalDataExtRequest{
        Ext: "json",
        Geometries: "corrupti",
        GeometriesZoom: "13",
        VersionNumber: "2",
    }

    ctx := context.Background()
    res, err := s.AdditionalData.GetSearchVersionNumberAdditionalDataExt(ctx, req)
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


### AdditionalData

* `GetSearchVersionNumberAdditionalDataExt` - Additional Data

### Filters

* `GetSearchVersionNumberGeometryFilterExt` - Geometry Filter
* `GetSearchVersionNumberRoutedFilterPositionHeadingExt` - Routed Filter
* `PostSearchVersionNumberGeometryFilterExt` - Geometry Filter
* `PostSearchVersionNumberRoutedFilterPositionHeadingExt` - Routed Filter

### Geocoding

* `GetSearchVersionNumberGeocodeQueryExt` - Geocode
* `GetSearchVersionNumberStructuredGeocodeExt` - Structured Geocode

### ReverseGeocoding

* `GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt` - Cross Street lookup
* `GetSearchVersionNumberReverseGeocodePositionExt` - Reverse Geocode

### Search

* `GetSearchVersionNumberCSCategoryExt` - Low Bandwith Category Search
* `GetSearchVersionNumberCategorySearchQueryExt` - Category Search
* `GetSearchVersionNumberGeometrySearchQueryExt` - Geometry Search
* `GetSearchVersionNumberNearbySearchExt` - Nearby Search
* `GetSearchVersionNumberPoiSearchQueryExt` - Points of Interest Search
* `GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt` - Routed Search
* `GetSearchVersionNumberSQueryExt` - Low bandwith Search
* `GetSearchVersionNumberSearchQueryExt` - Fuzzy Search
* `PostSearchVersionNumberGeometrySearchQueryExt` - Geometry Search
* `PostSearchVersionNumberSearchAlongRouteQueryExt` - Along Route Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
