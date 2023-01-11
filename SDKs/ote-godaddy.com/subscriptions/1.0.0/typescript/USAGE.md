<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelRequest, CancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CancelRequest = {
  pathParams: {
    subscriptionId: "sit",
  },
  headers: {
    xShopperId: "voluptas",
  },
};

sdk.v1.cancel(req).then((res: CancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->