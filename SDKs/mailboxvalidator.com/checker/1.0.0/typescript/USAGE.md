<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1EmailFreeRequest,
  GetV1EmailFreeResponse,
  GetV1EmailFreeFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1EmailFreeRequest = {
  email: "Larue_Rau85@yahoo.com",
  format: GetV1EmailFreeFormatEnum.Xml,
  key: "illum",
};

sdk.getV1EmailFree(req).then((res: GetV1EmailFreeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->