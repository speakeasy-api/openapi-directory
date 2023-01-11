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

            IamIamPoliciesLintPolicyRequest req = new IamIamPoliciesLintPolicyRequest() {{
                security = new IamIamPoliciesLintPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IamIamPoliciesLintPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "json";
                    callback = "maiores";
                    fields = "reprehenderit";
                    key = "dolorum";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "illum";
                    uploadProtocol = "aspernatur";
                }};
                request = new LintPolicyRequest() {{
                    condition = new Expr() {{
                        description = "nesciunt";
                        expression = "cumque";
                        location = "vel";
                        title = "quasi";
                    }};
                    fullResourceName = "corrupti";
                }};
            }};

            IamIamPoliciesLintPolicyResponse res = sdk.iamPolicies.iamIamPoliciesLintPolicy(req);

            if (res.lintPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->