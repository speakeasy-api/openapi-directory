<!-- Start SDK Example Usage -->
```typescript
import {
  GetStatusRequest,
  GetStatusResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetStatusRequest = {
  ifNoneMatch: "corrupti",
};

sdk.tba.getStatus(req).then((res: GetStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->