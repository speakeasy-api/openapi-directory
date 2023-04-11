<!-- Start SDK Example Usage -->
```typescript
import {
  PredictImageRequest,
  PredictImageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PredictImageRequest = {
  predictionKey: "corrupti",
  requestBody: {
    imageData: {
      content: "provident".encode(),
      imageData: "distinctio",
    },
  },
  application: "quibusdam",
  iterationId: "9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
  projectId: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
};

sdk.imagePredictionApi.predictImage(req).then((res: PredictImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->