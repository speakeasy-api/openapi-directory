<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllRequest;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllResponse;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetIamPoliciesSearchAllRequest req = new CloudassetIamPoliciesSearchAllRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                query = "deserunt";
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            CloudassetIamPoliciesSearchAllResponse res = sdk.iamPolicies.cloudassetIamPoliciesSearchAll(req, new CloudassetIamPoliciesSearchAllSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAllIamPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->