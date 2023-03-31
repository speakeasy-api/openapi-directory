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

import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurityOption2;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectSecurity;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectQueryParams;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectRequest;
import org.openapis.openapi.models.operations.LanguageDetectionsDetectResponse;
import org.openapis.openapi.models.shared.DetectLanguageRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDetectionsDetectRequest req = new LanguageDetectionsDetectRequest() {{
                security = new LanguageDetectionsDetectSecurity() {{
                    option1 = new LanguageDetectionsDetectSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new LanguageDetectionsDetectQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    bearerToken = "quibusdam";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pp = false;
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new DetectLanguageRequest() {{
                    q = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                }};
            }};            

            LanguageDetectionsDetectResponse res = sdk.detections.languageDetectionsDetect(req);

            if (res.detectionsListResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### detections

* `languageDetectionsDetect` - Detects the language of text within a request.
* `languageDetectionsList` - Detects the language of text within a request.

### languages

* `languageLanguagesList` - Returns a list of supported languages for translation.

### translations

* `languageTranslationsList` - Translates input text, returning translated text.
* `languageTranslationsTranslate` - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
