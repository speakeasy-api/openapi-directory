<!-- Start SDK Example Usage -->
```typescript
import {
  GetProductInfoRequest,
  GetProductInfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetProductInfoRequest = {
  code: "corrupti",
};

sdk.product.getProductInfo(req).then((res: GetProductInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->