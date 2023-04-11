<!-- Start SDK Example Usage -->
```typescript
import {
  GetIndustriesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.jobFeed.getIndustries().then((res: GetIndustriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->