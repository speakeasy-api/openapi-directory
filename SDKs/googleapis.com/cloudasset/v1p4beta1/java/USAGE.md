<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeIamPolicyRequest req = new CloudassetAnalyzeIamPolicyRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                analysisQueryAccessSelectorPermissions = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                analysisQueryAccessSelectorRoles = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
                analysisQueryIdentitySelectorIdentity = "suscipit";
                analysisQueryResourceSelectorFullResourceName = "iure";
                callback = "magnam";
                fields = "debitis";
                key = "ipsa";
                oauthToken = "delectus";
                optionsAnalyzeServiceAccountImpersonation = false;
                optionsExecutionTimeout = "tempora";
                optionsExpandGroups = false;
                optionsExpandResources = false;
                optionsExpandRoles = false;
                optionsOutputGroupEdges = false;
                optionsOutputResourceEdges = false;
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            CloudassetAnalyzeIamPolicyResponse res = sdk.v1p4beta1.cloudassetAnalyzeIamPolicy(req, new CloudassetAnalyzeIamPolicySecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeIamPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->