<!-- Start SDK Example Usage -->
```typescript
import {
  KkidAllowanceGetRequest,
  KkidAllowanceGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KkidAllowanceGetRequest = {
  kidUserId: 548814,
  transactionDays: 592845,
};

sdk.kKid.kkidAllowanceGet(req).then((res: KkidAllowanceGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->