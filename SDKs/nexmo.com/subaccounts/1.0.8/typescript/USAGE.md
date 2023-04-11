<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSubAccountRequest,
  CreateSubAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateSubAccountRequest = {
  newSubaccountRequest: {
    name: "Subaccount department A",
    secret: "Password123",
    usePrimaryAccountBalance: false,
  },
  apiKey: "corrupti",
};

sdk.subaccountManagement.createSubAccount(req).then((res: CreateSubAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->