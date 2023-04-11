<!-- Start SDK Example Usage -->
```typescript
import {
  CollectNowRequest,
  CollectNowResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CollectNowRequest = {
  deviceId: 548814,
  monitorClass: "provident",
};

sdk.actions.collectNow(req).then((res: CollectNowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->