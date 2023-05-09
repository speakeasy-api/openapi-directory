# resources

### Available Operations

* [deploymentmanagerResourcesGet](#deploymentmanagerresourcesget) - Gets information about a single resource.
* [deploymentmanagerResourcesList](#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

## deploymentmanagerResourcesGet

Gets information about a single resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerResourcesGetRequest req = new DeploymentmanagerResourcesGetRequest("veritatis", "ipsa", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "quo";
                key = "fuga";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "voluptas";
                uploadProtocol = "ab";
            }};            

            DeploymentmanagerResourcesGetResponse res = sdk.resources.deploymentmanagerResourcesGet(req, new DeploymentmanagerResourcesGetSecurity() {{
                option1 = new DeploymentmanagerResourcesGetSecurityOption1("cupiditate", "consequatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerResourcesList

Lists all resources in a given deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerResourcesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerResourcesListRequest req = new DeploymentmanagerResourcesListRequest("tempora", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "esse";
                filter = "recusandae";
                key = "aperiam";
                maxResults = 715179L;
                oauthToken = "quod";
                orderBy = "dignissimos";
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "totam";
                uploadProtocol = "accusamus";
            }};            

            DeploymentmanagerResourcesListResponse res = sdk.resources.deploymentmanagerResourcesList(req, new DeploymentmanagerResourcesListSecurity() {{
                option1 = new DeploymentmanagerResourcesListSecurityOption1("aliquam", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourcesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
