<!-- Start SDK Example Usage -->
```typescript
import {
  CorrelationRequest,
  CorrelationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CorrelationRequest = {
  limit: "1000",
  tokens: "3375, 3306",
};

sdk.correlation(req).then((res: CorrelationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->