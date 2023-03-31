<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudidentityCustomersUserinvitationsCancelPathParams;
import org.openapis.openapi.models.operations.CloudidentityCustomersUserinvitationsCancelQueryParams;
import org.openapis.openapi.models.operations.CloudidentityCustomersUserinvitationsCancelRequest;
import org.openapis.openapi.models.operations.CloudidentityCustomersUserinvitationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityCustomersUserinvitationsCancelRequest req = new CloudidentityCustomersUserinvitationsCancelRequest() {{
                pathParams = new CloudidentityCustomersUserinvitationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudidentityCustomersUserinvitationsCancelQueryParams() {{
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

            CloudidentityCustomersUserinvitationsCancelResponse res = sdk.customers.cloudidentityCustomersUserinvitationsCancel(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->