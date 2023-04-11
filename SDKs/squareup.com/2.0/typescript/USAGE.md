<!-- Start SDK Example Usage -->
```typescript
import {
  shared.RegisterDomainRequest,
  RegisterDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.RegisterDomainRequest = {
  domainName: "corrupti",
};

sdk.applePay.registerDomain(req).then((res: RegisterDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->