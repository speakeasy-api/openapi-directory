<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetOauthV1AccessTokensTokenGetAccessTokenRequest, GetOauthV1AccessTokensTokenGetAccessTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetOauthV1AccessTokensTokenGetAccessTokenRequest = {
  pathParams: {
    token: "sit",
  },
};

sdk.accessTokens.getOauthV1AccessTokensTokenGetAccessToken(req).then((res: GetOauthV1AccessTokensTokenGetAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->