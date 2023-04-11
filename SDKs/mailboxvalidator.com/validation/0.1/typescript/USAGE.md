<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1ValidationSingleRequest,
  GetV1ValidationSingleResponse,
  GetV1ValidationSingleFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1ValidationSingleRequest = {
  email: "Larue_Rau85@yahoo.com",
  format: GetV1ValidationSingleFormatEnum.Xml,
  key: "illum",
};

sdk.getV1ValidationSingle(req).then((res: GetV1ValidationSingleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->