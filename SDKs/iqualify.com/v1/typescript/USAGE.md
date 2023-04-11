<!-- Start SDK Example Usage -->
```typescript
import {
  GetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    authorization: "YOUR_API_KEY_HERE",
  },
});

sdk.apiInfo.get().then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->