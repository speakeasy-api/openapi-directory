<!-- Start SDK Example Usage -->
```typescript
import {
  CreateChannelRequest,
  CreateChannelResponse
} from "openapi/dist/sdk/models/operations";
import {
  ChannelEnumChannelTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateChannelRequest = {
  requestBody: {
    attributes: "corrupti",
    friendlyName: "provident",
    type: ChannelEnumChannelTypeEnum.Private,
    uniqueName: "quibusdam",
  },
  serviceSid: "unde",
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->