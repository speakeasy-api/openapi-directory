<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsDeleteRequest req = new SqlBackupRunsDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                id = "nulla";
                instance = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                project = "error";
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }}            

            SqlBackupRunsDeleteResponse res = sdk.backupRuns.sqlBackupRunsDelete(req, new SqlBackupRunsDeleteSecurity() {{
                option1 = new SqlBackupRunsDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->