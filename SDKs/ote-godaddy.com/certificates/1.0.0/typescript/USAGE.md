<!-- Start SDK Example Usage -->
```typescript
import {
  CertificateActionRetrieveRequest,
  CertificateActionRetrieveResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CertificateActionRetrieveRequest = {
  certificateId: "corrupti",
};

sdk.v1.certificateActionRetrieve(req).then((res: CertificateActionRetrieveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->