<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SendMessageRequest, SendMessageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SendMessageRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: "sit",
};

sdk.sendMessage(req).then((res: SendMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->