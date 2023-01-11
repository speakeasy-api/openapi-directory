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
                    accessToken = "suscipit";
                    alt = "media";
                    callback = "magnam";
                    fields = "praesentium";
                    key = "qui";
                    oauthToken = "culpa";
                    prettyPrint = true;
                    quotaUser = "quos";
                    uploadType = "nulla";
                    uploadProtocol = "quo";
                }};
                request = new GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest() {{
                    features = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum[]() {{
                        add("OBJECT_TRACKING"),
                    }};
                    inputContent = "sit";
                    inputUri = "cupiditate";
                    locationId = "repellendus";
                    outputUri = "necessitatibus";
                    videoContext = new GoogleCloudVideointelligenceV1p1beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig() {{
                            model = "omnis";
                        }};
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = false;
                            model = "eligendi";
                        }};
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 94.099998;
                            labelDetectionMode = "SHOT_AND_FRAME_MODE";
                            model = "qui";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 73.199997;
                        }};
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig() {{
                            model = "consequatur";
                        }};
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig() {{
                            includeAttributes = true;
                            includeBoundingBoxes = true;
                            includePoseLandmarks = true;
                        }};
                        segments = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment[]() {{
                            add(new GoogleCloudVideointelligenceV1p1beta1VideoSegment() {{
                                endTimeOffset = "culpa";
                                startTimeOffset = "numquam";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p1beta1VideoSegment() {{
                                endTimeOffset = "rerum";
                                startTimeOffset = "aut";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p1beta1VideoSegment() {{
                                endTimeOffset = "iusto";
                                startTimeOffset = "rerum";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig() {{
                            model = "earum";
                        }};
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig() {{
                            audioTracks = new Integer[]() {{
                                add(3911963970231140860),
                            }};
                            diarizationSpeakerCount = 1609680529832252322;
                            enableAutomaticPunctuation = false;
                            enableSpeakerDiarization = true;
                            enableWordConfidence = false;
                            filterProfanity = true;
                            languageCode = "similique";
                            maxAlternatives = 3047403304236475511;
                            speechContexts = new openapisdk.models.shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext[]() {{
                                add(new GoogleCloudVideointelligenceV1p1beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("magni"),
                                        add("numquam"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p1beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("ipsa"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p1beta1SpeechContext() {{
                                    phrases = new String[]() {{
                                        add("vel"),
                                        add("sit"),
                                    }};
                                }}),
                            }};
                        }};
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig() {{
                            languageHints = new String[]() {{
                                add("iste"),
                            }};
                            model = "unde";
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