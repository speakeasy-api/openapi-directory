# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/videointelligence/v1p2beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.VideointelligenceVideosAnnotateRequest{
        Security: operations.VideointelligenceVideosAnnotateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.VideointelligenceVideosAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                "EXPLICIT_CONTENT_DETECTION",
                "FACE_DETECTION",
                "SHOT_CHANGE_DETECTION",
            },
            InputContent: "debitis",
            InputURI: "ipsa",
            LocationID: "delectus",
            OutputURI: "tempora",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: "suscipit",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "molestiae",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 7917.25,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "voluptatum",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 4799.77,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: "excepturi",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "recusandae",
                        StartTimeOffset: "temporibus",
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "ab",
                        StartTimeOffset: "quis",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: "veritatis",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig{
                    AudioTracks: []int{
                        20218,
                        368241,
                        832620,
                    },
                    DiarizationSpeakerCount: 957156,
                    EnableAutomaticPunctuation: false,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: false,
                    FilterProfanity: false,
                    LanguageCode: "quo",
                    MaxAlternatives: 140350,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "maiores",
                                "molestiae",
                                "quod",
                                "quod",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "totam",
                                "porro",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "dicta",
                                "nam",
                                "officia",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "fugit",
                                "deleniti",
                                "hic",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    Model: "modi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Videos.VideointelligenceVideosAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Videos

* `VideointelligenceVideosAnnotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
