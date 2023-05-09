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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdditionalData.GetSearchVersionNumberAdditionalDataExt(ctx, operations.GetSearchVersionNumberAdditionalDataExtRequest{
        Ext: operations.GetSearchVersionNumberAdditionalDataExtExtEnumJSON,
        Geometries: "corrupti",
        GeometriesZoom: operations.GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnumThirteen.ToPointer(),
        VersionNumber: shared.VersionNumberEnumTwo,
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


### [AdditionalData](docs/additionaldata/README.md)

* [GetSearchVersionNumberAdditionalDataExt](docs/additionaldata/README.md#getsearchversionnumberadditionaldataext) - Additional Data

### [Filters](docs/filters/README.md)

* [GetSearchVersionNumberGeometryFilterExt](docs/filters/README.md#getsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~GetSearchVersionNumberRoutedFilterPositionHeadingExt~~](docs/filters/README.md#getsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**
* [PostSearchVersionNumberGeometryFilterExt](docs/filters/README.md#postsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~PostSearchVersionNumberRoutedFilterPositionHeadingExt~~](docs/filters/README.md#postsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**

### [Geocoding](docs/geocoding/README.md)

* [GetSearchVersionNumberGeocodeQueryExt](docs/geocoding/README.md#getsearchversionnumbergeocodequeryext) - Geocode
* [GetSearchVersionNumberStructuredGeocodeExt](docs/geocoding/README.md#getsearchversionnumberstructuredgeocodeext) - Structured Geocode

### [ReverseGeocoding](docs/reversegeocoding/README.md)

* [GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt](docs/reversegeocoding/README.md#getsearchversionnumberreversegeocodecrossstreetpositionext) - Cross Street lookup
* [GetSearchVersionNumberReverseGeocodePositionExt](docs/reversegeocoding/README.md#getsearchversionnumberreversegeocodepositionext) - Reverse Geocode

### [Search](docs/search/README.md)

* [~~GetSearchVersionNumberCSCategoryExt~~](docs/search/README.md#getsearchversionnumbercscategoryext) - Low Bandwith Category Search :warning: **Deprecated**
* [GetSearchVersionNumberCategorySearchQueryExt](docs/search/README.md#getsearchversionnumbercategorysearchqueryext) - Category Search
* [GetSearchVersionNumberGeometrySearchQueryExt](docs/search/README.md#getsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [GetSearchVersionNumberNearbySearchExt](docs/search/README.md#getsearchversionnumbernearbysearchext) - Nearby Search
* [GetSearchVersionNumberPoiSearchQueryExt](docs/search/README.md#getsearchversionnumberpoisearchqueryext) - Points of Interest Search
* [~~GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~](docs/search/README.md#getsearchversionnumberroutedsearchquerypositionheadingext) - Routed Search :warning: **Deprecated**
* [~~GetSearchVersionNumberSQueryExt~~](docs/search/README.md#getsearchversionnumbersqueryext) - Low bandwith Search :warning: **Deprecated**
* [GetSearchVersionNumberSearchQueryExt](docs/search/README.md#getsearchversionnumbersearchqueryext) - Fuzzy Search
* [PostSearchVersionNumberGeometrySearchQueryExt](docs/search/README.md#postsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [PostSearchVersionNumberSearchAlongRouteQueryExt](docs/search/README.md#postsearchversionnumbersearchalongroutequeryext) - Along Route Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
