<!-- Start SDK Example Usage -->
```typescript
import {
  IdentitytoolkitRelyingpartyCreateAuthUriRequest,
  IdentitytoolkitRelyingpartyCreateAuthUriResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdentitytoolkitRelyingpartyCreateAuthUriRequest = {
  identitytoolkitRelyingpartyCreateAuthUriRequest: {
    appId: "corrupti",
    authFlowType: "provident",
    clientId: "distinctio",
    context: "quibusdam",
    continueUri: "unde",
    customParameter: {
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
    },
    hostedDomain: "debitis",
    identifier: "ipsa",
    oauthConsumerKey: "delectus",
    oauthScope: "tempora",
    openidRealm: "suscipit",
    otaApp: "molestiae",
    providerId: "minus",
    sessionId: "placeat",
    tenantId: "voluptatum",
    tenantProjectNumber: "iusto",
  },
  alt: AltEnum.Json,
  fields: "excepturi",
  key: "nisi",
  oauthToken: "recusandae",
  prettyPrint: false,
  quotaUser: "temporibus",
  userIp: "ab",
};

sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req).then((res: IdentitytoolkitRelyingpartyCreateAuthUriResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->