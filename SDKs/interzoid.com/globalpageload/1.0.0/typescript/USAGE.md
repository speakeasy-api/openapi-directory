<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GlobalpageloadRequest, GlobalpageloadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GlobalpageloadRequest = {
  queryParams: {
    license: "sit",
    origin: "voluptas",
    url: "culpa",
  },
};

sdk.pageLoadPerformanceTime.globalpageload(req).then((res: GlobalpageloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->