<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMediaProcessorCreateMediaProcessorRequest,
  CreateMediaProcessorResponse,
  CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateMediaProcessorCreateMediaProcessorRequest = {
  extension: "corrupti",
  extensionContext: "provident",
  extensionEnvironment: "distinctio",
  maxDuration: 844266,
  statusCallback: "https://tidy-mascara.org",
  statusCallbackMethod: CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum.Post,
};

sdk.createMediaProcessor(req).then((res: CreateMediaProcessorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->