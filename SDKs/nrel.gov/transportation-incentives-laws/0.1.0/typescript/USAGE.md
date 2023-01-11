<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1CategoryListOutputFormatRequest, GetV1CategoryListOutputFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1CategoryListOutputFormatRequest = {
  pathParams: {
    outputFormat: "json",
  },
  queryParams: {
    apiKey: "voluptas",
    type: "user",
  },
};

sdk.getV1CategoryListOutputFormat(req).then((res: GetV1CategoryListOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->