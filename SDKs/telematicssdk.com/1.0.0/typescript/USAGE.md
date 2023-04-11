<!-- Start SDK Example Usage -->
```typescript
import {
  TripsTripDetailsRequest,
  TripsTripDetailsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TripsTripDetailsRequest = {
  trackToken: "corrupti",
};

sdk.twoForMobileAppOptional.tripsTripDetails(req).then((res: TripsTripDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->