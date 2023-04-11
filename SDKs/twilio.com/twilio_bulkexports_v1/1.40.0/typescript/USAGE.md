<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExportCustomJobRequest,
  CreateExportCustomJobResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateExportCustomJobRequest = {
  requestBody: {
    email: "Larue_Rau85@yahoo.com",
    endDay: "corrupti",
    friendlyName: "illum",
    startDay: "vel",
    webhookMethod: "error",
    webhookUrl: "deserunt",
  },
  resourceType: "suscipit",
};

sdk.createExportCustomJob(req).then((res: CreateExportCustomJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->