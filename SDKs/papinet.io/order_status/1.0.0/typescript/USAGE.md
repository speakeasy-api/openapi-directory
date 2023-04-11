<!-- Start SDK Example Usage -->
```typescript
import {
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrdersOrderStatusEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetOrdersRequest = {
  limit: "corrupti",
  offset: "provident",
  orderStatus: GetOrdersOrderStatusEnum.Completed,
};

sdk.getOrders(req).then((res: GetOrdersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->