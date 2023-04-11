<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccountCreateAccountRequest,
  CreateAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAccountCreateAccountRequest = {
  friendlyName: "corrupti",
};

sdk.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->