<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { Oauth2TokeninfoRequest, Oauth2TokeninfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: Oauth2TokeninfoRequest = {
  queryParams: {
    accessToken: "sit",
    alt: "json",
    fields: "culpa",
    idToken: "expedita",
    key: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    userIp: "fugit",
  },
};

sdk.oauth2Tokeninfo(req).then((res: Oauth2TokeninfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->