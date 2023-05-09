# Videos

### Available Operations

* [VideointelligenceVideosAnnotate](#videointelligencevideosannotate) - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

## VideointelligenceVideosAnnotate

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudVideointelligenceV1AnnotateVideoRequest: &shared.GoogleCloudVideointelligenceV1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum{
                shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumLabelDetection,
                shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumPersonDetection,
                shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumExplicitContentDetection,
                shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumTextDetection,
            },
            InputContent: sdk.String("possimus"),
            InputURI: sdk.String("aut"),
            LocationID: sdk.String("quasi"),
            OutputURI: sdk.String("error"),
            VideoContext: &shared.GoogleCloudVideointelligenceV1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig{
                    Model: sdk.String("temporibus"),
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1FaceDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    Model: sdk.String("laborum"),
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1LabelDetectionConfig{
                    FrameConfidenceThreshold: sdk.Float32(960.98),
                    LabelDetectionMode: shared.GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode.ToPointer(),
                    Model: sdk.String("voluptatibus"),
                    StationaryCamera: sdk.Bool(false),
                    VideoConfidenceThreshold: sdk.Float32(8781.94),
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1ObjectTrackingConfig{
                    Model: sdk.String("nihil"),
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1PersonDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    IncludePoseLandmarks: sdk.Bool(false),
                },
                Segments: []shared.GoogleCloudVideointelligenceV1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1VideoSegment{
                        EndTimeOffset: sdk.String("voluptatibus"),
                        StartTimeOffset: sdk.String("ipsa"),
                    },
                    shared.GoogleCloudVideointelligenceV1VideoSegment{
                        EndTimeOffset: sdk.String("omnis"),
                        StartTimeOffset: sdk.String("voluptate"),
                    },
                    shared.GoogleCloudVideointelligenceV1VideoSegment{
                        EndTimeOffset: sdk.String("cum"),
                        StartTimeOffset: sdk.String("perferendis"),
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1ShotChangeDetectionConfig{
                    Model: sdk.String("doloremque"),
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1SpeechTranscriptionConfig{
                    AudioTracks: []int{
                        282807,
                        979587,
                    },
                    DiarizationSpeakerCount: sdk.Int(120196),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableSpeakerDiarization: sdk.Bool(false),
                    EnableWordConfidence: sdk.Bool(false),
                    FilterProfanity: sdk.Bool(false),
                    LanguageCode: sdk.String("corporis"),
                    MaxAlternatives: sdk.Int(296140),
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1SpeechContext{
                            Phrases: []string{
                                "harum",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1SpeechContext{
                            Phrases: []string{
                                "accusamus",
                                "commodi",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1TextDetectionConfig{
                    LanguageHints: []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                    Model: sdk.String("excepturi"),
                },
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
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
