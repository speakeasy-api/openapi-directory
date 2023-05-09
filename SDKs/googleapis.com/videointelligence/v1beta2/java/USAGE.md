<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVideointelligenceV1beta2AnnotateVideoRequest = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[]{{
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.OBJECT_TRACKING),
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.LOGO_RECOGNITION),
                        add(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum.TEXT_DETECTION),
                    }};
                    inputContent = "nulla";
                    inputUri = "corrupti";
                    locationId = "illum";
                    outputUri = "vel";
                    videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig() {{
                            model = "error";
                        }};;
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "deserunt";
                        }};;
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {{
                            frameConfidenceThreshold = 3843.82;
                            labelDetectionMode = GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum.SHOT_MODE;
                            model = "magnam";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 8917.73;
                        }};;
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig() {{
                            model = "ipsa";
                        }};;
                        personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};;
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "tempora";
                                startTimeOffset = "suscipit";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "molestiae";
                                startTimeOffset = "minus";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "placeat";
                                startTimeOffset = "voluptatum";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "iusto";
                                startTimeOffset = "excepturi";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig() {{
                            model = "nisi";
                        }};;
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]{{
                                add(836079),
                                add(71036),
                                add(337396),
                                add(87129),
                            }};
                            diarizationSpeakerCount = 648172;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "perferendis";
                            maxAlternatives = 368241;
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                        add("esse"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("officia"),
                                        add("occaecati"),
                                        add("fugit"),
                                    }};
                                }}),
                            }};
                        }};;
                        textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig() {{
                            languageHints = new String[]{{
                                add("hic"),
                                add("optio"),
                                add("totam"),
                            }};
                            model = "beatae";
                        }};;
                    }};;
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            VideointelligenceVideosAnnotateResponse res = sdk.videos.videointelligenceVideosAnnotate(req, new VideointelligenceVideosAnnotateSecurity("aspernatur", "perferendis") {{
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
<!-- End SDK Example Usage -->