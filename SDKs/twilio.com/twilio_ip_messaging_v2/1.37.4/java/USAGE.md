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
                    serviceSid = "sit";
                }};
                headers = new CreateChannelHeaders() {{
                    xTwilioWebhookEnabled = "true";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "culpa";
                    createdBy = "expedita";
                    dateCreated = "1997-12-26T13:41:25Z";
                    dateUpdated = "2003-04-20T23:11:44Z";
                    friendlyName = "expedita";
                    type = "private";
                    uniqueName = "fugit";
                }};
            }};

            CreateChannelResponse res = sdk.createChannel(req);

            if (res.ipMessagingV2ServiceChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->