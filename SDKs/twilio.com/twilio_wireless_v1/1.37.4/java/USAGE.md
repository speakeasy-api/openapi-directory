<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateCommandRequest req = new CreateCommandRequest() {{
                security = new CreateCommandSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCommandCreateCommandRequest() {{
                    callbackMethod = "HEAD";
                    callbackUrl = "voluptas";
                    command = "culpa";
                    commandMode = "text";
                    deliveryReceiptRequested = true;
                    includeSid = "dolor";
                    sim = "expedita";
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