# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateSecurity;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateQueryParams;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateRequest;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateResponse;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;
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
                request = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[]{{
                        add("EXPLICIT_CONTENT_DETECTION"),
                        add("FACE_DETECTION"),
                        add("SHOT_CHANGE_DETECTION"),
                    }};
                    inputContent = "debitis";
                    inputUri = "ipsa";
                    locationId = "delectus";
                    outputUri = "tempora";
                    videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig() {{
                            model = "suscipit";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "molestiae";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {{
                            frameConfidenceThreshold = 7917.25;
                            labelDetectionMode = "SHOT_AND_FRAME_MODE";
                            model = "voluptatum";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 4799.77;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig() {{
                            model = "excepturi";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "recusandae";
                                startTimeOffset = "temporibus";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "ab";
                                startTimeOffset = "quis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig() {{
                            model = "veritatis";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig() {{
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
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("maiores"),
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("totam"),
                                        add("porro"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig() {{
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### videos

* `videointelligenceVideosAnnotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
