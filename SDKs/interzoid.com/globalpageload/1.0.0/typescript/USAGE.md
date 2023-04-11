<!-- Start SDK Example Usage -->
```typescript
import {
  GlobalpageloadRequest,
  GlobalpageloadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GlobalpageloadRequest = {
  license: "corrupti",
  origin: "provident",
  url: "distinctio",
};

sdk.pageLoadPerformanceTime.globalpageload(req).then((res: GlobalpageloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->