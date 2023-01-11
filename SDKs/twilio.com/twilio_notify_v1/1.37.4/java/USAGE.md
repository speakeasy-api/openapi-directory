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
                    serviceSid = "ipsa";
                }};
                request = new CreateBindingCreateBindingRequest() {{
                    address = "cum";
                    bindingType = "apn";
                    credentialSid = "aut";
                    endpoint = "eaque";
                    identity = "facilis";
                    notificationProtocolVersion = "et";
                    tag = new String[]() {{
                        add("et"),
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