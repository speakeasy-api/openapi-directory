<!-- Start SDK Example Usage -->
```typescript
import {
  GetRenderRequest,
  GetRenderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRenderRequest = {
  id: "corrupti",
};

sdk.edit.getRender(req).then((res: GetRenderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->