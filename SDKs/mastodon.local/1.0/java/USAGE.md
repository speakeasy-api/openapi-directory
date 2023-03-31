<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameSecurity;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNamePathParams;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameRequest;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameResponse;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1AnnouncementsIdReactionsNameRequest req = new DeleteApiV1AnnouncementsIdReactionsNameRequest() {{
                security = new DeleteApiV1AnnouncementsIdReactionsNameSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new DeleteApiV1AnnouncementsIdReactionsNamePathParams() {{
                    id = "corrupti";
                    name = "provident";
                }};
            }};            

            DeleteApiV1AnnouncementsIdReactionsNameResponse res = sdk.deleteApiV1AnnouncementsIdReactionsName(req);

            if (res.deleteApiV1AnnouncementsIdReactionsName200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->