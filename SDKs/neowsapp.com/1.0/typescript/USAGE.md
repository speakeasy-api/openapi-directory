<!-- Start SDK Example Usage -->
```typescript
import {
  RetrieveNEOFeedTodayRequest,
  RetrieveNEOFeedTodayResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetrieveNEOFeedTodayRequest = {
  detailed: false,
};

sdk.feed.retrieveNEOFeedToday(req).then((res: RetrieveNEOFeedTodayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->