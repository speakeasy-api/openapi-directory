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
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceVideosAnnotateRequest req = new VideointelligenceVideosAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVideointelligenceV1beta2AnnotateVideoRequest = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[]{{
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.LABEL_DETECTION),
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.TEXT_DETECTION),
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.SHOT_CHANGE_DETECTION),
                    }};
                    inputContent = "natus";
                    inputUri = "laboriosam";
                    locationId = "hic";
                    outputUri = "saepe";
                    videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig() {{
                            model = "fuga";
                        }};;
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "in";
                        }};;
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {{
                            frameConfidenceThreshold = 3595.08;
                            labelDetectionMode = GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum.FRAME_MODE;
                            model = "iure";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 9023.49;
                        }};;
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig() {{
                            model = "quidem";
                        }};;
                        personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};;
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "ipsa";
                                startTimeOffset = "reiciendis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig() {{
                            model = "est";
                        }};;
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]{{
                                add(670638),
                                add(170909),
                                add(210382),
                            }};
                            diarizationSpeakerCount = 358152;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "explicabo";
                            maxAlternatives = 750686;
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("nemo"),
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                            }};
                        }};;
                        textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig() {{
                            languageHints = new String[]{{
                                add("doloribus"),
                                add("sapiente"),
                                add("architecto"),
                            }};
                            model = "mollitia";
                        }};;
                    }};;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            VideointelligenceVideosAnnotateResponse res = sdk.videos.videointelligenceVideosAnnotate(req, new VideointelligenceVideosAnnotateSecurity("molestiae", "velit") {{
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
