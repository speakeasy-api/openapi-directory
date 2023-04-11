<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccessTokenToPut,
  AccessTokenPutFormResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AccessTokenToPut = {
  cardId: 548814,
  userId: 592845,
};

sdk.accessToken.accessTokenPutForm(req).then((res: AccessTokenPutFormResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->