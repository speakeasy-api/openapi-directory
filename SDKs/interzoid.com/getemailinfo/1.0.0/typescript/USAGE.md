<!-- Start SDK Example Usage -->
```typescript
import {
  GetemailinfoRequest,
  GetemailinfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetemailinfoRequest = {
  email: "Larue_Rau85@yahoo.com",
  license: "corrupti",
};

sdk.emailAddressInformation.getemailinfo(req).then((res: GetemailinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->