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
import org.openapis.openapi.models.shared.VoiceSelectionParams;
import org.openapis.openapi.models.shared.VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechTextSynthesizeRequest req = new TexttospeechTextSynthesizeRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                synthesizeSpeechRequest = new SynthesizeSpeechRequest() {{
                    audioConfig = new AudioConfig() {{
                        audioEncoding = AudioConfigAudioEncodingEnum.MP3;
                        effectsProfileId = new String[]{{
                            add("velit"),
                            add("error"),
                        }};
                        pitch = 1589.69;
                        sampleRateHertz = 338007;
                        speakingRate = 1103.75;
                        volumeGainDb = 6747.52;
                    }};;
                    input = new SynthesisInput() {{
                        ssml = "animi";
                        text = "enim";
                    }};;
                    voice = new VoiceSelectionParams() {{
                        customVoice = new CustomVoiceParams() {{
                            model = "odit";
                            reportedUsage = CustomVoiceParamsReportedUsageEnum.OFFLINE;
                        }};;
                        languageCode = "sequi";
                        name = "Vernon Ondricka Sr.";
                        ssmlGender = VoiceSelectionParamsSsmlGenderEnum.FEMALE;
                    }};;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            TexttospeechTextSynthesizeResponse res = sdk.text.texttospeechTextSynthesize(req, new TexttospeechTextSynthesizeSecurity("ipsa", "omnis") {{
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
