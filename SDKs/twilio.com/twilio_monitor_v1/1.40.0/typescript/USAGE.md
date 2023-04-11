<!-- Start SDK Example Usage -->
```typescript
import {
  FetchAlertRequest,
  FetchAlertResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchAlertRequest = {
  sid: "corrupti",
};

sdk.fetchAlert(req).then((res: FetchAlertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->