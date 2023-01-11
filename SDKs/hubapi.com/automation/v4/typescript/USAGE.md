<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest, PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest = {
  security: {
    oauth2Legacy: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  request: {
    inputs: [
      {
        callbackId: "voluptas",
        outputFields: {
          "expedita": "consequuntur",
          "dolor": "expedita",
        },
      },
    ],
  },
};

sdk.callbacks.postAutomationV4ActionsCallbacksCompleteCompleteBatch(req).then((res: PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->