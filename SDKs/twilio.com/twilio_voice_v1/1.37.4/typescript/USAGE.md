<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateByocTrunkRequest, CreateByocTrunkResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateByocTrunkRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    cnamLookupEnabled: false,
    connectionPolicySid: "voluptas",
    friendlyName: "culpa",
    fromDomainSid: "expedita",
    statusCallbackMethod: "DELETE",
    statusCallbackUrl: "dolor",
    voiceFallbackMethod: "GET",
    voiceFallbackUrl: "voluptas",
    voiceMethod: "HEAD",
    voiceUrl: "et",
  },
};

sdk.createByocTrunk(req).then((res: CreateByocTrunkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->