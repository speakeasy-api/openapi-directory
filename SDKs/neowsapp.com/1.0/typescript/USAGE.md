<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RetrieveNeoFeedTodayRequest, RetrieveNeoFeedTodayResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RetrieveNeoFeedTodayRequest = {
  queryParams: {
    detailed: false,
  },
};

sdk.feed.retrieveNeoFeedToday(req).then((res: RetrieveNeoFeedTodayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->