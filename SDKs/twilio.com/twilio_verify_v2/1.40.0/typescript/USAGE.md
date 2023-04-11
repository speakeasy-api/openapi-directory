<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccessTokenRequest,
  CreateAccessTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  AccessTokenEnumFactorTypesEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAccessTokenRequest = {
  requestBody: {
    factorFriendlyName: "corrupti",
    factorType: AccessTokenEnumFactorTypesEnum.Push,
    identity: "provident",
    ttl: 715190,
  },
  serviceSid: "quibusdam",
};

sdk.createAccessToken(req).then((res: CreateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->