<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest() {{
                requestBody = new CreateBindingCreateBindingRequest() {{
                    address = "5786 Little Streets";
                    bindingType = "sms";
                    credentialSid = "error";
                    endpoint = "deserunt";
                    identity = "suscipit";
                    notificationProtocolVersion = "iure";
                    tag = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                }};
                serviceSid = "delectus";
            }}            

            CreateBindingResponse res = sdk.createBinding(req, new CreateBindingSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceBinding.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->