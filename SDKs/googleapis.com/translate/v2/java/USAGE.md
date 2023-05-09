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