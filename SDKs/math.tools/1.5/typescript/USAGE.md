<!-- Start SDK Example Usage -->
```typescript
import {
  GetNumbersBaseRequest,
  GetNumbersBaseResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetNumbersBaseRequest = {
  from: 548814,
  number: 592845,
  to: 715190,
};

sdk.baseConversion.getNumbersBase(req).then((res: GetNumbersBaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->