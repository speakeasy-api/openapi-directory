<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { StsTokenRequest, StsTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: StsTokenRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    audience: "rerum",
    grantType: "dicta",
    options: "debitis",
    requestedTokenType: "voluptatum",
    scope: "et",
    subjectToken: "ut",
    subjectTokenType: "dolorem",
  },
};

sdk.v1beta.stsToken(req).then((res: StsTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->