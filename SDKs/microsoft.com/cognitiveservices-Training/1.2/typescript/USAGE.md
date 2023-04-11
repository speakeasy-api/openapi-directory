<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountInfoRequest,
  GetAccountInfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountInfoRequest = {
  trainingKey: "corrupti",
};

sdk.accountApi.getAccountInfo(req).then((res: GetAccountInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->