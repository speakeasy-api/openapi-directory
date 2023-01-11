<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActionHelpRequest, ActionHelpResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActionHelpRequest = {
  pathParams: {
    actionId: "sit",
    serviceId: "voluptas",
  },
};

sdk.osdb.actionHelp(req).then((res: ActionHelpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->