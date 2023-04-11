<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCacheRequest,
  DeleteCacheResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    mwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteCacheRequest = {
  key: "corrupti",
};

sdk.deleteCache(req).then((res: DeleteCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->