<!-- Start SDK Example Usage -->
```typescript
import {
  CreateWebChannelCreateWebChannelRequest,
  CreateWebChannelResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateWebChannelCreateWebChannelRequest = {
  addressSid: "corrupti",
  chatFriendlyName: "provident",
  customerFriendlyName: "distinctio",
  preEngagementData: "quibusdam",
};

sdk.createWebChannel(req).then((res: CreateWebChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->