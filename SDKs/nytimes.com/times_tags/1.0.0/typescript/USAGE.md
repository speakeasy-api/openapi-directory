<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetTimestagsRequest, GetTimestagsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetTimestagsRequest = {
  queryParams: {
    filter: "Org",
    max: 2259404117704393152,
    query: "culpa",
  },
};

sdk.getTimestags(req).then((res: GetTimestagsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->