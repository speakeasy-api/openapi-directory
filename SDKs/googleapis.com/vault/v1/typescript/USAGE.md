<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VaultMattersAddPermissionsRequest, VaultMattersAddPermissionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VaultMattersAddPermissionsRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    matterId: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    ccMe: false,
    matterPermission: {
      accountId: "debitis",
      role: "ROLE_UNSPECIFIED",
    },
    sendEmails: false,
  },
};

sdk.matters.vaultMattersAddPermissions(req).then((res: VaultMattersAddPermissionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->