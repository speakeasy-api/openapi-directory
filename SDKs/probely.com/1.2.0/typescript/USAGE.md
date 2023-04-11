<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteKeysIdRequest,
  DeleteKeysIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteKeysIdRequest = {
  id: "jMXUw-BE_2vd",
};

sdk.apiKeys.deleteKeysId(req).then((res: DeleteKeysIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->