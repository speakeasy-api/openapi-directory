<!-- Start SDK Example Usage -->
```typescript
import {
  PingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.ping().then((res: PingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->