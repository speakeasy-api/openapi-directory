<!-- Start SDK Example Usage -->
```typescript
import {
  GetClientClientIdRequest,
  GetClientClientIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetClientClientIdRequest = {
  clientId: "corrupti",
};

sdk.client.getClientClientId(req).then((res: GetClientClientIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->