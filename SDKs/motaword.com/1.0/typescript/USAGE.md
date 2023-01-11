<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteCacheRequest, DeleteCacheResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    mwoAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteCacheRequest = {
  pathParams: {
    key: "sit",
  },
};

sdk.deleteCache(req).then((res: DeleteCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->