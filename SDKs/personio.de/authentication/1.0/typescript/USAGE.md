<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostAuthRequest, PostAuthResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostAuthRequest = {
  queryParams: {
    clientId: "sit",
    clientSecret: "voluptas",
  },
};

sdk.postAuth(req).then((res: PostAuthResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->