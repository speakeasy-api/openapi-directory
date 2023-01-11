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

            SpeechOperationsGetRequest req = new SpeechOperationsGetRequest() {{
                security = new SpeechOperationsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SpeechOperationsGetPathParams() {{
                    name = "autem";
                }};
                queryParams = new SpeechOperationsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "tenetur";
                    alt = "json";
                    callback = "qui";
                    fields = "est";
                    key = "est";
                    oauthToken = "mollitia";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "soluta";
                    uploadProtocol = "deleniti";
                }};
            }};

            SpeechOperationsGetResponse res = sdk.operations.speechOperationsGet(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->