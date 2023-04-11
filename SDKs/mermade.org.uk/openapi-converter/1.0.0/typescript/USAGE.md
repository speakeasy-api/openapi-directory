<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertRequestBody,
  ConvertResponse,
  ConvertRequestBodyValidateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConvertRequestBody = {
  filename: "corrupti",
  source: "provident",
  validate: ConvertRequestBodyValidateEnum.On,
};

sdk.conversion.convert(req).then((res: ConvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->