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
                    accessToken = "sed";
                    alt = "proto";
                    callback = "laborum";
                    fields = "iusto";
                    key = "architecto";
                    oauthToken = "dolores";
                    prettyPrint = true;
                    quotaUser = "sit";
                    uploadType = "excepturi";
                    uploadProtocol = "laborum";
                }};
                request = new GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum[]() {{
                        add("OBJECT_TRACKING"),
                    }};
                    inputContent = "consequatur";
                    inputUri = "ut";
                    locationId = "omnis";
                    outputUri = "similique";
                    videoContext = new GoogleCloudVideointelligenceV1p2beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig() {{
                            model = "voluptates";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            model = "quis";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 16.200001;
                            labelDetectionMode = "LABEL_DETECTION_MODE_UNSPECIFIED";
                            model = "aspernatur";
                            stationaryCamera = true;
                            videoConfidenceThreshold = 1.100000;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig() {{
                            model = "a";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "sed";
                                startTimeOffset = "adipisci";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig() {{
                            model = "enim";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]() {{
                                add(46104454455134938),
                                add(7966862778376804068),
                            }};
                            diarizationSpeakerCount = 8263602232989710895;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "nemo";
                            maxAlternatives = 5915771132550325402;
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("non"),
                                        add("corrupti"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig() {{
                            languageHints = new String[]() {{
                                add("molestias"),
                                add("aspernatur"),
                            }};
                            model = "odio";
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
