# i18nLanguages

### Available Operations

* [youtubeI18nLanguagesList](#youtubei18nlanguageslist) - Retrieves a list of resources, possibly filtered.

## youtubeI18nLanguagesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListRequest;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListResponse;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListSecurity;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeI18nLanguagesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeI18nLanguagesListRequest req = new YoutubeI18nLanguagesListRequest(                new String[]{{
                                add("maiores"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                fields = "esse";
                hl = "nemo";
                key = "reprehenderit";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "sint";
                uploadProtocol = "accusamus";
            }};            

            YoutubeI18nLanguagesListResponse res = sdk.i18nLanguages.youtubeI18nLanguagesList(req, new YoutubeI18nLanguagesListSecurity() {{
                option1 = new YoutubeI18nLanguagesListSecurityOption1("impedit", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.i18nLanguageListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
