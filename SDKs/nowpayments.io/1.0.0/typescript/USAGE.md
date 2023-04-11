<!-- Start SDK Example Usage -->
```typescript
import {
  GetAllTransfersRequest,
  GetAllTransfersResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAllTransfersRequest = {
  id: "111",
  limit: "10",
  offset: "0",
  order: "ASC",
  status: "CREATED",
};

sdk.billingSubPartnerAPI.getAllTransfers(req).then((res: GetAllTransfersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->