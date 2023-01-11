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
                request = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[]() {{
                        add("PERSON_DETECTION"),
                        add("LOGO_RECOGNITION"),
                        add("SHOT_CHANGE_DETECTION"),
                    }};
                    inputContent = "et";
                    inputUri = "ut";
                    locationId = "dolorem";
                    outputUri = "et";
                    videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig() {{
                            model = "voluptate";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            model = "totam";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {{
                            frameConfidenceThreshold = 80.199997;
                            labelDetectionMode = "FRAME_MODE";
                            model = "vel";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 91.099998;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig() {{
                            model = "aspernatur";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "est";
                                startTimeOffset = "aut";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "odit";
                                startTimeOffset = "non";
                            }}),
                            add(new GoogleCloudVideointelligenceV1beta2VideoSegment() {{
                                endTimeOffset = "voluptas";
                                startTimeOffset = "omnis";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig() {{
                            model = "aut";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig() {{
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
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1beta2SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("eveniet"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1beta2SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("sint"),
                                        add("inventore"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig() {{
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