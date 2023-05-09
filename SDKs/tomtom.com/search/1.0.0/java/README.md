# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtExtEnum;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberAdditionalDataExtRequest req = new GetSearchVersionNumberAdditionalDataExtRequest(GetSearchVersionNumberAdditionalDataExtExtEnum.JSON, "provident", VersionNumberEnum.TWO) {{
                geometriesZoom = GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum.SIXTEEN;
            }};            

            GetSearchVersionNumberAdditionalDataExtResponse res = sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [additionalData](docs/additionaldata/README.md)

* [getSearchVersionNumberAdditionalDataExt](docs/additionaldata/README.md#getsearchversionnumberadditionaldataext) - Additional Data

### [filters](docs/filters/README.md)

* [getSearchVersionNumberGeometryFilterExt](docs/filters/README.md#getsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~getSearchVersionNumberRoutedFilterPositionHeadingExt~~](docs/filters/README.md#getsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**
* [postSearchVersionNumberGeometryFilterExt](docs/filters/README.md#postsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~postSearchVersionNumberRoutedFilterPositionHeadingExt~~](docs/filters/README.md#postsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**

### [geocoding](docs/geocoding/README.md)

* [getSearchVersionNumberGeocodeQueryExt](docs/geocoding/README.md#getsearchversionnumbergeocodequeryext) - Geocode
* [getSearchVersionNumberStructuredGeocodeExt](docs/geocoding/README.md#getsearchversionnumberstructuredgeocodeext) - Structured Geocode

### [reverseGeocoding](docs/reversegeocoding/README.md)

* [getSearchVersionNumberReverseGeocodeCrossStreetPositionExt](docs/reversegeocoding/README.md#getsearchversionnumberreversegeocodecrossstreetpositionext) - Cross Street lookup
* [getSearchVersionNumberReverseGeocodePositionExt](docs/reversegeocoding/README.md#getsearchversionnumberreversegeocodepositionext) - Reverse Geocode

### [search](docs/search/README.md)

* [~~getSearchVersionNumberCSCategoryExt~~](docs/search/README.md#getsearchversionnumbercscategoryext) - Low Bandwith Category Search :warning: **Deprecated**
* [getSearchVersionNumberCategorySearchQueryExt](docs/search/README.md#getsearchversionnumbercategorysearchqueryext) - Category Search
* [getSearchVersionNumberGeometrySearchQueryExt](docs/search/README.md#getsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [getSearchVersionNumberNearbySearchExt](docs/search/README.md#getsearchversionnumbernearbysearchext) - Nearby Search
* [getSearchVersionNumberPoiSearchQueryExt](docs/search/README.md#getsearchversionnumberpoisearchqueryext) - Points of Interest Search
* [~~getSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~](docs/search/README.md#getsearchversionnumberroutedsearchquerypositionheadingext) - Routed Search :warning: **Deprecated**
* [~~getSearchVersionNumberSQueryExt~~](docs/search/README.md#getsearchversionnumbersqueryext) - Low bandwith Search :warning: **Deprecated**
* [getSearchVersionNumberSearchQueryExt](docs/search/README.md#getsearchversionnumbersearchqueryext) - Fuzzy Search
* [postSearchVersionNumberGeometrySearchQueryExt](docs/search/README.md#postsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [postSearchVersionNumberSearchAlongRouteQueryExt](docs/search/README.md#postsearchversionnumbersearchalongroutequeryext) - Along Route Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
