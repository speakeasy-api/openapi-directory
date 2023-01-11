<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeparturesGetForStopRequest, DeparturesGetForStopResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeparturesGetForStopRequest = {
  pathParams: {
    routeType: 8717895732742165505,
    stopId: 2259404117704393152,
  },
  queryParams: {
    dateUtc: "1978-05-13T03:50:47Z",
    devid: "expedita",
    directionId: 3390393562759376202,
    expand: [
      "VehiclePosition",
      "None",
    ],
    gtfs: true,
    includeCancelled: false,
    includeGeopath: true,
    lookBackwards: true,
    maxResults: 7837839688282259259,
    platformNumbers: [
      5617773211005988520,
    ],
    signature: "et",
    token: "ut",
  },
};

sdk.departures.departuresGetForStop(req).then((res: DeparturesGetForStopResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->