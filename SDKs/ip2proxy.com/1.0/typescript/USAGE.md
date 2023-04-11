<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse,
  GetFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  format: GetFormatEnum.Xml,
  ip: "provident",
  key: "distinctio",
  package: "quibusdam",
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->