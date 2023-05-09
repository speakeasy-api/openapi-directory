<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Videos.VideointelligenceVideosAnnotate(ctx, operations.VideointelligenceVideosAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumObjectTracking,
                shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumLogoRecognition,
                shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumTextDetection,
            },
            InputContent: sdk.String("nulla"),
            InputURI: sdk.String("corrupti"),
            LocationID: sdk.String("illum"),
            OutputURI: sdk.String("vel"),
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: sdk.String("error"),
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    Model: sdk.String("deserunt"),
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: sdk.Float32(3843.82),
                    LabelDetectionMode: shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnumShotMode.ToPointer(),
                    Model: sdk.String("magnam"),
                    StationaryCamera: sdk.Bool(false),
                    VideoConfidenceThreshold: sdk.Float32(8917.73),
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: sdk.String("ipsa"),
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    IncludePoseLandmarks: sdk.Bool(false),
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: sdk.String("tempora"),
                        StartTimeOffset: sdk.String("suscipit"),
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: sdk.String("molestiae"),
                        StartTimeOffset: sdk.String("minus"),
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: sdk.String("placeat"),
                        StartTimeOffset: sdk.String("voluptatum"),
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: sdk.String("iusto"),
                        StartTimeOffset: sdk.String("excepturi"),
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: sdk.String("nisi"),
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig{
                    AudioTracks: []int{
                        836079,
                        71036,
                        337396,
                        87129,
                    },
                    DiarizationSpeakerCount: sdk.Int(648172),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableSpeakerDiarization: sdk.Bool(false),
                    EnableWordConfidence: sdk.Bool(false),
                    FilterProfanity: sdk.Bool(false),
                    LanguageCode: sdk.String("perferendis"),
                    MaxAlternatives: sdk.Int(368241),
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "officia",
                                "occaecati",
                                "fugit",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                    Model: sdk.String("beatae"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.VideointelligenceVideosAnnotateSecurity{
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