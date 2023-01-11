<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConfigurationAddressRequest, CreateConfigurationAddressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateConfigurationAddressRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    address: "sit",
    autoCreationConversationServiceSid: "voluptas",
    autoCreationEnabled: true,
    autoCreationStudioFlowSid: "expedita",
    autoCreationStudioRetryCount: 3390393562759376202,
    autoCreationType: "studio",
    autoCreationWebhookFilters: [
      "voluptas",
      "fugit",
    ],
    autoCreationWebhookMethod: "GET",
    autoCreationWebhookUrl: "nihil",
    friendlyName: "rerum",
    type: "gbm",
  },
};

sdk.createConfigurationAddress(req).then((res: CreateConfigurationAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->