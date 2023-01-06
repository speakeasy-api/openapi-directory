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
            AccessToken: "et",
            Alt: "proto",
            Callback: "laboriosam",
            Fields: "repellat",
            Key: "id",
            OauthToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "labore",
            UploadType: "iure",
            UploadProtocol: "dolores",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum{
                "FEATURE_UNSPECIFIED",
                "SPEECH_TRANSCRIPTION",
                "FEATURE_UNSPECIFIED",
            },
            InputContent: "soluta",
            InputURI: "incidunt",
            LocationID: "quia",
            OutputURI: "nisi",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p1beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig{
                    Model: "est",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "sit",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 30.200001,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "dolore",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 52.200001,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig{
                    Model: "omnis",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "excepturi",
                        StartTimeOffset: "voluptatibus",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig{
                    Model: "sapiente",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        1974261202536705039,
                        5437406241235142632,
                    },
                    DiarizationSpeakerCount: 2376630504299246992,
                    EnableAutomaticPunctuation: false,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "id",
                    MaxAlternatives: 3454383545197603946,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "magni",
                                "ullam",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "expedita",
                                "animi",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "sint",
                                "praesentium",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "et",
                    },
                    Model: "nam",
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