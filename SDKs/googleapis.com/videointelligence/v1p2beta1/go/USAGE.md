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
            AccessToken: "natus",
            Alt: "media",
            Callback: "magnam",
            Fields: "quia",
            Key: "ut",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "sed",
            UploadProtocol: "sit",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                "FACE_DETECTION",
                "PERSON_DETECTION",
            },
            InputContent: "est",
            InputURI: "cum",
            LocationID: "provident",
            OutputURI: "minus",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: "blanditiis",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    Model: "non",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 53.200001,
                    LabelDetectionMode: "FRAME_MODE",
                    Model: "voluptate",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 90.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: "excepturi",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "esse",
                        StartTimeOffset: "id",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: "dolor",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        8028949961499386255,
                    },
                    DiarizationSpeakerCount: 8130161293133408874,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "quibusdam",
                    MaxAlternatives: 2279462592773487128,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "id",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "in",
                                "est",
                                "ut",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "voluptatibus",
                                "nobis",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "voluptatem",
                        "at",
                    },
                    Model: "cum",
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