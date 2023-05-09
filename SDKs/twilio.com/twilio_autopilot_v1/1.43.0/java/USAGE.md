<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantCreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.operations.CreateAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssistantCreateAssistantRequest req = new CreateAssistantCreateAssistantRequest() {{
                callbackEvents = "corrupti";
                callbackUrl = "https://salty-stag.name";
                defaults = "nulla";
                friendlyName = "corrupti";
                logQueries = false;
                styleSheet = "illum";
                uniqueName = "vel";
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req, new CreateAssistantSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1Assistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->