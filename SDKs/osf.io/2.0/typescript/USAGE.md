<!-- Start SDK Example Usage -->
```typescript
import {
  AddonsListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.addons.addonsList().then((res: AddonsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->