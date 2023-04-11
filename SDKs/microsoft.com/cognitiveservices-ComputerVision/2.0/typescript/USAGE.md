<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyzeImageRequest,
  AnalyzeImageResponse,
  AnalyzeImageDetailsEnum,
} from "openapi/dist/sdk/models/operations";
import {
  VisualFeaturesEnum,
  ServiceLanguageEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apimKey: "YOUR_API_KEY_HERE",
  },
});

const req: AnalyzeImageRequest = {
  imageUrl: {
    url: "corrupti",
  },
  details: [
    AnalyzeImageDetailsEnum.Landmarks,
    AnalyzeImageDetailsEnum.Landmarks,
    AnalyzeImageDetailsEnum.Landmarks,
  ],
  language: ServiceLanguageEnum.Zh,
  visualFeatures: [
    VisualFeaturesEnum.Objects,
    VisualFeaturesEnum.Categories,
    VisualFeaturesEnum.Tags,
  ],
};

sdk.analyzeImage(req).then((res: AnalyzeImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->