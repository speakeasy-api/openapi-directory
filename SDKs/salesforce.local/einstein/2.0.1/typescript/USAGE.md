<!-- Start SDK Example Usage -->
```typescript
import {
  GenerateTokenV2RequestBody,
  GenerateTokenV2Response,
  GenerateTokenV2RequestBodyGrantTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GenerateTokenV2RequestBody = {
  assertion: "SOME_ASSERTION_STRING",
  grantType: GenerateTokenV2RequestBodyGrantTypeEnum.UrnIetfParamsOauthGrantTypeJwtBearer,
  refreshToken: "SomeRefreshToken",
  scope: "offline",
  validFor: 120,
};

sdk.authorization.generateTokenV2(req).then((res: GenerateTokenV2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->