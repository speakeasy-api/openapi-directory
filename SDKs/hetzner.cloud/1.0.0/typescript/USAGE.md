<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetActionsRequest, GetActionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetActionsRequest = {
  queryParams: {
    id: 8717895732742165505,
    sort: "id",
    status: "success",
  },
};

sdk.actions.getActions(req).then((res: GetActionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->