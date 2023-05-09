# manifests

### Available Operations

* [deploymentmanagerManifestsGet](#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [deploymentmanagerManifestsList](#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

## deploymentmanagerManifestsGet

Gets information about a specific manifest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerManifestsGetRequest req = new DeploymentmanagerManifestsGetRequest("quisquam", "saepe", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "inventore";
                key = "magnam";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "consectetur";
                uploadProtocol = "recusandae";
            }};            

            DeploymentmanagerManifestsGetResponse res = sdk.manifests.deploymentmanagerManifestsGet(req, new DeploymentmanagerManifestsGetSecurity() {{
                option1 = new DeploymentmanagerManifestsGetSecurityOption1("aspernatur", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.manifest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerManifestsList

Lists all manifests for a given deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerManifestsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerManifestsListRequest req = new DeploymentmanagerManifestsListRequest("eaque", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "impedit";
                filter = "aliquam";
                key = "fugit";
                maxResults = 882860L;
                oauthToken = "inventore";
                orderBy = "non";
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "laborum";
                uploadProtocol = "placeat";
            }};            

            DeploymentmanagerManifestsListResponse res = sdk.manifests.deploymentmanagerManifestsList(req, new DeploymentmanagerManifestsListSecurity() {{
                option1 = new DeploymentmanagerManifestsListSecurityOption1("velit", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.manifestsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
