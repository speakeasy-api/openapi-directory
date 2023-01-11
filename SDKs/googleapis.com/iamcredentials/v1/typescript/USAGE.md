<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest, IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "sit",
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
    delegates: [
      "debitis",
      "voluptatum",
      "et",
    ],
    lifetime: "ut",
    scope: [
      "et",
      "voluptate",
      "iste",
    ],
  },
};

sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req).then((res: IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->