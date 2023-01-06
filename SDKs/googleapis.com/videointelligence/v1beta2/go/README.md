# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DollarXgafv: "1",
            AccessToken: "earum",
            Alt: "json",
            Callback: "enim",
            Fields: "aut",
            Key: "asperiores",
            OauthToken: "non",
            PrettyPrint: false,
            QuotaUser: "consequatur",
            UploadType: "exercitationem",
            UploadProtocol: "ipsa",
        },
        Request: &shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum{
                "EXPLICIT_CONTENT_DETECTION",
            },
            InputContent: "dolorem",
            InputURI: "magnam",
            LocationID: "at",
            OutputURI: "quibusdam",
            VideoContext: &shared.GoogleCloudVideointelligenceV1beta2VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig{
                    Model: "asperiores",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    Model: "quia",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig{
                    FrameConfidenceThreshold: 37.200001,
                    LabelDetectionMode: "SHOT_MODE",
                    Model: "quia",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 78.199997,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig{
                    Model: "in",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: true,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "nesciunt",
                        StartTimeOffset: "autem",
                    },
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "tempora",
                        StartTimeOffset: "accusantium",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig{
                    Model: "tenetur",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        2363396022601512582,
                        2448981727470447464,
                    },
                    DiarizationSpeakerCount: 1470710671957478385,
                    EnableAutomaticPunctuation: false,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: true,
                    FilterProfanity: true,
                    LanguageCode: "quaerat",
                    MaxAlternatives: 2117139880181139921,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "sint",
                                "animi",
                                "enim",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "ipsum",
                                "sint",
                                "consequatur",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "eum",
                                "non",
                                "labore",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig{
                    LanguageHints: []string{
                        "sit",
                        "cumque",
                    },
                    Model: "illum",
                },
            },
        },
    }
    
    res, err := s.Videos.VideointelligenceVideosAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### videos

* `VideointelligenceVideosAnnotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
