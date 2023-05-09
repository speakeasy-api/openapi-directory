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
        GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest: &shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum{
                shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnumExplicitContentDetection,
            },
            InputContent: sdk.String("natus"),
            InputURI: sdk.String("sed"),
            LocationID: sdk.String("iste"),
            OutputURI: sdk.String("dolor"),
            VideoContext: &shared.GoogleCloudVideointelligenceV1p1beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig{
                    Model: sdk.String("natus"),
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    Model: sdk.String("laboriosam"),
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: sdk.Float32(9437.49),
                    LabelDetectionMode: shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode.ToPointer(),
                    Model: sdk.String("fuga"),
                    StationaryCamera: sdk.Bool(false),
                    VideoConfidenceThreshold: sdk.Float32(4499.5),
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig{
                    Model: sdk.String("corporis"),
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig{
                    IncludeAttributes: sdk.Bool(false),
                    IncludeBoundingBoxes: sdk.Bool(false),
                    IncludePoseLandmarks: sdk.Bool(false),
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: sdk.String("iure"),
                        StartTimeOffset: sdk.String("saepe"),
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: sdk.String("quidem"),
                        StartTimeOffset: sdk.String("architecto"),
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: sdk.String("ipsa"),
                        StartTimeOffset: sdk.String("reiciendis"),
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig{
                    Model: sdk.String("est"),
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig{
                    AudioTracks: []int{
                        670638,
                        170909,
                        210382,
                    },
                    DiarizationSpeakerCount: sdk.Int(358152),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableSpeakerDiarization: sdk.Bool(false),
                    EnableWordConfidence: sdk.Bool(false),
                    FilterProfanity: sdk.Bool(false),
                    LanguageCode: sdk.String("explicabo"),
                    MaxAlternatives: sdk.Int(750686),
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "iure",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "doloribus",
                        "sapiente",
                        "architecto",
                    },
                    Model: sdk.String("mollitia"),
                },
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
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
