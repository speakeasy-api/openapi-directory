<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteFaxRequest,
  DeleteFaxResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteFaxRequest = {
  sid: "corrupti",
};

sdk.deleteFax(req).then((res: DeleteFaxResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->