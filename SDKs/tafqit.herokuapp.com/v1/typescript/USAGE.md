<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertRequestBody,
  ConvertResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConvertRequestBody = {
  hundredsForm: "مائة",
  theNumber: "2519.50",
  unit: " ريال سعودي",
};

sdk.convert(req).then((res: ConvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->