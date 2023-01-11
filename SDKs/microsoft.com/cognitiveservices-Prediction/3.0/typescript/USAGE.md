<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ClassifyImageRequest, ClassifyImageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apimKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ClassifyImageRequest = {
  pathParams: {
    projectId: "sit",
    publishedName: "voluptas",
  },
  queryParams: {
    application: "culpa",
  },
  request: {
    imageData: {
      content: "expedita".encode(),
      imageData: "consequuntur",
    },
  },
};

sdk.imagePredictionApi.classifyImage(req).then((res: ClassifyImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->