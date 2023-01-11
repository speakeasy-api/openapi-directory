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

            CreateChannelRequest req = new CreateChannelRequest() {{
                security = new CreateChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateChannelPathParams() {{
                    serviceSid = "quam";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "maiores";
                    friendlyName = "totam";
                    type = "public";
                    uniqueName = "aperiam";
                }};
            }};

            CreateChannelResponse res = sdk.createChannel(req);

            if (res.ipMessagingV1ServiceChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->