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

            DeploymentmanagerOperationsGetRequest req = new DeploymentmanagerOperationsGetRequest("beatae", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "harum";
                key = "laboriosam";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "libero";
                uploadProtocol = "vitae";
            }};            

            DeploymentmanagerOperationsGetResponse res = sdk.operations.deploymentmanagerOperationsGet(req, new DeploymentmanagerOperationsGetSecurity() {{
                option1 = new DeploymentmanagerOperationsGetSecurityOption1("accusamus", "similique") {{
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

            DeploymentmanagerOperationsListRequest req = new DeploymentmanagerOperationsListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "minima";
                filter = "nobis";
                key = "dolorum";
                maxResults = 237807L;
                oauthToken = "minus";
                orderBy = "dolores";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "dolore";
                uploadProtocol = "aliquam";
            }};            

            DeploymentmanagerOperationsListResponse res = sdk.operations.deploymentmanagerOperationsList(req, new DeploymentmanagerOperationsListSecurity() {{
                option1 = new DeploymentmanagerOperationsListSecurityOption1("officiis", "temporibus") {{
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
