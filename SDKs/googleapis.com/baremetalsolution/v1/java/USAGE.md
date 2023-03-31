<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaremetalsolutionOperationsCancelSecurity;
import org.openapis.openapi.models.operations.BaremetalsolutionOperationsCancelPathParams;
import org.openapis.openapi.models.operations.BaremetalsolutionOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.BaremetalsolutionOperationsCancelRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionOperationsCancelRequest req = new BaremetalsolutionOperationsCancelRequest() {{
                security = new BaremetalsolutionOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaremetalsolutionOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new BaremetalsolutionOperationsCancelQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            BaremetalsolutionOperationsCancelResponse res = sdk.operations.baremetalsolutionOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->