# translations

### Available Operations

* [languageTranslationsList](#languagetranslationslist) - Translates input text, returning translated text.
* [languageTranslationsTranslate](#languagetranslationstranslate) - Translates input text, returning translated text.

## languageTranslationsList

Translates input text, returning translated text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageTranslationsListFormatEnum;
import org.openapis.openapi.models.operations.LanguageTranslationsListRequest;
import org.openapis.openapi.models.operations.LanguageTranslationsListResponse;
import org.openapis.openapi.models.operations.LanguageTranslationsListSecurity;
import org.openapis.openapi.models.operations.LanguageTranslationsListSecurityOption1;
import org.openapis.openapi.models.operations.LanguageTranslationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageTranslationsListRequest req = new LanguageTranslationsListRequest(                new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }}, "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                bearerToken = "sed";
                callback = "iste";
                cid = new String[]{{
                    add("natus"),
                }};
                fields = "laboriosam";
                format = LanguageTranslationsListFormatEnum.TEXT;
                key = "saepe";
                model = "fuga";
                oauthToken = "in";
                pp = false;
                prettyPrint = false;
                quotaUser = "corporis";
                source = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            LanguageTranslationsListResponse res = sdk.translations.languageTranslationsList(req, new LanguageTranslationsListSecurity() {{
                option1 = new LanguageTranslationsListSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.translationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageTranslationsTranslate

Translates input text, returning translated text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageTranslationsTranslateRequest;
import org.openapis.openapi.models.operations.LanguageTranslationsTranslateResponse;
import org.openapis.openapi.models.operations.LanguageTranslationsTranslateSecurity;
import org.openapis.openapi.models.operations.LanguageTranslationsTranslateSecurityOption1;
import org.openapis.openapi.models.operations.LanguageTranslationsTranslateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TranslateTextRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageTranslationsTranslateRequest req = new LanguageTranslationsTranslateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                translateTextRequest = new TranslateTextRequest() {{
                    format = "reiciendis";
                    model = "est";
                    q = new String[]{{
                        add("laborum"),
                        add("dolores"),
                        add("dolorem"),
                    }};
                    source = "corporis";
                    target = "explicabo";
                }};;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                bearerToken = "omnis";
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                pp = false;
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            LanguageTranslationsTranslateResponse res = sdk.translations.languageTranslationsTranslate(req, new LanguageTranslationsTranslateSecurity() {{
                option1 = new LanguageTranslationsTranslateSecurityOption1("sapiente", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.translationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
