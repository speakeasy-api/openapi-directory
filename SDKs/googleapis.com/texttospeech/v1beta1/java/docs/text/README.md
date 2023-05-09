# text

### Available Operations

* [texttospeechTextSynthesize](#texttospeechtextsynthesize) - Synthesizes speech synchronously: receive results after all text input has been processed.

## texttospeechTextSynthesize

Synthesizes speech synchronously: receive results after all text input has been processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TexttospeechTextSynthesizeRequest;
import org.openapis.openapi.models.operations.TexttospeechTextSynthesizeResponse;
import org.openapis.openapi.models.operations.TexttospeechTextSynthesizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AudioConfig;
import org.openapis.openapi.models.shared.AudioConfigAudioEncodingEnum;
import org.openapis.openapi.models.shared.CustomVoiceParams;
import org.openapis.openapi.models.shared.CustomVoiceParamsReportedUsageEnum;
import org.openapis.openapi.models.shared.SynthesisInput;
import org.openapis.openapi.models.shared.SynthesizeSpeechRequest;
import org.openapis.openapi.models.shared.SynthesizeSpeechRequestEnableTimePointingEnum;
import org.openapis.openapi.models.shared.VoiceSelectionParams;
import org.openapis.openapi.models.shared.VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechTextSynthesizeRequest req = new TexttospeechTextSynthesizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                synthesizeSpeechRequest = new SynthesizeSpeechRequest() {{
                    audioConfig = new AudioConfig() {{
                        audioEncoding = AudioConfigAudioEncodingEnum.ALAW;
                        effectsProfileId = new String[]{{
                            add("in"),
                            add("corporis"),
                            add("iste"),
                        }};
                        pitch = 4370.32;
                        sampleRateHertz = 902349;
                        speakingRate = 6976.31;
                        volumeGainDb = 992.8;
                    }};;
                    enableTimePointing = new org.openapis.openapi.models.shared.SynthesizeSpeechRequestEnableTimePointingEnum[]{{
                        add(SynthesizeSpeechRequestEnableTimePointingEnum.SSML_MARK),
                    }};
                    input = new SynthesisInput() {{
                        ssml = "est";
                        text = "mollitia";
                    }};;
                    voice = new VoiceSelectionParams() {{
                        customVoice = new CustomVoiceParams() {{
                            model = "laborum";
                            reportedUsage = CustomVoiceParamsReportedUsageEnum.REPORTED_USAGE_UNSPECIFIED;
                        }};;
                        languageCode = "dolorem";
                        name = "Rose Rolfson";
                        ssmlGender = VoiceSelectionParamsSsmlGenderEnum.MALE;
                    }};;
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            TexttospeechTextSynthesizeResponse res = sdk.text.texttospeechTextSynthesize(req, new TexttospeechTextSynthesizeSecurity("dolorem", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.synthesizeSpeechResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
