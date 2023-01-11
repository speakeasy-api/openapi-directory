<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCommandRequest, CreateCommandResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCommandRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    callbackMethod: "HEAD",
    callbackUrl: "voluptas",
    command: "culpa",
    commandMode: "text",
    deliveryReceiptRequested: true,
    includeSid: "dolor",
    sim: "expedita",
  },
};

sdk.createCommand(req).then((res: CreateCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->