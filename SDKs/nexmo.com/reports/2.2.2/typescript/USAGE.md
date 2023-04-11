<!-- Start SDK Example Usage -->
```typescript
import {
  CancelReportRequest,
  CancelReportResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CancelReportRequest = {
  reportId: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
};

sdk.cancelReport(req).then((res: CancelReportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->