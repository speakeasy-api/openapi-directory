<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApodRequest, GetApodResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApodRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    date: "sit",
    hd: false,
  },
};

sdk.requestTag.getApod(req).then((res: GetApodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->