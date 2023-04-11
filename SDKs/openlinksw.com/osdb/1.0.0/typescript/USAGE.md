<!-- Start SDK Example Usage -->
```typescript
import {
  ActionHelpRequest,
  ActionHelpResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActionHelpRequest = {
  actionId: "corrupti",
  serviceId: "provident",
};

sdk.osdb.actionHelp(req).then((res: ActionHelpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->