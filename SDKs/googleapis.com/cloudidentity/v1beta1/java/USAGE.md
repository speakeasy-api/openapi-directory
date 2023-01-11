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

            CloudidentityCustomersUserinvitationsCancelRequest req = new CloudidentityCustomersUserinvitationsCancelRequest() {{
                pathParams = new CloudidentityCustomersUserinvitationsCancelPathParams() {{
                    name = "veniam";
                }};
                queryParams = new CloudidentityCustomersUserinvitationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aliquam";
                    alt = "json";
                    callback = "omnis";
                    fields = "officia";
                    key = "expedita";
                    oauthToken = "eligendi";
                    prettyPrint = false;
                    quotaUser = "assumenda";
                    uploadType = "consequuntur";
                    uploadProtocol = "reiciendis";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("qui", "omnis");
                    put("natus", "enim");
                    put("sit", "autem");
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