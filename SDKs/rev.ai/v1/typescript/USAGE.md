<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    accessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.account.getAccount().then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->