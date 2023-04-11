<!-- Start SDK Example Usage -->
```typescript
import {
  GetAtmsRequest,
  GetAtmsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAtmsRequest = {
  ifModifiedSince: "corrupti",
  ifNoneMatch: "provident",
};

sdk.atm.getAtms(req).then((res: GetAtmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->