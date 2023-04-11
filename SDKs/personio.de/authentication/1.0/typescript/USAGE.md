<!-- Start SDK Example Usage -->
```typescript
import {
  PostAuthRequest,
  PostAuthResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostAuthRequest = {
  clientId: "corrupti",
  clientSecret: "provident",
};

sdk.postAuth(req).then((res: PostAuthResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->