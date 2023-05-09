<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesListResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                orderBy = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req, new Area120tablesTablesListSecurity() {{
                option1 = new Area120tablesTablesListSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->