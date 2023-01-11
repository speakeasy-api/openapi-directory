<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetNumbersBaseRequest, GetNumbersBaseResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetNumbersBaseRequest = {
  security: {
    xMathtoolsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    from: 8717895732742165505,
    number: 2259404117704393152,
    to: 6050128673802995827,
  },
};

sdk.baseConversion.getNumbersBase(req).then((res: GetNumbersBaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->