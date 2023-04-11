# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### imagePredictionApi

* `predictImage` - Predict an image and saves the result
* `predictImageUrlWithNoStoreForm` - Predict an image url without saving the result
* `predictImageUrlWithNoStoreJson` - Predict an image url without saving the result
* `predictImageUrlWithNoStoreRaw` - Predict an image url without saving the result
* `predictImageUrlForm` - Predict an image url and saves the result
* `predictImageUrlJson` - Predict an image url and saves the result
* `predictImageUrlRaw` - Predict an image url and saves the result
* `predictImageWithNoStore` - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

