<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAccountAccessConsentsConsentIdRequest,
  DeleteAccountAccessConsentsConsentIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAccountAccessConsentsConsentIdRequest = {
  consentId: "corrupti",
  sandboxId: "provident",
  xCustomerUserAgent: "distinctio",
  xFapiAuthDate: "quibusdam",
  xFapiCustomerIpAddress: "unde",
  xFapiInteractionId: "nulla",
};

sdk.accountAccess.deleteAccountAccessConsentsConsentId(req).then((res: DeleteAccountAccessConsentsConsentIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->