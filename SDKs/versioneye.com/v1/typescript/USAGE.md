<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiV1ScansRequest,
  GetApiV1ScansResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiV1ScansRequest = {
  name: "corrupti",
  perPage: "provident",
};

sdk.scans.getApiV1Scans(req).then((res: GetApiV1ScansResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->