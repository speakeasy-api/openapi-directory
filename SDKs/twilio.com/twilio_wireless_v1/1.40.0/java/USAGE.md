<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCommandSecurity;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandResponse;
import org.openapis.openapi.models.shared.CommandEnumCommandModeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCommandRequest req = new CreateCommandRequest() {{
                security = new CreateCommandSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCommandCreateCommandRequest() {{
                    callbackMethod = "PATCH";
                    callbackUrl = "https://salty-stag.name";
                    command = "nulla";
                    commandMode = "binary";
                    deliveryReceiptRequested = false;
                    includeSid = "illum";
                    sim = "vel";
                }};
            }};            

            CreateCommandResponse res = sdk.createCommand(req);

            if (res.wirelessV1Command.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->