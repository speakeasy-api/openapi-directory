<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteKeysIdRequest, DeleteKeysIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    jwtAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteKeysIdRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.apiKeys.deleteKeysId(req).then((res: DeleteKeysIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->