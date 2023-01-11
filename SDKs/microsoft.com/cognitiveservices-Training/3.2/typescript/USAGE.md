<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDomainRequest, GetDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apimKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDomainRequest = {
  pathParams: {
    domainId: "sit",
  },
};

sdk.domainsApi.getDomain(req).then((res: GetDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->