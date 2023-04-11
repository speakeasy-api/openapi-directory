<!-- Start SDK Example Usage -->
```typescript
import {
  DistrictsInARegionRequest,
  DistrictsInARegionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DistrictsInARegionRequest = {
  country: "Malta",
  region: "provident",
};

sdk.districtsInRegion.districtsInARegion(req).then((res: DistrictsInARegionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->