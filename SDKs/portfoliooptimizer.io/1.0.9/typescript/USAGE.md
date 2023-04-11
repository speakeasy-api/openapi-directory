<!-- Start SDK Example Usage -->
```typescript
import {
  PostAssetsAnalysisAbsorptionRatioRequestBody,
  PostAssetsAnalysisAbsorptionRatioResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: PostAssetsAnalysisAbsorptionRatioRequestBody = {
  assets: 548814,
  assetsCovarianceMatrix: [
    [
      8442.66,
      6027.63,
      8579.46,
    ],
    [
      8472.52,
      4236.55,
      6235.64,
    ],
    [
      3843.82,
      4375.87,
      2975.34,
    ],
  ],
  assetsCovarianceMatrixEigenvectors: {
    eigenvectorsRetained: 891773,
  },
};

sdk.assetsAnalysis.postAssetsAnalysisAbsorptionRatio(req).then((res: PostAssetsAnalysisAbsorptionRatioResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->