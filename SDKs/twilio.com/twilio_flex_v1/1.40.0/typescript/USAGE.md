<!-- Start SDK Example Usage -->
```typescript
import {
  CreateChannelCreateChannelRequest,
  CreateChannelResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateChannelCreateChannelRequest = {
  chatFriendlyName: "corrupti",
  chatUniqueName: "provident",
  chatUserFriendlyName: "distinctio",
  flexFlowSid: "quibusdam",
  identity: "unde",
  longLived: false,
  preEngagementData: "nulla",
  target: "corrupti",
  taskAttributes: "illum",
  taskSid: "vel",
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->