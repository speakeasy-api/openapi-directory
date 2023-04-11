<!-- Start SDK Example Usage -->
```typescript
import {
  GetglobaltimeRequest,
  GetglobaltimeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetglobaltimeRequest = {
  license: "corrupti",
  locale: "provident",
};

sdk.currentGlobalTime.getglobaltime(req).then((res: GetglobaltimeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->