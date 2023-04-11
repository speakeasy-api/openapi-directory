<!-- Start SDK Example Usage -->
```typescript
import {
  GetDomainRequest,
  GetDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetDomainRequest = {
  trainingKey: "corrupti",
  domainId: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
};

sdk.domainsApi.getDomain(req).then((res: GetDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->