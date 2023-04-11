<!-- Start SDK Example Usage -->
```typescript
import {
  UpdateChannelRequest,
  UpdateChannelResponse
} from "openapi/dist/sdk/models/operations";
import {
  ChannelEnumWebhookEnabledTypeEnum,
  ChannelEnumChannelTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: UpdateChannelRequest = {
  requestBody: {
    messagingServiceSid: "corrupti",
    type: ChannelEnumChannelTypeEnum.Private,
  },
  serviceSid: "distinctio",
  sid: "quibusdam",
  xTwilioWebhookEnabled: ChannelEnumWebhookEnabledTypeEnum.False,
};

sdk.updateChannel(req).then((res: UpdateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->