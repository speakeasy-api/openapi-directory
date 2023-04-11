<!-- Start SDK Example Usage -->
```typescript
import {
  ClientOptionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.clients.clientOptions().then((res: ClientOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->