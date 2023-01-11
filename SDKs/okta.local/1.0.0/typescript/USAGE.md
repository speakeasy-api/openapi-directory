<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ClearUserSessionsRequest, ClearUserSessionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ClearUserSessionsRequest = {
  pathParams: {
    userId: "sit",
  },
  request: "voluptas".encode(),
};

sdk.clearUserSessions(req).then((res: ClearUserSessionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->