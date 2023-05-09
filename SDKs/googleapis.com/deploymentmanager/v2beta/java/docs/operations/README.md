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

            DeploymentmanagerOperationsGetRequest req = new DeploymentmanagerOperationsGetRequest("consectetur", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "doloribus";
                key = "suscipit";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "saepe";
                uploadProtocol = "necessitatibus";
            }};            

            DeploymentmanagerOperationsGetResponse res = sdk.operations.deploymentmanagerOperationsGet(req, new DeploymentmanagerOperationsGetSecurity() {{
                option1 = new DeploymentmanagerOperationsGetSecurityOption1("dolore", "sunt") {{
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

            DeploymentmanagerOperationsListRequest req = new DeploymentmanagerOperationsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "dignissimos";
                filter = "a";
                key = "debitis";
                maxResults = 233420L;
                oauthToken = "corporis";
                orderBy = "harum";
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "voluptates";
                uploadProtocol = "libero";
            }};            

            DeploymentmanagerOperationsListResponse res = sdk.operations.deploymentmanagerOperationsList(req, new DeploymentmanagerOperationsListSecurity() {{
                option1 = new DeploymentmanagerOperationsListSecurityOption1("vitae", "accusamus") {{
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
