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

            DeploymentmanagerManifestsGetRequest req = new DeploymentmanagerManifestsGetRequest("quaerat", "porro", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "id";
                key = "suscipit";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "est";
                uploadProtocol = "recusandae";
            }};            

            DeploymentmanagerManifestsGetResponse res = sdk.manifests.deploymentmanagerManifestsGet(req, new DeploymentmanagerManifestsGetSecurity() {{
                option1 = new DeploymentmanagerManifestsGetSecurityOption1("totam", "fugiat") {{
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

            DeploymentmanagerManifestsListRequest req = new DeploymentmanagerManifestsListRequest("vel", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "possimus";
                fields = "facilis";
                filter = "cum";
                key = "commodi";
                maxResults = 447144L;
                oauthToken = "corporis";
                orderBy = "reiciendis";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "recusandae";
                uploadProtocol = "aliquid";
            }};            

            DeploymentmanagerManifestsListResponse res = sdk.manifests.deploymentmanagerManifestsList(req, new DeploymentmanagerManifestsListSecurity() {{
                option1 = new DeploymentmanagerManifestsListSecurityOption1("aperiam", "cum") {{
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
