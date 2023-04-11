<!-- Start SDK Example Usage -->
```typescript
import {
  GetPublicHistoryRequest,
  GetPublicHistoryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetPublicHistoryRequest = {
  from: "corrupti",
  q: "provident",
  to: "distinctio",
};

sdk.default.getPublicHistory(req).then((res: GetPublicHistoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->