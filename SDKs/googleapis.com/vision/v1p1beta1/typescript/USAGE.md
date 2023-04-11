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