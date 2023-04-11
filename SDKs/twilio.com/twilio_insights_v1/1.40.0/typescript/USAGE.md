<!-- Start SDK Example Usage -->
```typescript
import {
  FetchAccountSettingsRequest,
  FetchAccountSettingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchAccountSettingsRequest = {
  subaccountSid: "corrupti",
};

sdk.fetchAccountSettings(req).then((res: FetchAccountSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->