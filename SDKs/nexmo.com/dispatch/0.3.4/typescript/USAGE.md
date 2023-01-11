<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateWorkflowRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: {
    template: "failover",
    workflow: [
      "culpa",
    ],
  },
};

sdk.createWorkflow(req).then((res: CreateWorkflowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->