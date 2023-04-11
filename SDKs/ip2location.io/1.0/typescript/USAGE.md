<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse,
  GetFormatEnum,
  GetLangEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  format: GetFormatEnum.Xml,
  ip: "8.8.8.8",
  key: "provident",
  lang: GetLangEnum.Pt,
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->