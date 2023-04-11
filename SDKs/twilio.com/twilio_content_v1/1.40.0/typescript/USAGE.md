<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteContentRequest,
  DeleteContentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteContentRequest = {
  sid: "corrupti",
};

sdk.deleteContent(req).then((res: DeleteContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->