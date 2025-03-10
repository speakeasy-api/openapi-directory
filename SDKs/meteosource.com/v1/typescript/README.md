# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/meteosource.com/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/meteosource.com/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FindPlacesFindPlacesGetRequest,
  FindPlacesFindPlacesGetResponse,
  FindPlacesFindPlacesGetLanguageLanguageEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindPlacesFindPlacesGetRequest = {
  key: "corrupti",
  language: FindPlacesFindPlacesGetLanguageLanguageEnum.Fr,
  text: "distinctio",
};

sdk.locationEndpoints.findPlacesFindPlacesGet(req).then((res: FindPlacesFindPlacesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### locationEndpoints

* `findPlacesFindPlacesGet` - Search for places. Complete words required.
* `findPlacesPrefixFindPlacesPrefixGet` - Prefix search for places. Useful for autocomplete forms.
* `nearestPlaceNearestPlaceGet` - Returns the nearest named location for a given GPS coordinates.

### pointWeather

* `airQualityAirQualityGet` - Returns air quality data for a single point (geographic name or GPS)
* `pointPointGet` - Returns weather data for a single point (geographic name or GPS)

### timeMachineHistoricalWeather

* `timeMachineTimeMachineGet` - Returns weather data for a single location and given day in the past

### weatherMaps

* `mapMapGet` - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

