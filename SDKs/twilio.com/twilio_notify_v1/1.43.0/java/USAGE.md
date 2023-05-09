<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest("corrupti") {{
                requestBody = new CreateBindingCreateBindingRequest("provident", BindingEnumBindingTypeEnum.FACEBOOK_MESSENGER, "quibusdam") {{
                    credentialSid = "unde";
                    endpoint = "nulla";
                    notificationProtocolVersion = "corrupti";
                    tag = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};;
            }};            

            CreateBindingResponse res = sdk.createBinding(req, new CreateBindingSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->