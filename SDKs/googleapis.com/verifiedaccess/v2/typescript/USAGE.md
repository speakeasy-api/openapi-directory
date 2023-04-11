<!-- Start SDK Example Usage -->
```typescript
import {
  VerifiedaccessChallengeGenerateRequest,
  VerifiedaccessChallengeGenerateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VerifiedaccessChallengeGenerateRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.challenge.verifiedaccessChallengeGenerate(req).then((res: VerifiedaccessChallengeGenerateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->