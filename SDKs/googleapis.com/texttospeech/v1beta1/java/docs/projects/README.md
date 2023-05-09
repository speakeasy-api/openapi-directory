# projects

### Available Operations

* [texttospeechProjectsLocationsOperationsGet](#texttospeechprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [texttospeechProjectsLocationsOperationsList](#texttospeechprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [texttospeechProjectsLocationsSynthesizeLongAudio](#texttospeechprojectslocationssynthesizelongaudio) - Synthesizes long form text asynchronously.

## texttospeechProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechProjectsLocationsOperationsGetRequest req = new TexttospeechProjectsLocationsOperationsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            TexttospeechProjectsLocationsOperationsGetResponse res = sdk.projects.texttospeechProjectsLocationsOperationsGet(req, new TexttospeechProjectsLocationsOperationsGetSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## texttospeechProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechProjectsLocationsOperationsListRequest req = new TexttospeechProjectsLocationsOperationsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                filter = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            TexttospeechProjectsLocationsOperationsListResponse res = sdk.projects.texttospeechProjectsLocationsOperationsList(req, new TexttospeechProjectsLocationsOperationsListSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## texttospeechProjectsLocationsSynthesizeLongAudio

Synthesizes long form text asynchronously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsSynthesizeLongAudioRequest;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsSynthesizeLongAudioResponse;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsSynthesizeLongAudioSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AudioConfig;
import org.openapis.openapi.models.shared.AudioConfigAudioEncodingEnum;
import org.openapis.openapi.models.shared.CustomVoiceParams;
import org.openapis.openapi.models.shared.CustomVoiceParamsReportedUsageEnum;
import org.openapis.openapi.models.shared.SynthesisInput;
import org.openapis.openapi.models.shared.SynthesizeLongAudioRequest;
import org.openapis.openapi.models.shared.VoiceSelectionParams;
import org.openapis.openapi.models.shared.VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechProjectsLocationsSynthesizeLongAudioRequest req = new TexttospeechProjectsLocationsSynthesizeLongAudioRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                synthesizeLongAudioRequest = new SynthesizeLongAudioRequest() {{
                    audioConfig = new AudioConfig() {{
                        audioEncoding = AudioConfigAudioEncodingEnum.MP364_KBPS;
                        effectsProfileId = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                        pitch = 7206.33;
                        sampleRateHertz = 639921;
                        speakingRate = 5820.2;
                        volumeGainDb = 1433.53;
                    }};;
                    input = new SynthesisInput() {{
                        ssml = "deleniti";
                        text = "hic";
                    }};;
                    outputGcsUri = "optio";
                    voice = new VoiceSelectionParams() {{
                        customVoice = new CustomVoiceParams() {{
                            model = "totam";
                            reportedUsage = CustomVoiceParamsReportedUsageEnum.REPORTED_USAGE_UNSPECIFIED;
                        }};;
                        languageCode = "commodi";
                        name = "Pauline Dibbert";
                        ssmlGender = VoiceSelectionParamsSsmlGenderEnum.MALE;
                    }};;
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            TexttospeechProjectsLocationsSynthesizeLongAudioResponse res = sdk.projects.texttospeechProjectsLocationsSynthesizeLongAudio(req, new TexttospeechProjectsLocationsSynthesizeLongAudioSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
