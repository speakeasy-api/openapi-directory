<!-- Start SDK Example Usage -->
```typescript
import {
  CreateUsageChargeRequest,
  CreateUsageChargeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateUsageChargeRequest = {
  requestBody: {
    usageCharge: {
      description: "2019/4 メール送信分",
      point: 100,
    },
  },
  xAppstoreUsageChargeToken: "corrupti",
  recurringApplicationChargeId: "provident",
};

sdk.applicationCharge.createUsageCharge(req).then((res: CreateUsageChargeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->