# voices

### Available Operations

* [texttospeechVoicesList](#texttospeechvoiceslist) - Returns a list of Voice supported for synthesis.

## texttospeechVoicesList

Returns a list of Voice supported for synthesis.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TexttospeechVoicesListRequest;
import org.openapis.openapi.models.operations.TexttospeechVoicesListResponse;
import org.openapis.openapi.models.operations.TexttospeechVoicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechVoicesListRequest req = new TexttospeechVoicesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                languageCode = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            TexttospeechVoicesListResponse res = sdk.voices.texttospeechVoicesList(req, new TexttospeechVoicesListSecurity("quis", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVoicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
