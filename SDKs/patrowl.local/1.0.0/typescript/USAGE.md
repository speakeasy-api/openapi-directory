<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CleanScanPageRequest, CleanScanPageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CleanScanPageRequest = {
  pathParams: {
    scanId: 8717895732742165505,
  },
};

sdk.patrowlEngine.cleanScanPage(req).then((res: CleanScanPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->