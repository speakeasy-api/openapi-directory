<!-- Start SDK Example Usage -->
```typescript
import {
  IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest,
  IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest = {
  dollarXgafv: XgafvEnum.Two,
  generateAccessTokenRequest: {
    delegates: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    lifetime: "nulla",
    scope: [
      "illum",
      "vel",
      "error",
    ],
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  name: "ipsa",
  oauthToken: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req).then((res: IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->