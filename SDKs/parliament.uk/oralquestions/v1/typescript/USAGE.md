<!-- Start SDK Example Usage -->
```typescript
import {
  PublishedEarlyDayMotionGetRequest,
  PublishedEarlyDayMotionGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PublishedEarlyDayMotionGetRequest = {
  id: 548814,
};

sdk.earlyDayMotions.publishedEarlyDayMotionGet(req).then((res: PublishedEarlyDayMotionGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->