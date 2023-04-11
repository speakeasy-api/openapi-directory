<!-- Start SDK Example Usage -->
```typescript
import {
  AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest,
  AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest = {
  aerodromesByDistance: {
    distance: 592845,
    latitude: 844266,
    longitude: 857946,
  },
  xApiKey: "corrupti",
};

sdk.aerodromes.aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req).then((res: AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->