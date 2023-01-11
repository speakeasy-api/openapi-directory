<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCallRequest, CreateCallResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCallRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: "sit",
};

sdk.calls.createCall(req).then((res: CreateCallResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->