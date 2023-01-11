<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SafebrowsingEncodedFullHashesGetRequest, SafebrowsingEncodedFullHashesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SafebrowsingEncodedFullHashesGetRequest = {
  pathParams: {
    encodedRequest: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    clientId: "dolor",
    clientVersion: "expedita",
    fields: "voluptas",
    key: "fugit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req).then((res: SafebrowsingEncodedFullHashesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->