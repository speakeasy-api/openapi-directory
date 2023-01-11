<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateBindingRequest, CreateBindingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateBindingRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
  },
  request: {
    address: "voluptas",
    bindingType: "gcm",
    credentialSid: "expedita",
    endpoint: "consequuntur",
    identity: "dolor",
    notificationProtocolVersion: "expedita",
    tag: [
      "fugit",
      "et",
      "nihil",
    ],
  },
};

sdk.createBinding(req).then((res: CreateBindingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->