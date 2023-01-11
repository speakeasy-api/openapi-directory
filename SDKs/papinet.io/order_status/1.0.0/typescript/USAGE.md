<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetOrdersRequest, GetOrdersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetOrdersRequest = {
  queryParams: {
    limit: "sit",
    offset: "voluptas",
    orderStatus: "Cancelled",
  },
};

sdk.getOrders(req).then((res: GetOrdersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->