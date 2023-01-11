<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VideointelligenceVideosAnnotateRequest, VideointelligenceVideosAnnotateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VideointelligenceVideosAnnotateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    features: [
      "PERSON_DETECTION",
      "LOGO_RECOGNITION",
      "SHOT_CHANGE_DETECTION",
    ],
    inputContent: "et",
    inputUri: "ut",
    locationId: "dolorem",
    outputUri: "et",
    videoContext: {
      explicitContentDetectionConfig: {
        model: "voluptate",
      },
      faceDetectionConfig: {
        includeAttributes: true,
        includeBoundingBoxes: true,
        model: "totam",
      },
      labelDetectionConfig: {
        frameConfidenceThreshold: 80.199997,
        labelDetectionMode: "FRAME_MODE",
        model: "vel",
        stationaryCamera: false,
        videoConfidenceThreshold: 91.099998,
      },
      objectTrackingConfig: {
        model: "aspernatur",
      },
      personDetectionConfig: {
        includeAttributes: true,
        includeBoundingBoxes: false,
        includePoseLandmarks: false,
      },
      segments: [
        {
          endTimeOffset: "est",
          startTimeOffset: "aut",
        },
        {
          endTimeOffset: "odit",
          startTimeOffset: "non",
        },
        {
          endTimeOffset: "voluptas",
          startTimeOffset: "omnis",
        },
      ],
      shotChangeDetectionConfig: {
        model: "aut",
      },
      speechTranscriptionConfig: {
        audioTracks: [
          5558237345453186302,
        ],
        diarizationSpeakerCount: 7845762441295307478,
        enableAutomaticPunctuation: true,
        enableSpeakerDiarization: true,
        enableWordConfidence: false,
        filterProfanity: false,
        languageCode: "qui",
        maxAlternatives: 388440063886460141,
        speechContexts: [
          {
            phrases: [
              "eveniet",
            ],
          },
          {
            phrases: [
              "sint",
              "inventore",
            ],
          },
        ],
      },
      textDetectionConfig: {
        languageHints: [
          "exercitationem",
          "aut",
          "reprehenderit",
        ],
        model: "tempore",
      },
    },
  },
};

sdk.videos.videointelligenceVideosAnnotate(req).then((res: VideointelligenceVideosAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->