<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCustomerProfileCreateCustomerProfileRequest,
  CreateCustomerProfileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCustomerProfileCreateCustomerProfileRequest = {
  email: "Larue_Rau85@yahoo.com",
  friendlyName: "corrupti",
  policySid: "illum",
  statusCallback: "http://physical-pegboard.info",
};

sdk.createCustomerProfile(req).then((res: CreateCustomerProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->