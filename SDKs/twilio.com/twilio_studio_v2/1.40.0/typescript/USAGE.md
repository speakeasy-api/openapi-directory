<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExecutionRequest,
  CreateExecutionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateExecutionRequest = {
  flowSid: "corrupti",
  requestBody: {
    from: "provident",
    parameters: "distinctio",
    to: "quibusdam",
  },
};

sdk.createExecution(req).then((res: CreateExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->