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

            TexttospeechOperationsCancelRequest req = new TexttospeechOperationsCancelRequest() {{
                security = new TexttospeechOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TexttospeechOperationsCancelPathParams() {{
                    name = "aut";
                }};
                queryParams = new TexttospeechOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eos";
                    alt = "json";
                    callback = "sunt";
                    fields = "natus";
                    key = "illum";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "veritatis";
                    uploadType = "quisquam";
                    uploadProtocol = "quis";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("repudiandae", "voluptatibus");
                    put("animi", "aut");
                }};
            }};

            TexttospeechOperationsCancelResponse res = sdk.operations.texttospeechOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->