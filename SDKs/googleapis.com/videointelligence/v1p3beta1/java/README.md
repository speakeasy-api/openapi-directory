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
                    accessToken = "ipsum";
                    alt = "json";
                    callback = "aperiam";
                    fields = "aliquam";
                    key = "nam";
                    oauthToken = "non";
                    prettyPrint = false;
                    quotaUser = "laborum";
                    uploadType = "voluptatem";
                    uploadProtocol = "doloremque";
                }};
                request = new GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum[]() {{
                        add("PERSON_DETECTION"),
                        add("LABEL_DETECTION"),
                        add("EXPLICIT_CONTENT_DETECTION"),
                    }};
                    inputContent = "ipsa";
                    inputUri = "dolor";
                    locationId = "a";
                    outputUri = "incidunt";
                    videoContext = new GoogleCloudVideointelligenceV1p3beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig() {{
                            model = "at";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            model = "unde";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 72.199997;
                            labelDetectionMode = "SHOT_MODE";
                            model = "possimus";
                            stationaryCamera = true;
                            videoConfidenceThreshold = 43.099998;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig() {{
                            model = "velit";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = true;
                            includePoseLandmarks = true;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1p3beta1VideoSegment() {{
                                endTimeOffset = "molestiae";
                                startTimeOffset = "nisi";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig() {{
                            model = "aut";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]() {{
                                add(8791347978884802184),
                                add(3488383950655434238),
                            }};
                            diarizationSpeakerCount = 5177149215427167172;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = false;
                            enableWordConfidence = false;
                            filterProfanity = false;
                            languageCode = "quibusdam";
                            maxAlternatives = 641154090645080092;
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1p3beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("fugiat"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p3beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("aliquam"),
                                        add("harum"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig() {{
                            languageHints = new String[]() {{
                                add("pariatur"),
                            }};
                            model = "cupiditate";
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
