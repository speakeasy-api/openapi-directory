# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### additionalData

* `getSearchVersionNumberAdditionalDataExt` - Additional Data

### filters

* `getSearchVersionNumberGeometryFilterExt` - Geometry Filter
* `getSearchVersionNumberRoutedFilterPositionHeadingExt` - Routed Filter
* `postSearchVersionNumberGeometryFilterExt` - Geometry Filter
* `postSearchVersionNumberRoutedFilterPositionHeadingExt` - Routed Filter

### geocoding

* `getSearchVersionNumberGeocodeQueryExt` - Geocode
* `getSearchVersionNumberStructuredGeocodeExt` - Structured Geocode

### reverseGeocoding

* `getSearchVersionNumberReverseGeocodeCrossStreetPositionExt` - Cross Street lookup
* `getSearchVersionNumberReverseGeocodePositionExt` - Reverse Geocode

### search

* `getSearchVersionNumberCSCategoryExt` - Low Bandwith Category Search
* `getSearchVersionNumberCategorySearchQueryExt` - Category Search
* `getSearchVersionNumberGeometrySearchQueryExt` - Geometry Search
* `getSearchVersionNumberNearbySearchExt` - Nearby Search
* `getSearchVersionNumberPoiSearchQueryExt` - Points of Interest Search
* `getSearchVersionNumberRoutedSearchQueryPositionHeadingExt` - Routed Search
* `getSearchVersionNumberSQueryExt` - Low bandwith Search
* `getSearchVersionNumberSearchQueryExt` - Fuzzy Search
* `postSearchVersionNumberGeometrySearchQueryExt` - Geometry Search
* `postSearchVersionNumberSearchAlongRouteQueryExt` - Along Route Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
