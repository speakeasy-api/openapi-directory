<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTicketResponse;
import org.openapis.openapi.models.shared.AbuseTicketCreate;
import org.openapis.openapi.models.shared.AbuseTicketCreateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AbuseTicketCreate req = new AbuseTicketCreate() {{
                info = "corrupti";
                infoUrl = "provident";
                intentional = false;
                proxy = "distinctio";
                source = "quibusdam";
                target = "unde";
                type = AbuseTicketCreateTypeEnum.PHISHING;
            }};            

            CreateTicketResponse res = sdk.v1.createTicket(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->