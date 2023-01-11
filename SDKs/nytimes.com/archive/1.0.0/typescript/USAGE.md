<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetYearMonthJsonRequest, GetYearMonthJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetYearMonthJsonRequest = {
  pathParams: {
    month: 8717895732742165505,
    year: 2259404117704393152,
  },
};

sdk.archive.getYearMonthJson(req).then((res: GetYearMonthJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->