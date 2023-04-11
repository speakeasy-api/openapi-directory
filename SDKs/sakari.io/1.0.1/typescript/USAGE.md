<!-- Start SDK Example Usage -->
```typescript
import {
  shared.TokenRequest,
  AuthTokenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.TokenRequest = {
  clientId: "00000000-0000-0000-0000-00000000000",
  clientSecret: "00000000-0000-0000-0000-00000000000",
  grantType: "client_credentials",
};

sdk.authentication.authToken(req).then((res: AuthTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->