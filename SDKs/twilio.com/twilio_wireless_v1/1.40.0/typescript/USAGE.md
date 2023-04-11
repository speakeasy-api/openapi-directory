<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCommandCreateCommandRequest,
  CreateCommandResponse,
  CreateCommandCreateCommandRequestCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CommandEnumCommandModeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCommandCreateCommandRequest = {
  callbackMethod: CreateCommandCreateCommandRequestCallbackMethodEnum.Patch,
  callbackUrl: "https://salty-stag.name",
  command: "nulla",
  commandMode: CommandEnumCommandModeEnum.Binary,
  deliveryReceiptRequested: false,
  includeSid: "illum",
  sim: "vel",
};

sdk.createCommand(req).then((res: CreateCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->