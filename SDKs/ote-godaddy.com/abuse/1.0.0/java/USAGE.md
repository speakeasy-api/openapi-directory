<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateTicketRequest;
import org.openapis.openapi.models.operations.CreateTicketResponse;
import org.openapis.openapi.models.shared.AbuseTicketCreateTypeEnum;
import org.openapis.openapi.models.shared.AbuseTicketCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTicketRequest req = new CreateTicketRequest() {{
                request = new AbuseTicketCreate() {{
                    info = "corrupti";
                    infoUrl = "provident";
                    intentional = false;
                    proxy = "distinctio";
                    source = "quibusdam";
                    target = "unde";
                    type = "PHISHING";
                }};
            }};            

            CreateTicketResponse res = sdk.v1.createTicket(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->