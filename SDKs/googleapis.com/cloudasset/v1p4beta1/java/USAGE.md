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

            CloudassetAnalyzeIamPolicyRequest req = new CloudassetAnalyzeIamPolicyRequest() {{
                security = new CloudassetAnalyzeIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetAnalyzeIamPolicyPathParams() {{
                    parent = "occaecati";
                }};
                queryParams = new CloudassetAnalyzeIamPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "est";
                    alt = "json";
                    analysisQueryAccessSelectorPermissions = new String[]() {{
                        add("et"),
                    }};
                    analysisQueryAccessSelectorRoles = new String[]() {{
                        add("molestias"),
                        add("aut"),
                        add("qui"),
                    }};
                    analysisQueryIdentitySelectorIdentity = "consequuntur";
                    analysisQueryResourceSelectorFullResourceName = "exercitationem";
                    callback = "hic";
                    fields = "doloribus";
                    key = "porro";
                    oauthToken = "est";
                    optionsAnalyzeServiceAccountImpersonation = true;
                    optionsExecutionTimeout = "eum";
                    optionsExpandGroups = true;
                    optionsExpandResources = true;
                    optionsExpandRoles = true;
                    optionsOutputGroupEdges = false;
                    optionsOutputResourceEdges = false;
                    prettyPrint = true;
                    quotaUser = "qui";
                    uploadType = "neque";
                    uploadProtocol = "officia";
                }};
            }};

            CloudassetAnalyzeIamPolicyResponse res = sdk.v1p4beta1.cloudassetAnalyzeIamPolicy(req);

            if (res.analyzeIamPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->