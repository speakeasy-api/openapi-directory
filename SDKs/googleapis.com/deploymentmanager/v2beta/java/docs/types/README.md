# types

### Available Operations

* [deploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

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

            DeploymentmanagerTypesListRequest req = new DeploymentmanagerTypesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "animi";
                filter = "quas";
                key = "totam";
                maxResults = 564667L;
                oauthToken = "odio";
                orderBy = "eaque";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quos";
                uploadProtocol = "iste";
            }};            

            DeploymentmanagerTypesListResponse res = sdk.types.deploymentmanagerTypesList(req, new DeploymentmanagerTypesListSecurity() {{
                option1 = new DeploymentmanagerTypesListSecurityOption1("assumenda", "tempore") {{
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
