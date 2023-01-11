<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateUsageChargeRequest, CreateUsageChargeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateUsageChargeRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    recurringApplicationChargeId: "sit",
  },
  headers: {
    xAppstoreUsageChargeToken: "voluptas",
  },
  request: {
    usageCharge: {
      description: "culpa",
      point: 501233450539197794,
    },
  },
};

sdk.applicationCharge.createUsageCharge(req).then((res: CreateUsageChargeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->