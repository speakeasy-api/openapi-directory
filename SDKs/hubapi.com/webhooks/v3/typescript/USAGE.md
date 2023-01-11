<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteWebhooksV3AppIdSettingsClearRequest, DeleteWebhooksV3AppIdSettingsClearResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteWebhooksV3AppIdSettingsClearRequest = {
  security: {
    developerHapikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    appId: 8717895732742165505,
  },
};

sdk.settings.deleteWebhooksV3AppIdSettingsClear(req).then((res: DeleteWebhooksV3AppIdSettingsClearResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->