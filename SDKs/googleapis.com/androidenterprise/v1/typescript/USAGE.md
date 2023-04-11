<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidenterpriseDevicesForceReportUploadRequest,
  AndroidenterpriseDevicesForceReportUploadResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidenterpriseDevicesForceReportUploadRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  deviceId: "unde",
  enterpriseId: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.devices.androidenterpriseDevicesForceReportUpload(req).then((res: AndroidenterpriseDevicesForceReportUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->