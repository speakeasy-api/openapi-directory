<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostRequest, PostResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    ip: "sit",
  },
};

sdk.main.post(req).then((res: PostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->