<!-- Start SDK Example Usage -->
```typescript
import {
  shared.IdentificationTokenGenerationRequest,
  PostVisitorIdentificationV3TokensCreateGenerateTokenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.IdentificationTokenGenerationRequest = {
  email: "Larue_Rau85@yahoo.com",
  firstName: "Karley",
  lastName: "Stamm",
};

sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req).then((res: PostVisitorIdentificationV3TokensCreateGenerateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->