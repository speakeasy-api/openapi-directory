# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vision/v1p1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vision/v1p1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  VisionFilesAnnotateRequest,
  VisionFilesAnnotateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudVisionV1p1beta1FeatureTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VisionFilesAnnotateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudVisionV1p1beta1BatchAnnotateFilesRequest: {
    parent: "provident",
    requests: [
      {
        features: [
          {
            maxResults: 602763,
            model: "nulla",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.SafeSearchDetection,
          },
          {
            maxResults: 847252,
            model: "vel",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.ImageProperties,
          },
          {
            maxResults: 645894,
            model: "suscipit",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.TextDetection,
          },
          {
            maxResults: 297534,
            model: "debitis",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.TypeUnspecified,
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              2726.56,
              3834.41,
              4776.65,
              7917.25,
            ],
          },
          languageHints: [
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 9255.97,
              longitude: 8360.79,
            },
            minLatLng: {
              latitude: 710.36,
              longitude: 3373.96,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 6481.72,
                  y: 202.18,
                },
              ],
              vertices: [
                {
                  x: 832620,
                  y: 957156,
                },
                {
                  x: 778157,
                  y: 140350,
                },
              ],
            },
            filter: "at",
            productCategories: [
              "maiores",
              "molestiae",
              "quod",
              "quod",
            ],
            productSet: "esse",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "porro",
              "dolorum",
              "dicta",
            ],
            enableTextDetectionConfidenceScore: false,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "nam",
          gcsSource: {
            uri: "https://oily-cephalopod.name",
          },
          mimeType: "hic",
        },
        pages: [
          521848,
          105907,
          414662,
          473600,
        ],
      },
      {
        features: [
          {
            maxResults: 186332,
            model: "impedit",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.CropHints,
          },
          {
            maxResults: 456150,
            model: "ipsum",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.SafeSearchDetection,
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              187.89,
            ],
          },
          languageHints: [
            "natus",
            "sed",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 6120.96,
              longitude: 2223.21,
            },
            minLatLng: {
              latitude: 6169.34,
              longitude: 3864.89,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 9025.99,
                  y: 6818.2,
                },
                {
                  x: 4499.5,
                  y: 3595.08,
                },
                {
                  x: 6130.64,
                  y: 4370.32,
                },
                {
                  x: 9023.49,
                  y: 6976.31,
                },
              ],
              vertices: [
                {
                  x: 60225,
                  y: 969810,
                },
              ],
            },
            filter: "est",
            productCategories: [
              "laborum",
              "dolores",
              "dolorem",
            ],
            productSet: "corporis",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "nobis",
            ],
            enableTextDetectionConfidenceScore: false,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "enim",
          gcsSource: {
            uri: "https://gummy-expedition.name",
          },
          mimeType: "accusantium",
        },
        pages: [
          634274,
          988374,
        ],
      },
      {
        features: [
          {
            maxResults: 102044,
            model: "mollitia",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.LandmarkDetection,
          },
          {
            maxResults: 635059,
            model: "consequuntur",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.ObjectLocalization,
          },
          {
            maxResults: 653108,
            model: "occaecati",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.LogoDetection,
          },
          {
            maxResults: 414369,
            model: "quam",
            type: GoogleCloudVisionV1p1beta1FeatureTypeEnum.DocumentTextDetection,
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              6235.1,
            ],
          },
          languageHints: [
            "quis",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 1103.75,
              longitude: 6747.52,
            },
            minLatLng: {
              latitude: 6563.3,
              longitude: 3172.02,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 7783.46,
                  y: 1965.82,
                },
              ],
              vertices: [
                {
                  x: 368725,
                  y: 662527,
                },
                {
                  x: 820994,
                  y: 13571,
                },
                {
                  x: 97101,
                  y: 622846,
                },
                {
                  x: 837945,
                  y: 673660,
                },
              ],
            },
            filter: "quasi",
            productCategories: [
              "voluptatibus",
              "vero",
              "nihil",
              "praesentium",
            ],
            productSet: "voluptatibus",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "omnis",
            ],
            enableTextDetectionConfidenceScore: false,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "voluptate",
          gcsSource: {
            uri: "https://agile-arch-rival.info",
          },
          mimeType: "ut",
        },
        pages: [
          120196,
          359444,
          296140,
          480894,
        ],
      },
    ],
  },
  accessToken: "dicta",
  alt: AltEnum.Proto,
  callback: "enim",
  fields: "accusamus",
  key: "commodi",
  oauthToken: "repudiandae",
  prettyPrint: false,
  quotaUser: "quae",
  uploadType: "ipsum",
  uploadProtocol: "quidem",
};

sdk.files.visionFilesAnnotate(req).then((res: VisionFilesAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### files

* `visionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `visionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `visionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `visionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

