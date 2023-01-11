<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PlayintegrityDecodeIntegrityTokenRequest, PlayintegrityDecodeIntegrityTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PlayintegrityDecodeIntegrityTokenRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    packageName: "sit",
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
    integrityToken: "dicta",
  },
};

sdk.v1.playintegrityDecodeIntegrityToken(req).then((res: PlayintegrityDecodeIntegrityTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->