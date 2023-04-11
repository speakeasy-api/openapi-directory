# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/3.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/3.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### imagePredictionApi

* `classifyImage` - Classify an image and saves the result.
* `classifyImageUrlWithNoStoreForm` - Classify an image url without saving the result.
* `classifyImageUrlWithNoStoreJson` - Classify an image url without saving the result.
* `classifyImageUrlWithNoStoreRaw` - Classify an image url without saving the result.
* `classifyImageUrlForm` - Classify an image url and saves the result.
* `classifyImageUrlJson` - Classify an image url and saves the result.
* `classifyImageUrlRaw` - Classify an image url and saves the result.
* `classifyImageWithNoStore` - Classify an image without saving the result.
* `detectImage` - Detect objects in an image and saves the result.
* `detectImageUrlWithNoStoreForm` - Detect objects in an image url without saving the result.
* `detectImageUrlWithNoStoreJson` - Detect objects in an image url without saving the result.
* `detectImageUrlWithNoStoreRaw` - Detect objects in an image url without saving the result.
* `detectImageUrlForm` - Detect objects in an image url and saves the result.
* `detectImageUrlJson` - Detect objects in an image url and saves the result.
* `detectImageUrlRaw` - Detect objects in an image url and saves the result.
* `detectImageWithNoStore` - Detect objects in an image without saving the result.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

