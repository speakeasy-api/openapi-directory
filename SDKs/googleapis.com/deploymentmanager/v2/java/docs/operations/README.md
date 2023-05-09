# operations

### Available Operations

* [deploymentmanagerOperationsGet](#deploymentmanageroperationsget) - Gets information about a specific operation.
* [deploymentmanagerOperationsList](#deploymentmanageroperationslist) - Lists all operations for a project.

## deploymentmanagerOperationsGet

Gets information about a specific operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerOperationsGetRequest req = new DeploymentmanagerOperationsGetRequest("autem", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "libero";
                key = "quasi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            DeploymentmanagerOperationsGetResponse res = sdk.operations.deploymentmanagerOperationsGet(req, new DeploymentmanagerOperationsGetSecurity() {{
                option1 = new DeploymentmanagerOperationsGetSecurityOption1("ipsa", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerOperationsList

Lists all operations for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerOperationsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerOperationsListRequest req = new DeploymentmanagerOperationsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "rem";
                filter = "fuga";
                key = "reprehenderit";
                maxResults = 695626L;
                oauthToken = "fugiat";
                orderBy = "ut";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "assumenda";
                uploadProtocol = "eos";
            }};            

            DeploymentmanagerOperationsListResponse res = sdk.operations.deploymentmanagerOperationsList(req, new DeploymentmanagerOperationsListSecurity() {{
                option1 = new DeploymentmanagerOperationsListSecurityOption1("praesentium", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
