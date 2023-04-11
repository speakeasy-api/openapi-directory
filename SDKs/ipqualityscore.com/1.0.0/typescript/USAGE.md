<!-- Start SDK Example Usage -->
```typescript
import {
  EmailValidationRequest,
  EmailValidationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: EmailValidationRequest = {
  userEmailHere: "example@example.com",
  yourApiKeyHere: "asd24#sdfs322#",
};

sdk.emailValidation.emailValidation(req).then((res: EmailValidationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->