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

            DeploymentmanagerTypesListRequest req = new DeploymentmanagerTypesListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "molestiae";
                filter = "accusantium";
                key = "porro";
                maxResults = 430402L;
                oauthToken = "quas";
                orderBy = "praesentium";
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "fugit";
                uploadProtocol = "fuga";
            }};            

            DeploymentmanagerTypesListResponse res = sdk.types.deploymentmanagerTypesList(req, new DeploymentmanagerTypesListSecurity() {{
                option1 = new DeploymentmanagerTypesListSecurityOption1("mollitia", "incidunt") {{
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
