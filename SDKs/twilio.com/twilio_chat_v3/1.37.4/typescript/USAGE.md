<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { UpdateChannelRequest, UpdateChannelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: UpdateChannelRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
    sid: "voluptas",
  },
  headers: {
    xTwilioWebhookEnabled: "false",
  },
  request: {
    messagingServiceSid: "expedita",
    type: "private",
  },
};

sdk.updateChannel(req).then((res: UpdateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->