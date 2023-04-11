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
  DescriptionExcludeEnum,
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
  descriptionExclude: [
    DescriptionExcludeEnum.Landmarks,
    DescriptionExcludeEnum.Landmarks,
    DescriptionExcludeEnum.Landmarks,
  ],
  details: [
    AnalyzeImageDetailsEnum.Landmarks,
    AnalyzeImageDetailsEnum.Landmarks,
    AnalyzeImageDetailsEnum.Celebrities,
    AnalyzeImageDetailsEnum.Landmarks,
  ],
  language: ServiceLanguageEnum.Pt,
  visualFeatures: [
    VisualFeaturesEnum.Categories,
    VisualFeaturesEnum.Adult,
  ],
};

sdk.analyzeImage(req).then((res: AnalyzeImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->