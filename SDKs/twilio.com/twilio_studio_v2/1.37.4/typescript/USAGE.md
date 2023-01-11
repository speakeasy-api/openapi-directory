<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateExecutionRequest, CreateExecutionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateExecutionRequest = {
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

sdk.createExecution(req).then((res: CreateExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->