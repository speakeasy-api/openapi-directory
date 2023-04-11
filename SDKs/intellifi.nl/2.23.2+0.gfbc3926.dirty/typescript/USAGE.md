<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuthinfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    cookieSid: "YOUR_API_KEY_HERE",
  },
});

sdk.authinfo.getAuthinfo().then((res: GetAuthinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->