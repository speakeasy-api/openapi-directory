<!-- Start SDK Example Usage -->
```typescript
import {
  GetApplicationsStatusRequest,
  GetApplicationsStatusResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApplicationsStatusRequest = {
  key: "corrupti",
};

sdk.application.getApplicationsStatus(req).then((res: GetApplicationsStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->