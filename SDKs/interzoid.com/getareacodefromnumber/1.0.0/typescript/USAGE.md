<!-- Start SDK Example Usage -->
```typescript
import {
  GetareacodefromnumberRequest,
  GetareacodefromnumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetareacodefromnumberRequest = {
  license: "corrupti",
  number: "provident",
};

sdk.areaCodeInformation.getareacodefromnumber(req).then((res: GetareacodefromnumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->