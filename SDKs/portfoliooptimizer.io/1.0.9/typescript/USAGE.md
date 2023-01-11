<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostAssetsCorrelationMatrixRequest, PostAssetsCorrelationMatrixResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PostAssetsCorrelationMatrixRequest = {
  request: "sit",
};

sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrix(req).then((res: PostAssetsCorrelationMatrixResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->