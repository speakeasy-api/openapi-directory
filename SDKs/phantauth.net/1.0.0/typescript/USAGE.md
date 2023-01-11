<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetClientClientIdRequest, GetClientClientIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetClientClientIdRequest = {
  pathParams: {
    clientId: "sit",
  },
};

sdk.client.getClientClientId(req).then((res: GetClientClientIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->