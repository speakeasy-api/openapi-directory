<!-- Start SDK Example Usage -->
```typescript
import {
  DevicelistRequest,
  DevicelistResponse,
  DevicelistAppTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DevicelistRequest = {
  appType: DevicelistAppTypeEnum.AppStation,
  deviceId: "provident",
  getFavorites: false,
};

sdk.deprecated.devicelist(req).then((res: DevicelistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->