<!-- Start SDK Example Usage -->
```typescript
import {
  CleanScanPageRequest,
  CleanScanPageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CleanScanPageRequest = {
  scanId: 548814,
};

sdk.patrowlEngine.cleanScanPage(req).then((res: CleanScanPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->