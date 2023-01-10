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
            AccessToken: "necessitatibus",
            Alt: "proto",
            Callback: "numquam",
            Fields: "omnis",
            Key: "cumque",
            OauthToken: "eum",
            PrettyPrint: true,
            QuotaUser: "fugiat",
            UploadType: "iure",
            UploadProtocol: "dignissimos",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                "OBJECT_TRACKING",
                "FACE_DETECTION",
                "TEXT_DETECTION",
            },
            InputContent: "unde",
            InputURI: "sit",
            LocationID: "voluptates",
            OutputURI: "et",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: "ut",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    Model: "eveniet",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 17.100000,
                    LabelDetectionMode: "LABEL_DETECTION_MODE_UNSPECIFIED",
                    Model: "earum",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 46.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: "quaerat",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "eaque",
                        StartTimeOffset: "voluptatem",
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "cum",
                        StartTimeOffset: "nobis",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: "voluptates",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        6498262192660066603,
                        1770289546034260289,
                    },
                    DiarizationSpeakerCount: 2891950092806909580,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: true,
                    FilterProfanity: true,
                    LanguageCode: "non",
                    MaxAlternatives: 1280594349293678002,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "neque",
                                "rerum",
                                "qui",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "error",
                                "et",
                                "aspernatur",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "ab",
                    },
                    Model: "eos",
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