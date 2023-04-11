<!-- Start SDK Example Usage -->
```typescript
import {
  AdsensehostAccountsAdclientsGetRequest,
  AdsensehostAccountsAdclientsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdsensehostAccountsAdclientsGetRequest = {
  accountId: "corrupti",
  adClientId: "provident",
  alt: AltEnum.Json,
  fields: "quibusdam",
  key: "unde",
  oauthToken: "nulla",
  prettyPrint: false,
  quotaUser: "corrupti",
  userIp: "illum",
};

sdk.accounts.adsensehostAccountsAdclientsGet(req).then((res: AdsensehostAccountsAdclientsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->