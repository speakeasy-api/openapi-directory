<!-- Start SDK Example Usage -->
```typescript
import {
  CreateActivityRequest,
  CreateActivityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateActivityRequest = {
  requestBody: {
    available: false,
    friendlyName: "corrupti",
  },
  workspaceSid: "provident",
};

sdk.createActivity(req).then((res: CreateActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->