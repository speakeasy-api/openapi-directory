<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesSecurity;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesQueryParams;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesResponse;
import org.openapis.openapi.models.shared.SchemeCdOauth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesRequest req = new GetApiV2BroadcastservicesRequest() {{
                security = new GetApiV2BroadcastservicesSecurity() {{
                    cdOauth2 = new SchemeCdOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetApiV2BroadcastservicesQueryParams() {{
                    orderById = "desc";
                    pageSize = 592845;
                    pageStart = 715190;
                }};
            }};            

            GetApiV2BroadcastservicesResponse res = sdk.broadcastServices.getApiV2Broadcastservices(req);

            if (res.episodes.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->