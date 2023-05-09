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
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateRequest;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateResponse;
import org.openapis.openapi.models.operations.VideointelligenceVideosAnnotateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoContext;
import org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceVideosAnnotateRequest req = new VideointelligenceVideosAnnotateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest() {{
                    features = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum[]{{
                        add(GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.OBJECT_TRACKING),
                        add(GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.LOGO_RECOGNITION),
                        add(GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum.TEXT_DETECTION),
                    }};
                    inputContent = "nulla";
                    inputUri = "corrupti";
                    locationId = "illum";
                    outputUri = "vel";
                    videoContext = new GoogleCloudVideointelligenceV1p2beta1VideoContext() {{
                        explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig() {{
                            model = "error";
                        }};;
                        faceDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            model = "deserunt";
                        }};;
                        labelDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig() {{
                            frameConfidenceThreshold = 3843.82;
                            labelDetectionMode = GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum.SHOT_MODE;
                            model = "magnam";
                            stationaryCamera = false;
                            videoConfidenceThreshold = 8917.73;
                        }};;
                        objectTrackingConfig = new GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig() {{
                            model = "ipsa";
                        }};;
                        personDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig() {{
                            includeAttributes = false;
                            includeBoundingBoxes = false;
                            includePoseLandmarks = false;
                        }};;
                        segments = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment[]{{
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "tempora";
                                startTimeOffset = "suscipit";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "molestiae";
                                startTimeOffset = "minus";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "placeat";
                                startTimeOffset = "voluptatum";
                            }}),
                            add(new GoogleCloudVideointelligenceV1p2beta1VideoSegment() {{
                                endTimeOffset = "iusto";
                                startTimeOffset = "excepturi";
                            }}),
                        }};
                        shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig() {{
                            model = "nisi";
                        }};;
                        speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig() {{
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
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext[]{{
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                        add("esse"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                }}),
                                add(new GoogleCloudVideointelligenceV1p2beta1SpeechContext() {{
                                    phrases = new String[]{{
                                        add("officia"),
                                        add("occaecati"),
                                        add("fugit"),
                                    }};
                                }}),
                            }};
                        }};;
                        textDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig() {{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [videos](docs/videos/README.md)

* [videointelligenceVideosAnnotate](docs/videos/README.md#videointelligencevideosannotate) - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
