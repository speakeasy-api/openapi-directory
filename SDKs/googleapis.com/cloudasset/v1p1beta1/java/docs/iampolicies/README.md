# iamPolicies

### Available Operations

* [cloudassetIamPoliciesSearchAll](#cloudassetiampoliciessearchall) - Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.

## cloudassetIamPoliciesSearchAll

Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.

### Example Usage

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

            CloudassetIamPoliciesSearchAllRequest req = new CloudassetIamPoliciesSearchAllRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                pageSize = 568045L;
                pageToken = "nisi";
                prettyPrint = false;
                query = "recusandae";
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            CloudassetIamPoliciesSearchAllResponse res = sdk.iamPolicies.cloudassetIamPoliciesSearchAll(req, new CloudassetIamPoliciesSearchAllSecurity("veritatis", "deserunt") {{
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
