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

            DeploymentmanagerResourcesGetRequest req = new DeploymentmanagerResourcesGetRequest("ullam", "adipisci", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "culpa";
                key = "corrupti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "hic";
                uploadProtocol = "exercitationem";
            }};            

            DeploymentmanagerResourcesGetResponse res = sdk.resources.deploymentmanagerResourcesGet(req, new DeploymentmanagerResourcesGetSecurity() {{
                option1 = new DeploymentmanagerResourcesGetSecurityOption1("nobis", "sit") {{
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

            DeploymentmanagerResourcesListRequest req = new DeploymentmanagerResourcesListRequest("rerum", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "voluptate";
                filter = "expedita";
                key = "ab";
                maxResults = 611749L;
                oauthToken = "dolore";
                orderBy = "laborum";
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "commodi";
                uploadProtocol = "quidem";
            }};            

            DeploymentmanagerResourcesListResponse res = sdk.resources.deploymentmanagerResourcesList(req, new DeploymentmanagerResourcesListSecurity() {{
                option1 = new DeploymentmanagerResourcesListSecurityOption1("explicabo", "voluptas") {{
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
