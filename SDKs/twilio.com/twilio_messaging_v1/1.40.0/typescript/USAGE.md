<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAlphaSenderRequest,
  CreateAlphaSenderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAlphaSenderRequest = {
  requestBody: {
    alphaSender: "corrupti",
  },
  serviceSid: "provident",
};

sdk.createAlphaSender(req).then((res: CreateAlphaSenderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->