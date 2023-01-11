<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CertificateActionRetrieveRequest, CertificateActionRetrieveResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CertificateActionRetrieveRequest = {
  pathParams: {
    certificateId: "sit",
  },
};

sdk.v1.certificateActionRetrieve(req).then((res: CertificateActionRetrieveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->