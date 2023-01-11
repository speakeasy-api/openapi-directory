<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WebriskHashesSearchRequest, WebriskHashesSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: WebriskHashesSearchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    hashPrefix: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    threatTypes: [
      "SOCIAL_ENGINEERING",
    ],
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.hashes.webriskHashesSearch(req).then((res: WebriskHashesSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->