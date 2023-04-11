<!-- Start SDK Example Usage -->
```typescript
import {
  GetareacodeRequest,
  GetareacodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetareacodeRequest = {
  areacode: "corrupti",
  license: "provident",
};

sdk.areaCodeInformation.getareacode(req).then((res: GetareacodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->