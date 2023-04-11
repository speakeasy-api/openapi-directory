<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDeviceCodeCreateDeviceCodeRequest,
  CreateDeviceCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateDeviceCodeCreateDeviceCodeRequest = {
  audiences: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  clientSid: "unde",
  scopes: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
};

sdk.createDeviceCode(req).then((res: CreateDeviceCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->