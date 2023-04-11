<!-- Start SDK Example Usage -->
```typescript
import {
  DeparturesGetForStopRequest,
  DeparturesGetForStopResponse,
  DeparturesGetForStopExpandEnum,
  DeparturesGetForStopRouteTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeparturesGetForStopRequest = {
  dateUtc: "2021-10-25T05:21:43.948Z",
  devid: "distinctio",
  directionId: 844266,
  expand: [
    DeparturesGetForStopExpandEnum.VehiclePosition,
    DeparturesGetForStopExpandEnum.Direction,
    DeparturesGetForStopExpandEnum.VehiclePosition,
  ],
  gtfs: false,
  includeCancelled: false,
  includeGeopath: false,
  lookBackwards: false,
  maxResults: 423655,
  platformNumbers: [
    645894,
    384382,
    437587,
  ],
  routeType: DeparturesGetForStopRouteTypeEnum.One,
  signature: "debitis",
  stopId: 56713,
  token: "delectus",
};

sdk.departures.departuresGetForStop(req).then((res: DeparturesGetForStopResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->