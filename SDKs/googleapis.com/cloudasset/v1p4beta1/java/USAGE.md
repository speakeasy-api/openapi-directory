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
                    parent = "sit";
                }};
                queryParams = new CloudassetAnalyzeIamPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    analysisQueryAccessSelectorPermissions = new String[]() {{
                        add("dolor"),
                        add("expedita"),
                        add("voluptas"),
                    }};
                    analysisQueryAccessSelectorRoles = new String[]() {{
                        add("et"),
                    }};
                    analysisQueryIdentitySelectorIdentity = "nihil";
                    analysisQueryResourceSelectorFullResourceName = "rerum";
                    callback = "dicta";
                    fields = "debitis";
                    key = "voluptatum";
                    oauthToken = "et";
                    optionsAnalyzeServiceAccountImpersonation = false;
                    optionsExecutionTimeout = "dolorem";
                    optionsExpandGroups = false;
                    optionsExpandResources = false;
                    optionsExpandRoles = true;
                    optionsOutputGroupEdges = true;
                    optionsOutputResourceEdges = true;
                    prettyPrint = true;
                    quotaUser = "illum";
                    uploadType = "debitis";
                    uploadProtocol = "vel";
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