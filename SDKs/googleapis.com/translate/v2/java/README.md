# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectRequest;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectResponse;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurity;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DetectLanguageRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDetectionsDetectRequest req = new LanguageDetectionsDetectRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                detectLanguageRequest = new DetectLanguageRequest() {{
                    q = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                bearerToken = "illum";
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                pp = false;
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            LanguageDetectionsDetectResponse res = sdk.detections.languageDetectionsDetect(req, new LanguageDetectionsDetectSecurity() {{
                option1 = new LanguageDetectionsDetectSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.detectionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [detections](docs/detections/README.md)

* [languageDetectionsDetect](docs/detections/README.md#languagedetectionsdetect) - Detects the language of text within a request.
* [languageDetectionsList](docs/detections/README.md#languagedetectionslist) - Detects the language of text within a request.

### [languages](docs/languages/README.md)

* [languageLanguagesList](docs/languages/README.md#languagelanguageslist) - Returns a list of supported languages for translation.

### [translations](docs/translations/README.md)

* [languageTranslationsList](docs/translations/README.md#languagetranslationslist) - Translates input text, returning translated text.
* [languageTranslationsTranslate](docs/translations/README.md#languagetranslationstranslate) - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
