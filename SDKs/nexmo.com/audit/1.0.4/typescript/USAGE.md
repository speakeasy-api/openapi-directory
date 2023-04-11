<!-- Start SDK Example Usage -->
```typescript
import {
  GetEventRequest,
  GetEventResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetEventRequest = {
  id: "corrupti",
};

sdk.getEvent(req).then((res: GetEventResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->