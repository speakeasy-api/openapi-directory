<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRequest, GetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRequest = {
  pathParams: {
    orderId: "sit",
  },
  headers: {
    xMarketId: "voluptas",
    xShopperId: "culpa",
  },
};

sdk.v1.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->