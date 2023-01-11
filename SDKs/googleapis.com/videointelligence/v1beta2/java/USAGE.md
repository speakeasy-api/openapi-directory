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
                    dollarXgafv = "2";
                    accessToken = "consequuntur";
                    alt = "proto";
                    callback = "quo";
                    fields = "et";
                    key = "et";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "qui";
                    uploadType = "consequuntur";
                    uploadProtocol = "amet";
                }};
                request = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[]() {{
                        add("LOGO_RECOGNITION"),
                        add("EXPLICIT_CONTENT_DETECTION"),
                        add("LOGO_RECOGNITION"),
                    }};
                    inputContent = "accusantium";
                    inputUri = "molestiae";
                    locationId = "dolor";
                    outputUri = "saepe";
                    videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig() {{
                            model = "ratione";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = false;
                            model = "quae";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {{
                            frameConfidenceThreshold = 72.099998;
                            labelDetectionMode = "SHOT_MODE";
                            model = "labore";
                            stationaryCamera = true;
                            videoConfidenceThreshold = 16.200001;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig() {{
                            model = "dicta";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            includePoseLandmarks = true;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "velit";
                                startTimeOffset = "aliquid";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "laboriosam";
                                startTimeOffset = "in";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "nobis";
                                startTimeOffset = "aliquid";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig() {{
                            model = "tempore";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]() {{
                                add(399654448669487226),
                            }};
                            diarizationSpeakerCount = 1556142626528718315;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = true;
                            enableWordConfidence = false;
                            filterProfanity = true;
                            languageCode = "vitae";
                            maxAlternatives = 7252070358714235458;
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("ullam"),
                                        add("et"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig() {{
                            languageHints = new String[]() {{
                                add("ipsam"),
                                add("esse"),
                            }};
                            model = "sequi";
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