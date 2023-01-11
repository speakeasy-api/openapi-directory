<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetglobaltimeRequest, GetglobaltimeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetglobaltimeRequest = {
  queryParams: {
    license: "sit",
    locale: "voluptas",
  },
};

sdk.currentGlobalTime.getglobaltime(req).then((res: GetglobaltimeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->