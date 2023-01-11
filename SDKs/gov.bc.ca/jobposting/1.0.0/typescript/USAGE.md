<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetIndustriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.jobFeed.getIndustries().then((res: GetIndustriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->