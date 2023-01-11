<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelReportRequest, CancelReportResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CancelReportRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    reportId: "sit",
  },
};

sdk.cancelReport(req).then((res: CancelReportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->