<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsDeletePathParams;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteQueryParams;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsDeleteRequest req = new SqlBackupRunsDeleteRequest() {{
                security = new SqlBackupRunsDeleteSecurity() {{
                    option1 = new SqlBackupRunsDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new SqlBackupRunsDeletePathParams() {{
                    id = "corrupti";
                    instance = "provident";
                    project = "distinctio";
                }};
                queryParams = new SqlBackupRunsDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    alt = "proto";
                    callback = "corrupti";
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            SqlBackupRunsDeleteResponse res = sdk.backupRuns.sqlBackupRunsDelete(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->