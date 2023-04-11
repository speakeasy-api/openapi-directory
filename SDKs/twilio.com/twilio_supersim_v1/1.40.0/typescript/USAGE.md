<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEsimProfileCreateEsimProfileRequest,
  CreateEsimProfileResponse,
  CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEsimProfileCreateEsimProfileRequest = {
  callbackMethod: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum.Patch,
  callbackUrl: "provident",
  eid: "distinctio",
  generateMatchingId: false,
};

sdk.createEsimProfile(req).then((res: CreateEsimProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->