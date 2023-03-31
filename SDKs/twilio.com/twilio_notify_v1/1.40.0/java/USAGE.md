<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.operations.CreateBindingPathParams;
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest() {{
                security = new CreateBindingSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateBindingPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateBindingCreateBindingRequest() {{
                    address = "7868 Stamm Junctions";
                    bindingType = "fcm";
                    credentialSid = "deserunt";
                    endpoint = "suscipit";
                    identity = "iure";
                    notificationProtocolVersion = "magnam";
                    tag = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                }};
            }};            

            CreateBindingResponse res = sdk.createBinding(req);

            if (res.notifyV1ServiceBinding.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->