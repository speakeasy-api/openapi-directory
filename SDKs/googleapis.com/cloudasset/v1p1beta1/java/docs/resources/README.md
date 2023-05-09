# resources

### Available Operations

* [cloudassetResourcesSearchAll](#cloudassetresourcessearchall) - Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

## cloudassetResourcesSearchAll

Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetResourcesSearchAllRequest;
import org.openapis.openapi.models.operations.CloudassetResourcesSearchAllResponse;
import org.openapis.openapi.models.operations.CloudassetResourcesSearchAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetResourcesSearchAllRequest req = new CloudassetResourcesSearchAllRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                assetTypes = new String[]{{
                    add("odit"),
                    add("at"),
                    add("at"),
                    add("maiores"),
                }};
                callback = "molestiae";
                fields = "quod";
                key = "quod";
                oauthToken = "esse";
                orderBy = "totam";
                pageSize = 780529L;
                pageToken = "dolorum";
                prettyPrint = false;
                query = "dicta";
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            CloudassetResourcesSearchAllResponse res = sdk.resources.cloudassetResourcesSearchAll(req, new CloudassetResourcesSearchAllSecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAllResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
