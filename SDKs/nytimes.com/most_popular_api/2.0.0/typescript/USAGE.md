<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetMostemailedSectionTimePeriodJsonRequest, GetMostemailedSectionTimePeriodJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetMostemailedSectionTimePeriodJsonRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    section: "Opinion",
    timePeriod: "1",
  },
};

sdk.getMostemailedSectionTimePeriodJson(req).then((res: GetMostemailedSectionTimePeriodJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->