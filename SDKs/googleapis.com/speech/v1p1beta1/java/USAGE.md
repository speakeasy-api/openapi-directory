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
                    name = "libero";
                }};
                queryParams = new SpeechOperationsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "ea";
                    alt = "json";
                    callback = "non";
                    fields = "necessitatibus";
                    key = "dolorem";
                    oauthToken = "quidem";
                    prettyPrint = true;
                    quotaUser = "accusamus";
                    uploadType = "veritatis";
                    uploadProtocol = "quam";
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