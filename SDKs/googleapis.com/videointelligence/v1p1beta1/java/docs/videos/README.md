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
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceVideosAnnotateRequest req = new VideointelligenceVideosAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVideointelligenceV1p1beta1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum[]{{
                        add(GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum.LABEL_DETECTION),
                        add(GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum.TEXT_DETECTION),
                        add(GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum.SHOT_CHANGE_DETECTION),
                    }};
                    inputContent = "natus";
                    inputUri = "laboriosam";
                    locationId = "hic";
                    outputUri = "saepe";
                    videoContext = new GoogleCloudVideointelligenceV1p1beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig() {{
                            model = "fuga";
                        }};;
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "in";
                        }};;
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 3595.08;
                            labelDetectionMode = GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum.FRAME_MODE;
                            model = "iure";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 9023.49;
                        }};;
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig() {{
                            model = "quidem";
                        }};;
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};;
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1p1beta1VideoSegment() {{
                                endTimeOffset = "ipsa";
                                startTimeOffset = "reiciendis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig() {{
                            model = "est";
                        }};;
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig() {{
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
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1p1beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("nemo"),
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p1beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                            }};
                        }};;
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig() {{
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
