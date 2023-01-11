<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAssistantRequest, CreateAssistantResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAssistantRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    callbackEvents: "sit",
    callbackUrl: "voluptas",
    defaults: "culpa",
    friendlyName: "expedita",
    logQueries: true,
    styleSheet: "dolor",
    uniqueName: "expedita",
  },
};

sdk.createAssistant(req).then((res: CreateAssistantResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->