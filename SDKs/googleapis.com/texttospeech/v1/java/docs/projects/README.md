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

            TexttospeechProjectsLocationsOperationsGetRequest req = new TexttospeechProjectsLocationsOperationsGetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            TexttospeechProjectsLocationsOperationsGetResponse res = sdk.projects.texttospeechProjectsLocationsOperationsGet(req, new TexttospeechProjectsLocationsOperationsGetSecurity("esse", "ipsum") {{
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

            TexttospeechProjectsLocationsOperationsListRequest req = new TexttospeechProjectsLocationsOperationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                filter = "iste";
                key = "dolor";
                oauthToken = "natus";
                pageSize = 386489L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            TexttospeechProjectsLocationsOperationsListResponse res = sdk.projects.texttospeechProjectsLocationsOperationsList(req, new TexttospeechProjectsLocationsOperationsListSecurity("corporis", "iste") {{
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

            TexttospeechProjectsLocationsSynthesizeLongAudioRequest req = new TexttospeechProjectsLocationsSynthesizeLongAudioRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                synthesizeLongAudioRequest = new SynthesizeLongAudioRequest() {{
                    audioConfig = new AudioConfig() {{
                        audioEncoding = AudioConfigAudioEncodingEnum.MULAW;
                        effectsProfileId = new String[]{{
                            add("ipsa"),
                        }};
                        pitch = 9698.1;
                        sampleRateHertz = 666767;
                        speakingRate = 6531.4;
                        volumeGainDb = 6706.38;
                    }};;
                    input = new SynthesisInput() {{
                        ssml = "dolores";
                        text = "dolorem";
                    }};;
                    outputGcsUri = "corporis";
                    voice = new VoiceSelectionParams() {{
                        customVoice = new CustomVoiceParams() {{
                            model = "explicabo";
                            reportedUsage = CustomVoiceParamsReportedUsageEnum.OFFLINE;
                        }};;
                        languageCode = "enim";
                        name = "Corey Hane III";
                        ssmlGender = VoiceSelectionParamsSsmlGenderEnum.FEMALE;
                    }};;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            TexttospeechProjectsLocationsSynthesizeLongAudioResponse res = sdk.projects.texttospeechProjectsLocationsSynthesizeLongAudio(req, new TexttospeechProjectsLocationsSynthesizeLongAudioSecurity("occaecati", "numquam") {{
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
