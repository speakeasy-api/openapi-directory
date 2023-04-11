<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAccountsIdRequest,
  DeleteAccountsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    developerKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteAccountsIdRequest = {
  id: 548814,
};

sdk.accounts.deleteAccountsId(req).then((res: DeleteAccountsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->