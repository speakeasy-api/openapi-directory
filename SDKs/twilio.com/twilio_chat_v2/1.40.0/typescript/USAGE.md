<!-- Start SDK Example Usage -->
```typescript
import {
  CreateChannelRequest,
  CreateChannelResponse
} from "openapi/dist/sdk/models/operations";
import {
  ChannelEnumWebhookEnabledTypeEnum,
  ChannelEnumChannelTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateChannelRequest = {
  requestBody: {
    attributes: "corrupti",
    createdBy: "provident",
    dateCreated: "2021-04-24T16:27:50.833Z",
    dateUpdated: "2021-04-14T16:47:33.722Z",
    friendlyName: "corrupti",
    type: ChannelEnumChannelTypeEnum.Private,
    uniqueName: "vel",
  },
  serviceSid: "error",
  xTwilioWebhookEnabled: ChannelEnumWebhookEnabledTypeEnum.False,
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->