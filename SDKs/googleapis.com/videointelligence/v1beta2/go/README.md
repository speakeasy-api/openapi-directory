# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/videointelligence/v1beta2/go
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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum{
                "EXPLICIT_CONTENT_DETECTION",
                "FACE_DETECTION",
                "SHOT_CHANGE_DETECTION",
            },
            InputContent: "saepe",
            InputURI: "inventore",
            LocationID: "sapiente",
            OutputURI: "enim",
            VideoContext: &shared.GoogleCloudVideointelligenceV1beta2VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig{
                    Model: "eum",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "voluptatum",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig{
                    FrameConfidenceThreshold: 7917.25,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "non",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 4799.77,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig{
                    Model: "similique",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "molestiae",
                        StartTimeOffset: "quo",
                    },
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "quasi",
                        StartTimeOffset: "laboriosam",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig{
                    Model: "dicta",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig{
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
                    LanguageCode: "omnis",
                    MaxAlternatives: 140350,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "reiciendis",
                                "rem",
                                "quibusdam",
                                "et",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "occaecati",
                                "dolor",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "sed",
                                "quisquam",
                                "rerum",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "qui",
                                "sed",
                                "rerum",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig{
                    LanguageHints: []string{
                        "occaecati",
                        "odit",
                        "esse",
                        "rem",
                    },
                    Model: "voluptatem",
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
