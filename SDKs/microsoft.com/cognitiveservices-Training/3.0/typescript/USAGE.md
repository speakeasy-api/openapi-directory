<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDomainRequest, GetDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetDomainRequest = {
  pathParams: {
    domainId: "sit",
  },
  headers: {
    trainingKey: "voluptas",
  },
};

sdk.domainsApi.getDomain(req).then((res: GetDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->