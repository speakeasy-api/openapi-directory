<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateDeployedDevicesCertificateRequest, CreateDeployedDevicesCertificateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateDeployedDevicesCertificateRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    fleetSid: "sit",
  },
  request: {
    certificateData: "voluptas",
    deviceSid: "culpa",
    friendlyName: "expedita",
  },
};

sdk.createDeployedDevicesCertificate(req).then((res: CreateDeployedDevicesCertificateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->