<!-- Start SDK Example Usage -->
```typescript
import {
  GetglobalnumberinfoRequest,
  GetglobalnumberinfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetglobalnumberinfoRequest = {
  intlnumber: "corrupti",
  license: "provident",
};

sdk.globalPhoneNumberInformation.getglobalnumberinfo(req).then((res: GetglobalnumberinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->