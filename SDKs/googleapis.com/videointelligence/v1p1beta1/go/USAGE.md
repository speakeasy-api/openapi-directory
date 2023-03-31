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
        DollarXgafv: "2",
        GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest: &shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum{
                "OBJECT_TRACKING",
                "LOGO_RECOGNITION",
                "TEXT_DETECTION",
            },
            InputContent: "nulla",
            InputURI: "corrupti",
            LocationID: "illum",
            OutputURI: "vel",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p1beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig{
                    Model: "error",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "deserunt",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 3843.82,
                    LabelDetectionMode: "SHOT_MODE",
                    Model: "magnam",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 8917.73,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig{
                    Model: "ipsa",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "tempora",
                        StartTimeOffset: "suscipit",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "molestiae",
                        StartTimeOffset: "minus",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "placeat",
                        StartTimeOffset: "voluptatum",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "iusto",
                        StartTimeOffset: "excepturi",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig{
                    Model: "nisi",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig{
                    AudioTracks: []int{
                        836079,
                        71036,
                        337396,
                        87129,
                    },
                    DiarizationSpeakerCount: 648172,
                    EnableAutomaticPunctuation: false,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: false,
                    FilterProfanity: false,
                    LanguageCode: "perferendis",
                    MaxAlternatives: 368241,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "officia",
                                "occaecati",
                                "fugit",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                    Model: "beatae",
                },
            },
        },
        AccessToken: "commodi",
        Alt: "media",
        Callback: "modi",
        Fields: "qui",
        Key: "impedit",
        OauthToken: "cum",
        PrettyPrint: false,
        QuotaUser: "esse",
        UploadType: "ipsum",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Videos.VideointelligenceVideosAnnotate(ctx, req, operations.VideointelligenceVideosAnnotateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->