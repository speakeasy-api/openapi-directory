<!-- Start SDK Example Usage -->
```typescript
import {
  DevicesRequest,
  DevicesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DevicesRequest = {
  os: "corrupti",
};

sdk.getDevices.devices(req).then((res: DevicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->