<!-- Start SDK Example Usage -->
```typescript
import {
  GETUserContentByDateJsonRequest,
  GETUserContentByDateJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETUserContentByDateJsonRequest = {
  date: "corrupti",
};

sdk.getUserContentByDateJson(req).then((res: GETUserContentByDateJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->