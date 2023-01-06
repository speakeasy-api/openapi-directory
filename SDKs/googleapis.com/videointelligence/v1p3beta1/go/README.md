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
            AccessToken: "dolor",
            Alt: "proto",
            Callback: "magni",
            Fields: "sint",
            Key: "qui",
            OauthToken: "molestiae",
            PrettyPrint: false,
            QuotaUser: "debitis",
            UploadType: "dolorem",
            UploadProtocol: "eum",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum{
                "SHOT_CHANGE_DETECTION",
                "PERSON_DETECTION",
                "FEATURE_UNSPECIFIED",
            },
            InputContent: "explicabo",
            InputURI: "qui",
            LocationID: "et",
            OutputURI: "maxime",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p3beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig{
                    Model: "explicabo",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    Model: "asperiores",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 15.200000,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "ut",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 38.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig{
                    Model: "consequatur",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    IncludePoseLandmarks: true,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "perspiciatis",
                        StartTimeOffset: "totam",
                    },
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "magnam",
                        StartTimeOffset: "ut",
                    },
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "voluptatem",
                        StartTimeOffset: "aut",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig{
                    Model: "temporibus",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        2449861087700520244,
                        7185861015576746235,
                    },
                    DiarizationSpeakerCount: 7602960097212684830,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "perspiciatis",
                    MaxAlternatives: 7548558065796777077,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "tempora",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "dicta",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "eius",
                        "ea",
                    },
                    Model: "error",
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
