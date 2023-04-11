<!-- Start SDK Example Usage -->
```typescript
import {
  ClassifyImageRequest,
  ClassifyImageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apimKey: "YOUR_API_KEY_HERE",
  },
});

const req: ClassifyImageRequest = {
  requestBody: {
    imageData: {
      content: "corrupti".encode(),
      imageData: "provident",
    },
  },
  application: "distinctio",
  projectId: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
  publishedName: "repellendus",
};

sdk.imagePredictionApi.classifyImage(req).then((res: ClassifyImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->