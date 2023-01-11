<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnonymizeRequest, AnonymizeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AnonymizeRequest = {
  pathParams: {
    anonymized: false,
    source: "voluptas",
  },
};

sdk.admin.anonymize(req).then((res: AnonymizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->