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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum{
                "PERSON_DETECTION",
                "LOGO_RECOGNITION",
                "SHOT_CHANGE_DETECTION",
            },
            InputContent: "et",
            InputURI: "ut",
            LocationID: "dolorem",
            OutputURI: "et",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p1beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig{
                    Model: "voluptate",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: true,
                    Model: "totam",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 80.199997,
                    LabelDetectionMode: "FRAME_MODE",
                    Model: "vel",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 91.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig{
                    Model: "aspernatur",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "est",
                        StartTimeOffset: "aut",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "odit",
                        StartTimeOffset: "non",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "voluptas",
                        StartTimeOffset: "omnis",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig{
                    Model: "aut",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        5558237345453186302,
                    },
                    DiarizationSpeakerCount: 7845762441295307478,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: false,
                    FilterProfanity: false,
                    LanguageCode: "qui",
                    MaxAlternatives: 388440063886460141,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "eveniet",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "sint",
                                "inventore",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "exercitationem",
                        "aut",
                        "reprehenderit",
                    },
                    Model: "tempore",
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