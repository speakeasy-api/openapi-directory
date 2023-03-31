<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAssistantSecurity;
import org.openapis.openapi.models.operations.CreateAssistantCreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest() {{
                security = new CreateAssistantSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateAssistantCreateAssistantRequest() {{
                    callbackEvents = "corrupti";
                    callbackUrl = "https://salty-stag.name";
                    defaults = "nulla";
                    friendlyName = "corrupti";
                    logQueries = false;
                    styleSheet = "illum";
                    uniqueName = "vel";
                }};
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req);

            if (res.autopilotV1Assistant.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->