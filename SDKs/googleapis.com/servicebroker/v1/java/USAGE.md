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

            ServicebrokerGetIamPolicyRequest req = new ServicebrokerGetIamPolicyRequest() {{
                security = new ServicebrokerGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicebrokerGetIamPolicyPathParams() {{
                    resource = "dolores";
                }};
                queryParams = new ServicebrokerGetIamPolicyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "inventore";
                    alt = "proto";
                    callback = "ipsum";
                    fields = "consequatur";
                    key = "ut";
                    oauthToken = "quibusdam";
                    optionsRequestedPolicyVersion = 8552018676448470401;
                    prettyPrint = false;
                    quotaUser = "et";
                    uploadType = "nobis";
                    uploadProtocol = "quia";
                }};
            }};

            ServicebrokerGetIamPolicyResponse res = sdk.v1.servicebrokerGetIamPolicy(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->