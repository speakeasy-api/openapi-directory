<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateSecurity;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateQueryParams;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateRequest;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateResponse;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceVideosAnnotateRequest req = new VideointelligenceVideosAnnotateRequest() {{
                security = new VideointelligenceVideosAnnotateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new VideointelligenceVideosAnnotateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum[]{{
                        add("EXPLICIT_CONTENT_DETECTION"),
                        add("FACE_DETECTION"),
                        add("SHOT_CHANGE_DETECTION"),
                    }};
                    inputContent = "debitis";
                    inputUri = "ipsa";
                    locationId = "delectus";
                    outputUri = "tempora";
                    videoContext = new GoogleCloudVideointelligenceV1p2beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig() {{
                            model = "suscipit";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "molestiae";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 7917.25;
                            labelDetectionMode = "SHOT_AND_FRAME_MODE";
                            model = "voluptatum";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 4799.77;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig() {{
                            model = "excepturi";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "recusandae";
                                startTimeOffset = "temporibus";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "ab";
                                startTimeOffset = "quis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig() {{
                            model = "veritatis";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]{{
                                add(20218),
                                add(368241),
                                add(832620),
                            }};
                            diarizationSpeakerCount = 957156;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "quo";
                            maxAlternatives = 140350;
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("maiores"),
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("totam"),
                                        add("porro"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig() {{
                            languageHints = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            model = "modi";
                        }};
                    }};
                }};
            }};            

            VideointelligenceVideosAnnotateResponse res = sdk.videos.videointelligenceVideosAnnotate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->