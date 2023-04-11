<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAssistantCreateAssistantRequest,
  CreateAssistantResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAssistantCreateAssistantRequest = {
  callbackEvents: "corrupti",
  callbackUrl: "https://salty-stag.name",
  defaults: "nulla",
  friendlyName: "corrupti",
  logQueries: false,
  styleSheet: "illum",
  uniqueName: "vel",
};

sdk.createAssistant(req).then((res: CreateAssistantResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->