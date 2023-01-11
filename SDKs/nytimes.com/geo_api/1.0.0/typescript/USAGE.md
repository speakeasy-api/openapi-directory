<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetQueryJsonRequest, GetQueryJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetQueryJsonRequest = {
  queryParams: {
    dateRange: "sit",
    elevation: 2259404117704393152,
    facets: 6050128673802995827,
    filter: "expedita",
    latitude: "consequuntur",
    limit: 2669985732393126063,
    longitude: "expedita",
    name: "voluptas",
    offset: 8274930044578894929,
    query: "et",
    sort: "nihil",
    sw: "rerum",
  },
};

sdk.events.getQueryJson(req).then((res: GetQueryJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->