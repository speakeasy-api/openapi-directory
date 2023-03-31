<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertSecurity;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertPathParams;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertQueryParams;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertRequest;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsmigrationArchiveInsertRequest req = new GroupsmigrationArchiveInsertRequest() {{
                security = new GroupsmigrationArchiveInsertSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GroupsmigrationArchiveInsertPathParams() {{
                    groupId = "corrupti";
                }};
                queryParams = new GroupsmigrationArchiveInsertQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            GroupsmigrationArchiveInsertResponse res = sdk.archive.groupsmigrationArchiveInsert(req);

            if (res.groups.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->