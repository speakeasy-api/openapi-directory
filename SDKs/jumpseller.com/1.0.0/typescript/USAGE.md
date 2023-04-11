<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteJsappsCodeJsonRequest,
  DeleteJsappsCodeJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteJsappsCodeJsonRequest = {
  authtoken: "corrupti",
  code: "provident",
  login: "distinctio",
};

sdk.apps.deleteJsappsCodeJson(req).then((res: DeleteJsappsCodeJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->