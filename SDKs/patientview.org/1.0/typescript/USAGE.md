<!-- Start SDK Example Usage -->
```typescript
import {
  GetBasicUserInformationRequest,
  GetBasicUserInformationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBasicUserInformationRequest = {
  token: "corrupti",
};

sdk.authController.getBasicUserInformation(req).then((res: GetBasicUserInformationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->