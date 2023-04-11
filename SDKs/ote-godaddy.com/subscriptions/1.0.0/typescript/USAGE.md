<!-- Start SDK Example Usage -->
```typescript
import {
  CancelRequest,
  CancelResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CancelRequest = {
  xShopperId: "corrupti",
  subscriptionId: "provident",
};

sdk.v1.cancel(req).then((res: CancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->