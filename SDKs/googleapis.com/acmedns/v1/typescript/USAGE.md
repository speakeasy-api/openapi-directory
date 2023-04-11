<!-- Start SDK Example Usage -->
```typescript
import {
  AcmednsAcmeChallengeSetsGetRequest,
  AcmednsAcmeChallengeSetsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AcmednsAcmeChallengeSetsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  rootDomain: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.acmeChallengeSets.acmednsAcmeChallengeSetsGet(req).then((res: AcmednsAcmeChallengeSetsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->