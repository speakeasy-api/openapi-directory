<!-- Start SDK Example Usage -->
```typescript
import {
  ClearUserSessionsRequest,
  ClearUserSessionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClearUserSessionsRequest = {
  requestBody: "corrupti".encode(),
  userId: "provident",
};

sdk.clearUserSessions(req).then((res: ClearUserSessionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->