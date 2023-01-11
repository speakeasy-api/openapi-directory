<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CollectNowRequest, CollectNowResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CollectNowRequest = {
  pathParams: {
    deviceId: 8717895732742165505,
  },
  queryParams: {
    monitorClass: "voluptas",
  },
};

sdk.actions.collectNow(req).then((res: CollectNowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->