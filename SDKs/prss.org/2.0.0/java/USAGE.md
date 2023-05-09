<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesResponse;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesRequest req = new GetApiV2BroadcastservicesRequest() {{
                orderById = GetApiV2BroadcastservicesOrderByIDEnum.DESC;
                pageSize = 592845;
                pageStart = 715190;
            }};            

            GetApiV2BroadcastservicesResponse res = sdk.broadcastServices.getApiV2Broadcastservices(req, new GetApiV2BroadcastservicesSecurity("quibusdam") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.episodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->