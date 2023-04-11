<!-- Start SDK Example Usage -->
```typescript
import {
  Oauth2TokeninfoRequest,
  Oauth2TokeninfoResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: Oauth2TokeninfoRequest = {
  accessToken: "corrupti",
  alt: AltEnum.Json,
  fields: "provident",
  idToken: "distinctio",
  key: "quibusdam",
  oauthToken: "unde",
  prettyPrint: false,
  quotaUser: "nulla",
  userIp: "corrupti",
};

sdk.oauth2Tokeninfo(req).then((res: Oauth2TokeninfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->