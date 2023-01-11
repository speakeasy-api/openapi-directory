<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PredictImageRequest, PredictImageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PredictImageRequest = {
  pathParams: {
    projectId: "sit",
  },
  queryParams: {
    application: "voluptas",
    iterationId: "culpa",
  },
  headers: {
    predictionKey: "expedita",
  },
  request: {
    imageData: {
      content: "consequuntur".encode(),
      imageData: "dolor",
    },
  },
};

sdk.imagePredictionApi.predictImage(req).then((res: PredictImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->