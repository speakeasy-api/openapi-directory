<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUserContentByDateJsonRequest, GetUserContentByDateJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetUserContentByDateJsonRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    date: "sit",
  },
};

sdk.getUserContentByDateJson(req).then((res: GetUserContentByDateJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->