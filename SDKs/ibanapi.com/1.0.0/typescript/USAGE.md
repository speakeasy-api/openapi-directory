<!-- Start SDK Example Usage -->
```typescript
import {
  GetBalanceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.ibanapi.getBalance().then((res: GetBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->