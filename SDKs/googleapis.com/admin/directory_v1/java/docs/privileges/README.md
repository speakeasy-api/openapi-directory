# privileges

### Available Operations

* [directoryPrivilegesList](#directoryprivilegeslist) - Retrieves a paginated list of all privileges for a customer.

## directoryPrivilegesList

Retrieves a paginated list of all privileges for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryPrivilegesListRequest;
import org.openapis.openapi.models.operations.DirectoryPrivilegesListResponse;
import org.openapis.openapi.models.operations.DirectoryPrivilegesListSecurity;
import org.openapis.openapi.models.operations.DirectoryPrivilegesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryPrivilegesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryPrivilegesListRequest req = new DirectoryPrivilegesListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "doloribus";
                key = "fugiat";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "velit";
                uploadProtocol = "vitae";
            }};            

            DirectoryPrivilegesListResponse res = sdk.privileges.directoryPrivilegesList(req, new DirectoryPrivilegesListSecurity() {{
                option1 = new DirectoryPrivilegesListSecurityOption1("nesciunt", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.privileges != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
