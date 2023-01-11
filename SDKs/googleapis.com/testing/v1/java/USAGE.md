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

            TestingApplicationDetailServiceGetApkDetailsRequest req = new TestingApplicationDetailServiceGetApkDetailsRequest() {{
                security = new TestingApplicationDetailServiceGetApkDetailsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new TestingApplicationDetailServiceGetApkDetailsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "eos";
                    alt = "media";
                    callback = "minus";
                    fields = "at";
                    key = "velit";
                    oauthToken = "nisi";
                    prettyPrint = true;
                    quotaUser = "voluptatibus";
                    uploadType = "nemo";
                    uploadProtocol = "quaerat";
                }};
                request = new FileReference() {{
                    gcsPath = "fugit";
                }};
            }};

            TestingApplicationDetailServiceGetApkDetailsResponse res = sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req);

            if (res.getApkDetailsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->