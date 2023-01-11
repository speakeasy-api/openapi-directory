<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RedactMessageRequest, RedactMessageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RedactMessageRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    id: "sit",
    product: "sms",
    type: "outbound",
  },
};

sdk.redactMessage(req).then((res: RedactMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->