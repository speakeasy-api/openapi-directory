# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/search/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/search/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetSearchVersionNumberAdditionalDataExtRequest,
  GetSearchVersionNumberAdditionalDataExtResponse,
  GetSearchVersionNumberAdditionalDataExtExtEnum,
  GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum,
} from "openapi/dist/sdk/models/operations";
import {
  VersionNumberEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSearchVersionNumberAdditionalDataExtRequest = {
  ext: GetSearchVersionNumberAdditionalDataExtExtEnum.Json,
  geometries: "corrupti",
  geometriesZoom: GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum.Thirteen,
  versionNumber: VersionNumberEnum.Two,
};

sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req).then((res: GetSearchVersionNumberAdditionalDataExtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

