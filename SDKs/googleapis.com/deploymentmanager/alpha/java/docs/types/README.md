# types

### Available Operations

* [deploymentmanagerTypesGet](#deploymentmanagertypesget) - Gets information about a specific type.
* [deploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

## deploymentmanagerTypesGet

Gets information about a specific type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypesGetRequest req = new DeploymentmanagerTypesGetRequest("sed", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "odit";
                key = "pariatur";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "ab";
                uploadProtocol = "velit";
            }};            

            DeploymentmanagerTypesGetResponse res = sdk.types.deploymentmanagerTypesGet(req, new DeploymentmanagerTypesGetSecurity() {{
                option1 = new DeploymentmanagerTypesGetSecurityOption1("facilis", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.type != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentmanagerTypesList

Lists all resource types for Deployment Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListSecurityOption3;
import org.openapis.openapi.models.operations.DeploymentmanagerTypesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerTypesListRequest req = new DeploymentmanagerTypesListRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "nisi";
                filter = "quis";
                key = "nisi";
                maxResults = 727771L;
                oauthToken = "minus";
                orderBy = "facere";
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "ad";
                uploadProtocol = "voluptatibus";
            }};            

            DeploymentmanagerTypesListResponse res = sdk.types.deploymentmanagerTypesList(req, new DeploymentmanagerTypesListSecurity() {{
                option1 = new DeploymentmanagerTypesListSecurityOption1("voluptatibus", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.typesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
