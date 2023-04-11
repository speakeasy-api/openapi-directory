<!-- Start SDK Example Usage -->
```typescript
import {
  ChangePasswordRequest,
  ChangePasswordResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChangePasswordRequest = {
  secret: {
    secret: "P@55w0rd+",
  },
  shopperId: "corrupti",
};

sdk.v1.changePassword(req).then((res: ChangePasswordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->