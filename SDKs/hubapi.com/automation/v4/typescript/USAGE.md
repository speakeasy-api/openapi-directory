<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BatchInputCallbackCompletionBatchRequest,
  PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BatchInputCallbackCompletionBatchRequest = {
  inputs: [
    {
      callbackId: "provident",
      outputFields: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
    },
    {
      callbackId: "error",
      outputFields: {
        "suscipit": "iure",
        "magnam": "debitis",
        "ipsa": "delectus",
      },
    },
    {
      callbackId: "tempora",
      outputFields: {
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
    },
  ],
};

sdk.callbacks.postAutomationV4ActionsCallbacksCompleteCompleteBatch(req).then((res: PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->