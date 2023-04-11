<!-- Start SDK Example Usage -->
```typescript
import {
  GetEnvironmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.getEnvironment().then((res: GetEnvironmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->