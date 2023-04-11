<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEngagementRequest,
  CreateEngagementResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEngagementRequest = {
  flowSid: "corrupti",
  requestBody: {
    from: "provident",
    parameters: "distinctio",
    to: "quibusdam",
  },
};

sdk.createEngagement(req).then((res: CreateEngagementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->