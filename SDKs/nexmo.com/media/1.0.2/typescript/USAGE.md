<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAMediaItemResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.deleteAMediaItem().then((res: DeleteAMediaItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->