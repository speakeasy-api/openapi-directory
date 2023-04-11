<!-- Start SDK Example Usage -->
```typescript
import {
  GetFeaturesFeatureIdRequest,
  GetFeaturesFeatureIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFeaturesFeatureIdRequest = {
  featureId: 548814,
};

sdk.feature.getFeaturesFeatureId(req).then((res: GetFeaturesFeatureIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->