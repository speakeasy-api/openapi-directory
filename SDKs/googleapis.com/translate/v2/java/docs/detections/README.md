# detections

### Available Operations

* [languageDetectionsDetect](#languagedetectionsdetect) - Detects the language of text within a request.
* [languageDetectionsList](#languagedetectionslist) - Detects the language of text within a request.

## languageDetectionsDetect

Detects the language of text within a request.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                detectLanguageRequest = new DetectLanguageRequest() {{
                    q = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                }};;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                bearerToken = "iusto";
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                pp = false;
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            LanguageDetectionsDetectResponse res = sdk.detections.languageDetectionsDetect(req, new LanguageDetectionsDetectSecurity() {{
                option1 = new LanguageDetectionsDetectSecurityOption1("deserunt", "perferendis") {{
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

## languageDetectionsList

Detects the language of text within a request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDetectionsListRequest;
import org.openapis.openapi.models.operations.LanguageDetectionsListResponse;
import org.openapis.openapi.models.operations.LanguageDetectionsListSecurity;
import org.openapis.openapi.models.operations.LanguageDetectionsListSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDetectionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDetectionsListRequest req = new LanguageDetectionsListRequest(                new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                bearerToken = "at";
                callback = "maiores";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                pp = false;
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            LanguageDetectionsListResponse res = sdk.detections.languageDetectionsList(req, new LanguageDetectionsListSecurity() {{
                option1 = new LanguageDetectionsListSecurityOption1("dolorum", "dicta") {{
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
