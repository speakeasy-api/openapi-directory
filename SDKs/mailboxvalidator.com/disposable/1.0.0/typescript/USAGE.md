<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1EmailDisposableRequest,
  GetV1EmailDisposableResponse,
  GetV1EmailDisposableFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1EmailDisposableRequest = {
  email: "Larue_Rau85@yahoo.com",
  format: GetV1EmailDisposableFormatEnum.Xml,
  key: "illum",
};

sdk.getV1EmailDisposable(req).then((res: GetV1EmailDisposableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->