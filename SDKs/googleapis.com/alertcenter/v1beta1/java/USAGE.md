<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteQueryParams;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteResponse;
import org.openapis.openapi.models.shared.BatchDeleteAlertsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsBatchDeleteRequest req = new AlertcenterAlertsBatchDeleteRequest() {{
                security = new AlertcenterAlertsBatchDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AlertcenterAlertsBatchDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new BatchDeleteAlertsRequest() {{
                    alertId = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                    customerId = "debitis";
                }};
            }};            

            AlertcenterAlertsBatchDeleteResponse res = sdk.alerts.alertcenterAlertsBatchDelete(req);

            if (res.batchDeleteAlertsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->