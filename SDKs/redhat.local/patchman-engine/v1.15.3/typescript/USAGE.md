<!-- Start SDK Example Usage -->
```typescript
import {
  LatestPackageRequest,
  LatestPackageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LatestPackageRequest = {
  packageName: "corrupti",
};

sdk.latestPackage(req).then((res: LatestPackageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->