<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCommandResponse;
import org.openapis.openapi.models.operations.CreateCommandSecurity;
import org.openapis.openapi.models.shared.CommandEnumCommandModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCommandCreateCommandRequest req = new CreateCommandCreateCommandRequest("corrupti") {{
                callbackMethod = CreateCommandCreateCommandRequestCallbackMethodEnum.PATCH;
                callbackUrl = "https://terrible-nutrient.org";
                commandMode = CommandEnumCommandModeEnum.BINARY;
                deliveryReceiptRequested = false;
                includeSid = "illum";
                sim = "vel";
            }};            

            CreateCommandResponse res = sdk.createCommand(req, new CreateCommandSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->