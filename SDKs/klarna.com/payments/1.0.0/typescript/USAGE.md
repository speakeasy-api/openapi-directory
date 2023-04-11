<!-- Start SDK Example Usage -->
```typescript
import {
  CancelAuthorizationRequest,
  CancelAuthorizationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CancelAuthorizationRequest = {
  authorizationToken: "corrupti",
};

sdk.orders.cancelAuthorization(req).then((res: CancelAuthorizationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->