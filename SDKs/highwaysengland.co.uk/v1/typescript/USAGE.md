<!-- Start SDK Example Usage -->
```typescript
import {
  AreasGetRequest,
  AreasGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AreasGetRequest = {
  version: "corrupti",
};

sdk.areas.areasGet(req).then((res: AreasGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->