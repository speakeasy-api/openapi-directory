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

            TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest req = new TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest() {{
                security = new TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams() {{
                    parent = "dolore";
                }};
                queryParams = new TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "debitis";
                    alt = "json";
                    callback = "dolores";
                    fields = "impedit";
                    key = "doloribus";
                    oauthToken = "recusandae";
                    prettyPrint = false;
                    quotaUser = "minima";
                    uploadType = "cupiditate";
                    uploadProtocol = "pariatur";
                }};
                request = new SynthesizeLongAudioRequest() {{
                    audioConfig = new AudioConfig() {{
                        audioEncoding = "LINEAR16";
                        effectsProfileId = new String[]() {{
                            add("ex"),
                            add("cumque"),
                            add("aperiam"),
                        }};
                        pitch = 60.200001;
                        sampleRateHertz = 7117043420569300192;
                        speakingRate = 73.199997;
                        volumeGainDb = 36.200001;
                    }};
                    input = new SynthesisInput() {{
                        ssml = "officiis";
                        text = "pariatur";
                    }};
                    outputGcsUri = "natus";
                    voice = new VoiceSelectionParams() {{
                        customVoice = new CustomVoiceParams() {{
                            model = "pariatur";
                            reportedUsage = "REALTIME";
                        }};
                        languageCode = "ea";
                        name = "non";
                        ssmlGender = "FEMALE";
                    }};
                }};
            }};

            TexttospeechProjectsLocationsVoicesSynthesizeLongAudioResponse res = sdk.projects.texttospeechProjectsLocationsVoicesSynthesizeLongAudio(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->