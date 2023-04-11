<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuthResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jwt: "YOUR_API_KEY_HERE",
  },
});

sdk.auth.getAuth().then((res: GetAuthResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->