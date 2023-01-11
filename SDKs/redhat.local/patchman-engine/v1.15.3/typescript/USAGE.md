<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LatestPackageRequest, LatestPackageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LatestPackageRequest = {
  security: {
    rhIdentity: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    packageName: "sit",
  },
};

sdk.latestPackage(req).then((res: LatestPackageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->