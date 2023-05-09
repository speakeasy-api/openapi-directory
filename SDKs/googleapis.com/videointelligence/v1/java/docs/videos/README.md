# videos

### Available Operations

* [videointelligenceVideosAnnotate](#videointelligencevideosannotate) - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

## videointelligenceVideosAnnotate

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateRequest;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateResponse;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1VideoSegment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceVideosAnnotateRequest req = new VideointelligenceVideosAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVideointelligenceV1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum[]{{
                        add(GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum.SHOT_CHANGE_DETECTION),
                        add(GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum.TEXT_DETECTION),
                    }};
                    inputContent = "quia";
                    inputUri = "quis";
                    locationId = "vitae";
                    outputUri = "laborum";
                    videoContext = new GoogleCloudVideointelligenceV1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig() {{
                            model = "animi";
                        }};;
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "enim";
                        }};;
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 1381.83;
                            labelDetectionMode = GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum.SHOT_AND_FRAME_MODE;
                            model = "sequi";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 9495.72;
                        }};;
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1ObjectTrackingConfig() {{
                            model = "ipsam";
                        }};;
                        personDetectionConfig = new GoogleCloudVideointelligenceV1PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};;
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1VideoSegment() {{
                                endTimeOffset = "possimus";
                                startTimeOffset = "aut";
                            }}),
                            add(new GoogleCloudVideointelligenceV1VideoSegment() {{
                                endTimeOffset = "quasi";
                                startTimeOffset = "error";
                            }}),
                            add(new GoogleCloudVideointelligenceV1VideoSegment() {{
                                endTimeOffset = "temporibus";
                                startTimeOffset = "laborum";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1ShotChangeDetectionConfig() {{
                            model = "quasi";
                        }};;
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]{{
                                add(976460),
                                add(878194),
                                add(468651),
                                add(509624),
                            }};
                            diarizationSpeakerCount = 976762;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "ipsa";
                            maxAlternatives = 604846;
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("perferendis"),
                                        add("doloremque"),
                                        add("reprehenderit"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("maiores"),
                                        add("dicta"),
                                    }};
                                }}),
                            }};
                        }};;
                        textDetectionConfig = new GoogleCloudVideointelligenceV1TextDetectionConfig() {{
                            languageHints = new String[]{{
                                add("dolore"),
                                add("iusto"),
                            }};
                            model = "dicta";
                        }};;
                    }};;
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            VideointelligenceVideosAnnotateResponse res = sdk.videos.videointelligenceVideosAnnotate(req, new VideointelligenceVideosAnnotateSecurity("excepturi", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
