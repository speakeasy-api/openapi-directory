<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SiteVerificationWebResourceDeleteRequest, SiteVerificationWebResourceDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SiteVerificationWebResourceDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
  queryParams: {
    alt: "json",
    fields: "culpa",
    key: "expedita",
    oauthToken: "consequuntur",
    prettyPrint: false,
    quotaUser: "expedita",
    userIp: "voluptas",
  },
};

sdk.webResource.siteVerificationWebResourceDelete(req).then((res: SiteVerificationWebResourceDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->