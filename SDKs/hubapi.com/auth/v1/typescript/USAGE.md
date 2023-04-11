<!-- Start SDK Example Usage -->
```typescript
import {
  GetOauthV1AccessTokensTokenGetRequest,
  GetOauthV1AccessTokensTokenGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetOauthV1AccessTokensTokenGetRequest = {
  token: "corrupti",
};

sdk.accessTokens.getOauthV1AccessTokensTokenGet(req).then((res: GetOauthV1AccessTokensTokenGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->