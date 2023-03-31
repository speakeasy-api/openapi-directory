<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsListQueryParams;
import org.openapis.openapi.models.operations.ServiceusageOperationsListRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsListRequest req = new ServiceusageOperationsListRequest() {{
                security = new ServiceusageOperationsListSecurity() {{
                    option1 = new ServiceusageOperationsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new ServiceusageOperationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    filter = "nulla";
                    key = "corrupti";
                    name = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            ServiceusageOperationsListResponse res = sdk.operations.serviceusageOperationsList(req);

            if (res.listOperationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->