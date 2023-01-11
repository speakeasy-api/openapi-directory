<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCriticsResourceTypeJsonRequest, GetCriticsResourceTypeJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCriticsResourceTypeJsonRequest = {
  pathParams: {
    resourceType: "sit",
  },
};

sdk.getCriticsResourceTypeJson(req).then((res: GetCriticsResourceTypeJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->