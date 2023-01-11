<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAccountAccessConsentsConsentIdRequest, DeleteAccountAccessConsentsConsentIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAccountAccessConsentsConsentIdRequest = {
  security: {
    clientCredentialsToken: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    clientId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    consentId: "sit",
  },
  headers: {
    sandboxId: "voluptas",
    xCustomerUserAgent: "culpa",
    xFapiAuthDate: "expedita",
    xFapiCustomerIpAddress: "consequuntur",
    xFapiInteractionId: "dolor",
  },
};

sdk.accountAccess.deleteAccountAccessConsentsConsentId(req).then((res: DeleteAccountAccessConsentsConsentIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->