<!-- Start SDK Example Usage -->
```typescript
import {
  AllApiKeysResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.apikeys.allApiKeys().then((res: AllApiKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->