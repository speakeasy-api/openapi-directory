<!-- Start SDK Example Usage -->
```typescript
import {
  VideointelligenceVideosAnnotateRequest,
  VideointelligenceVideosAnnotateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum,
  GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VideointelligenceVideosAnnotateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest: {
    features: [
      GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.ObjectTracking,
      GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.LogoRecognition,
      GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.TextDetection,
    ],
    inputContent: "nulla",
    inputUri: "corrupti",
    locationId: "illum",
    outputUri: "vel",
    videoContext: {
      explicitContentDetectionConfig: {
        model: "error",
      },
      faceDetectionConfig: {
        includeAttributes: false,
        includeBoundingBoxes: false,
        model: "deserunt",
      },
      labelDetectionConfig: {
        frameConfidenceThreshold: 3843.82,
        labelDetectionMode: GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum.ShotMode,
        model: "magnam",
        stationaryCamera: false,
        videoConfidenceThreshold: 8917.73,
      },
      objectTrackingConfig: {
        model: "ipsa",
      },
      personDetectionConfig: {
        includeAttributes: false,
        includeBoundingBoxes: false,
        includePoseLandmarks: false,
      },
      segments: [
        {
          endTimeOffset: "tempora",
          startTimeOffset: "suscipit",
        },
        {
          endTimeOffset: "molestiae",
          startTimeOffset: "minus",
        },
        {
          endTimeOffset: "placeat",
          startTimeOffset: "voluptatum",
        },
        {
          endTimeOffset: "iusto",
          startTimeOffset: "excepturi",
        },
      ],
      shotChangeDetectionConfig: {
        model: "nisi",
      },
      speechTranscriptionConfig: {
        audioTracks: [
          836079,
          71036,
          337396,
          87129,
        ],
        diarizationSpeakerCount: 648172,
        enableAutomaticPunctuation: false,
        enableSpeakerDiarization: false,
        enableWordConfidence: false,
        filterProfanity: false,
        languageCode: "perferendis",
        maxAlternatives: 368241,
        speechContexts: [
          {
            phrases: [
              "quo",
              "odit",
              "at",
              "at",
            ],
          },
          {
            phrases: [
              "molestiae",
              "quod",
              "quod",
              "esse",
            ],
          },
          {
            phrases: [
              "porro",
              "dolorum",
              "dicta",
            ],
          },
          {
            phrases: [
              "officia",
              "occaecati",
              "fugit",
            ],
          },
        ],
      },
      textDetectionConfig: {
        languageHints: [
          "hic",
          "optio",
          "totam",
        ],
        model: "beatae",
      },
    },
  },
  accessToken: "commodi",
  alt: AltEnum.Media,
  callback: "modi",
  fields: "qui",
  key: "impedit",
  oauthToken: "cum",
  prettyPrint: false,
  quotaUser: "esse",
  uploadType: "ipsum",
  uploadProtocol: "excepturi",
};

sdk.videos.videointelligenceVideosAnnotate(req).then((res: VideointelligenceVideosAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->