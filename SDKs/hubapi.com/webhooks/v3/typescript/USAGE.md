<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteWebhooksV3AppIdSettingsClearRequest,
  DeleteWebhooksV3AppIdSettingsClearResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteWebhooksV3AppIdSettingsClearRequest = {
  appId: 548814,
};

sdk.settings.deleteWebhooksV3AppIdSettingsClear(req).then((res: DeleteWebhooksV3AppIdSettingsClearResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->