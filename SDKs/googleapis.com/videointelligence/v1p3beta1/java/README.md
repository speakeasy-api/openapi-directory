# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum[]() {{
                        add("TEXT_DETECTION"),
                        add("LABEL_DETECTION"),
                        add("EXPLICIT_CONTENT_DETECTION"),
                    }};
                    inputContent = "et";
                    inputUri = "ut";
                    locationId = "dolorem";
                    outputUri = "et";
                    videoContext = new GoogleCloudVideointelligenceV1p3beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig() {{
                            model = "voluptate";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            model = "totam";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 80.199997;
                            labelDetectionMode = "FRAME_MODE";
                            model = "vel";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 91.099998;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig() {{
                            model = "aspernatur";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1p3beta1VideoSegment() {{
                                endTimeOffset = "est";
                                startTimeOffset = "aut";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p3beta1VideoSegment() {{
                                endTimeOffset = "odit";
                                startTimeOffset = "non";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p3beta1VideoSegment() {{
                                endTimeOffset = "voluptas";
                                startTimeOffset = "omnis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig() {{
                            model = "aut";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]() {{
                                add(5558237345453186302),
                            }};
                            diarizationSpeakerCount = 7845762441295307478;
                            enableAutomaticPunctuation = true;
                            enableSpeakerDiarization = true;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "qui";
                            maxAlternatives = 388440063886460141;
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1p3beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("eveniet"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p3beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("sint"),
                                        add("inventore"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig() {{
                            languageHints = new String[]() {{
                                add("exercitationem"),
                                add("aut"),
                                add("reprehenderit"),
                            }};
                            model = "tempore";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
