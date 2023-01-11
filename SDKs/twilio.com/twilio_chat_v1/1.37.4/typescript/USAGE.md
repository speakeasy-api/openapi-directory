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
  request: {
    attributes: "voluptas",
    friendlyName: "culpa",
    type: "public",
    uniqueName: "consequuntur",
  },
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->