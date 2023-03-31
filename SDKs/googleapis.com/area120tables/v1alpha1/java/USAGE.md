<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption6;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesListQueryParams;
import org.openapis.openapi.models.operations.Area120tablesTablesListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                security = new Area120tablesTablesListSecurity() {{
                    option1 = new Area120tablesTablesListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new Area120tablesTablesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    orderBy = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req);

            if (res.listTablesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->