<!-- Start SDK Example Usage -->
```typescript
import {
  CompareStationRequest,
  CompareStationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CompareStationRequest = {
  stationName: "corrupti",
};

sdk.odWeather.compareStation(req).then((res: CompareStationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->