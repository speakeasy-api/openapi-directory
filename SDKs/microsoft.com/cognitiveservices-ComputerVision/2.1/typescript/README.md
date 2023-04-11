# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-ComputerVision/2.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-ComputerVision/2.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `analyzeImage` - This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* `analyzeImageByDomain` - This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.
* `describeImage` - This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. Descriptions may include results from celebrity and landmark domain models, if applicable.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* `detectObjects` - Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* `generateThumbnail` - This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* `getAreaOfInterest` - This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* `listModels` - This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* `recognizePrintedText` - Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.
* `tagImage` - This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the hint "fungus".
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

