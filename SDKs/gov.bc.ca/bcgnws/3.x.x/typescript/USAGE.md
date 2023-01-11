<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFeaturesFeatureIdRequest, GetFeaturesFeatureIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFeaturesFeatureIdRequest = {
  pathParams: {
    featureId: 8717895732742165505,
  },
};

sdk.feature.getFeaturesFeatureId(req).then((res: GetFeaturesFeatureIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->