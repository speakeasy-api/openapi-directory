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
            Alt: "json",
            Callback: "suscipit",
            Fields: "exercitationem",
            Key: "omnis",
            OauthToken: "reprehenderit",
            PrettyPrint: true,
            QuotaUser: "minima",
            UploadType: "sit",
            UploadProtocol: "quas",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum{
                "SHOT_CHANGE_DETECTION",
            },
            InputContent: "et",
            InputURI: "perferendis",
            LocationID: "sunt",
            OutputURI: "ipsum",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p3beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig{
                    Model: "eum",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "est",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 94.099998,
                    LabelDetectionMode: "SHOT_MODE",
                    Model: "ipsa",
                    StationaryCamera: false,
                    VideoConfidenceThreshold: 79.199997,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig{
                    Model: "eos",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: true,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "et",
                        StartTimeOffset: "aut",
                    },
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "saepe",
                        StartTimeOffset: "fugit",
                    },
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "quae",
                        StartTimeOffset: "repellat",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig{
                    Model: "laboriosam",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        8944738037156554366,
                        2062583762746098340,
                        3421029898312825929,
                    },
                    DiarizationSpeakerCount: 7614446021282930123,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: false,
                    FilterProfanity: false,
                    LanguageCode: "quia",
                    MaxAlternatives: 2397772980755581892,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "ut",
                                "quasi",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "ea",
                                "sit",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "dicta",
                        "eum",
                        "molestiae",
                    },
                    Model: "eum",
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