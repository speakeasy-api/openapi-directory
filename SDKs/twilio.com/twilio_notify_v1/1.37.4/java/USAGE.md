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

            CreateBindingRequest req = new CreateBindingRequest() {{
                security = new CreateBindingSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateBindingPathParams() {{
                    serviceSid = "sit";
                }};
                request = new CreateBindingCreateBindingRequest() {{
                    address = "voluptas";
                    bindingType = "gcm";
                    credentialSid = "expedita";
                    endpoint = "consequuntur";
                    identity = "dolor";
                    notificationProtocolVersion = "expedita";
                    tag = new String[]() {{
                        add("fugit"),
                        add("et"),
                        add("nihil"),
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