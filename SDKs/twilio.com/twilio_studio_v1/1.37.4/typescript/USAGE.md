<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateEngagementRequest, CreateEngagementResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateEngagementRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    flowSid: "sit",
  },
  request: {
    from: "voluptas",
    parameters: "culpa",
    to: "expedita",
  },
};

sdk.createEngagement(req).then((res: CreateEngagementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->