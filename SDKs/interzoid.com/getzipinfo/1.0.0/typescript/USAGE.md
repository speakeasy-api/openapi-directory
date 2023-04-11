<!-- Start SDK Example Usage -->
```typescript
import {
  GetzipcodeinfoRequest,
  GetzipcodeinfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetzipcodeinfoRequest = {
  license: "corrupti",
  zip: "provident",
};

sdk.detailedZipCodeInformation.getzipcodeinfo(req).then((res: GetzipcodeinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->