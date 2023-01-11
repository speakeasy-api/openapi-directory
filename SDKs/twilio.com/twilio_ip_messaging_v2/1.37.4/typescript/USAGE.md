<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateChannelRequest, CreateChannelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateChannelRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
  },
  headers: {
    xTwilioWebhookEnabled: "true",
  },
  request: {
    attributes: "culpa",
    createdBy: "expedita",
    dateCreated: "1997-12-26T13:41:25Z",
    dateUpdated: "2003-04-20T23:11:44Z",
    friendlyName: "expedita",
    type: "private",
    uniqueName: "fugit",
  },
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->