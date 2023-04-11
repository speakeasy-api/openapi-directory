<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccountConfigCreateAccountConfigRequest,
  CreateAccountConfigResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAccountConfigCreateAccountConfigRequest = {
  key: "corrupti",
  value: "provident",
};

sdk.createAccountConfig(req).then((res: CreateAccountConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->