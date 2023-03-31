<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetPathParams;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetQueryParams;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementOperationsGetRequest req = new ServicemanagementOperationsGetRequest() {{
                security = new ServicemanagementOperationsGetSecurity() {{
                    option1 = new ServicemanagementOperationsGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ServicemanagementOperationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ServicemanagementOperationsGetQueryParams() {{
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

            ServicemanagementOperationsGetResponse res = sdk.operations.servicemanagementOperationsGet(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->