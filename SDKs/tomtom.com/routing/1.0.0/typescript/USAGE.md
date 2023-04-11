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