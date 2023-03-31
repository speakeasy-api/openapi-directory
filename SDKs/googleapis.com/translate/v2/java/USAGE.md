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