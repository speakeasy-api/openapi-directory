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
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                languageCode = "maiores";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "dolore";
                uploadProtocol = "iusto";
            }};            

            TexttospeechVoicesListResponse res = sdk.voices.texttospeechVoicesList(req, new TexttospeechVoicesListSecurity("dicta", "harum") {{
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
