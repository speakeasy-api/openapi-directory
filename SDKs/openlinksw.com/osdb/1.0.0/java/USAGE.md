<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ActionHelpRequest;
import org.openapis.openapi.models.operations.ActionHelpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionHelpRequest req = new ActionHelpRequest() {{
                actionId = "corrupti";
                serviceId = "provident";
            }}            

            ActionHelpResponse res = sdk.osdb.actionHelp(req);

            if (res.actionHelpResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->