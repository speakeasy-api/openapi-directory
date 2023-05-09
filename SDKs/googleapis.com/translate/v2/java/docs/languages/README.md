# languages

### Available Operations

* [languageLanguagesList](#languagelanguageslist) - Returns a list of supported languages for translation.

## languageLanguagesList

Returns a list of supported languages for translation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageLanguagesListRequest;
import org.openapis.openapi.models.operations.LanguageLanguagesListResponse;
import org.openapis.openapi.models.operations.LanguageLanguagesListSecurity;
import org.openapis.openapi.models.operations.LanguageLanguagesListSecurityOption1;
import org.openapis.openapi.models.operations.LanguageLanguagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageLanguagesListRequest req = new LanguageLanguagesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                bearerToken = "fugit";
                callback = "deleniti";
                fields = "hic";
                key = "optio";
                model = "totam";
                oauthToken = "beatae";
                pp = false;
                prettyPrint = false;
                quotaUser = "commodi";
                target = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            LanguageLanguagesListResponse res = sdk.languages.languageLanguagesList(req, new LanguageLanguagesListSecurity() {{
                option1 = new LanguageLanguagesListSecurityOption1("impedit", "cum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.languagesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
