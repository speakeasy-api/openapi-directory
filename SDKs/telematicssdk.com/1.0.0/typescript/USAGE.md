<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TripsTripDetailsRequest, TripsTripDetailsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TripsTripDetailsRequest = {
  queryParams: {
    trackToken: "sit",
  },
};

sdk.twoForMobileAppOptional.tripsTripDetails(req).then((res: TripsTripDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->