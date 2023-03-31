<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudassetOperationsGetSecurity;
import org.openapis.openapi.models.operations.CloudassetOperationsGetPathParams;
import org.openapis.openapi.models.operations.CloudassetOperationsGetQueryParams;
import org.openapis.openapi.models.operations.CloudassetOperationsGetRequest;
import org.openapis.openapi.models.operations.CloudassetOperationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetOperationsGetRequest req = new CloudassetOperationsGetRequest() {{
                security = new CloudassetOperationsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetOperationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudassetOperationsGetQueryParams() {{
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

            CloudassetOperationsGetResponse res = sdk.operations.cloudassetOperationsGet(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->