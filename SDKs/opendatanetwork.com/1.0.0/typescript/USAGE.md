<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAMapRequest,
  CreateAMapResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAMapRequest = {
  xAppToken: "corrupti",
  appToken: "provident",
  constraint: "distinctio",
  entityId: "quibusdam",
  variable: "unde",
};

sdk.createAMap(req).then((res: CreateAMapResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->