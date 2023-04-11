<!-- Start SDK Example Usage -->
```typescript
import {
  PostCheckCodeRequestBody,
  PostCheckCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostCheckCodeRequestBody = {
  code: "corrupti",
  email: "Micheal_Sporer@yahoo.com",
};

sdk.postCheckCode(req).then((res: PostCheckCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->