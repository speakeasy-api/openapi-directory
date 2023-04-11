<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDeployedDevicesCertificateRequest,
  CreateDeployedDevicesCertificateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateDeployedDevicesCertificateRequest = {
  fleetSid: "corrupti",
  requestBody: {
    certificateData: "provident",
    deviceSid: "distinctio",
    friendlyName: "quibusdam",
  },
};

sdk.createDeployedDevicesCertificate(req).then((res: CreateDeployedDevicesCertificateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->