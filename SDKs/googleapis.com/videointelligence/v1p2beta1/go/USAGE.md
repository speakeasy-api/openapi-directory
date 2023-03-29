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
        Request: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                "EXPLICIT_CONTENT_DETECTION",
                "FACE_DETECTION",
                "SHOT_CHANGE_DETECTION",
            },
            InputContent: "saepe",
            InputURI: "inventore",
            LocationID: "sapiente",
            OutputURI: "enim",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: "eum",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "voluptatum",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 7917.25,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "non",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 4799.77,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: "similique",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "molestiae",
                        StartTimeOffset: "quo",
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "quasi",
                        StartTimeOffset: "laboriosam",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: "dicta",
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
                    LanguageCode: "omnis",
                    MaxAlternatives: 140350,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "reiciendis",
                                "rem",
                                "quibusdam",
                                "et",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "occaecati",
                                "dolor",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "sed",
                                "quisquam",
                                "rerum",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "qui",
                                "sed",
                                "rerum",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
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