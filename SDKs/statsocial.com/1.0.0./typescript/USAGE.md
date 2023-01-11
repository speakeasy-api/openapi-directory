<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApplicationsStatusRequest, GetApplicationsStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetApplicationsStatusRequest = {
  queryParams: {
    key: "sit",
  },
};

sdk.application.getApplicationsStatus(req).then((res: GetApplicationsStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->