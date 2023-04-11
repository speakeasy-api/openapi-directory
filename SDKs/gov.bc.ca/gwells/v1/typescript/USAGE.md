<!-- Start SDK Example Usage -->
```typescript
import {
  AquiferCodesDemandListRequest,
  AquiferCodesDemandListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

const req: AquiferCodesDemandListRequest = {
  limit: 548814,
  offset: 592845,
};

sdk.aquiferCodes.aquiferCodesDemandList(req).then((res: AquiferCodesDemandListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->