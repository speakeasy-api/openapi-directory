<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    accessToken = "dolore";
                    alt = "media";
                    bearerToken = "eos";
                    callback = "similique";
                    fields = "vel";
                    key = "est";
                    oauthToken = "autem";
                    pp = true;
                    prettyPrint = true;
                    quotaUser = "hic";
                    uploadType = "nulla";
                    uploadProtocol = "itaque";
                }};
                request = new DetectLanguageRequest() {{
                    q = new String[]() {{
                        add("autem"),
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