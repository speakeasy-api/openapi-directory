<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ReadDependenciesV1EnCoreWebSmDependenciesPostRequest, ReadDependenciesV1EnCoreWebSmDependenciesPostResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: ReadDependenciesV1EnCoreWebSmDependenciesPostRequest = {
  request: {
    text: "sit",
  },
};

sdk.readDependenciesV1EnCoreWebSmDependenciesPost(req).then((res: ReadDependenciesV1EnCoreWebSmDependenciesPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->