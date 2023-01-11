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

            IapGetIamPolicyRequest req = new IapGetIamPolicyRequest() {{
                security = new IapGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IapGetIamPolicyPathParams() {{
                    resource = "est";
                }};
                queryParams = new IapGetIamPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "laudantium";
                    alt = "json";
                    callback = "enim";
                    fields = "et";
                    key = "quidem";
                    oauthToken = "est";
                    prettyPrint = false;
                    quotaUser = "velit";
                    uploadType = "quod";
                    uploadProtocol = "enim";
                }};
                request = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 7600579672508501363;
                    }};
                }};
            }};

            IapGetIamPolicyResponse res = sdk.v1beta1.iapGetIamPolicy(req);

            if (res.policy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->