# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/routing/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/routing/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
  GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse,
  GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  WindingnessEnum,
  VersionNumberEnum,
  TravelModeEnum,
  RouteTypeEnum,
  ReportEnum,
  HillinessEnum,
  ContentTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest = {
  accelerationEfficiency: 5488.14,
  arriveAt: "provident",
  auxiliaryPowerInLitersPerHour: 7151.9,
  avoid: "quibusdam",
  callback: "unde",
  constantSpeedConsumptionInLitersPerHundredkm: "nulla",
  constantSpeedConsumptionInkWhPerHundredkm: "corrupti",
  contentType: ContentTypeEnum.Jsonp,
  currentFuelInLiters: 4236.55,
  decelerationEfficiency: 6235.64,
  departAt: "deserunt",
  downhillEfficiency: 3843.82,
  energyBudgetInkWh: 4375.87,
  fuelBudgetInLiters: 2975.34,
  fuelEnergyDensityInMJoulesPerLiter: 8917.73,
  hilliness: HillinessEnum.Low,
  origin: "delectus",
  report: ReportEnum.EffectiveSettings,
  routeType: RouteTypeEnum.Shortest,
  timeBudgetInSec: 3834.41,
  traffic: false,
  travelMode: TravelModeEnum.Bus,
  uphillEfficiency: 7917.25,
  vehicleAxleWeight: 812169,
  vehicleCommercial: false,
  vehicleEngineType: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum.Electric,
  vehicleHeight: 4799.77,
  vehicleLength: 5680.45,
  vehicleLoadType: "nisi",
  vehicleMaxSpeed: 925597,
  vehicleWeight: 836079,
  vehicleWidth: 710.36,
  versionNumber: VersionNumberEnum.One,
  windingness: WindingnessEnum.Normal,
};

sdk.routing.getRoutingVersionNumberCalculateReachableRangeOriginContentType(req).then((res: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### routing

* `getRoutingVersionNumberCalculateReachableRangeOriginContentType` - Reachable Range
* `getRoutingVersionNumberCalculateRouteLocationsContentType` - Calculate Route
* `postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson` - Reachable Range
* `postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw` - Reachable Range
* `postRoutingVersionNumberCalculateRouteLocationsContentTypeJson` - Calculate Route
* `postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw` - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

