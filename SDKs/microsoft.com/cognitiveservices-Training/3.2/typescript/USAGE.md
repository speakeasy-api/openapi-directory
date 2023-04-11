<!-- Start SDK Example Usage -->
```typescript
import {
  GetDomainRequest,
  GetDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apimKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetDomainRequest = {
  domainId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.domainsApi.getDomain(req).then((res: GetDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->