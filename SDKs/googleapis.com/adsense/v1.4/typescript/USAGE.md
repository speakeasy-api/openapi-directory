<!-- Start SDK Example Usage -->
```typescript
import {
  AdsenseAccountsAdclientsGetAdCodeRequest,
  AdsenseAccountsAdclientsGetAdCodeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdsenseAccountsAdclientsGetAdCodeRequest = {
  accountId: "corrupti",
  adClientId: "provident",
  alt: AltEnum.Json,
  fields: "quibusdam",
  key: "unde",
  oauthToken: "nulla",
  prettyPrint: false,
  quotaUser: "corrupti",
  tagPartner: "illum",
  userIp: "vel",
};

sdk.accounts.adsenseAccountsAdclientsGetAdCode(req).then((res: AdsenseAccountsAdclientsGetAdCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->