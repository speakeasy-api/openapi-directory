<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    id = "reprehenderit";
                    instance = "quo";
                    project = "sit";
                }};
                queryParams = new SqlBackupRunsDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "dolores";
                    alt = "json";
                    callback = "quas";
                    fields = "in";
                    key = "natus";
                    oauthToken = "dolor";
                    prettyPrint = false;
                    quotaUser = "accusamus";
                    uploadType = "id";
                    uploadProtocol = "quaerat";
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