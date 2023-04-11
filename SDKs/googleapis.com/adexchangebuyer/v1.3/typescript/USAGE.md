<!-- Start SDK Example Usage -->
```typescript
import {
  AdexchangebuyerAccountsGetRequest,
  AdexchangebuyerAccountsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdexchangebuyerAccountsGetRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  id: 592845,
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  userIp: "nulla",
};

sdk.accounts.adexchangebuyerAccountsGet(req).then((res: AdexchangebuyerAccountsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->