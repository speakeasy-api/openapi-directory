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
                    name = "error";
                }};
                queryParams = new CloudidentityCustomersUserinvitationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "itaque";
                    alt = "json";
                    callback = "vitae";
                    fields = "et";
                    key = "aut";
                    oauthToken = "consequuntur";
                    prettyPrint = false;
                    quotaUser = "non";
                    uploadType = "nulla";
                    uploadProtocol = "error";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("est", "qui");
                    put("eum", "ut");
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