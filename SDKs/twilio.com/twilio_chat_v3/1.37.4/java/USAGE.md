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

            UpdateChannelRequest req = new UpdateChannelRequest() {{
                security = new UpdateChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new UpdateChannelPathParams() {{
                    serviceSid = "illum";
                    sid = "consequatur";
                }};
                headers = new UpdateChannelHeaders() {{
                    xTwilioWebhookEnabled = "false";
                }};
                request = new UpdateChannelUpdateChannelRequest() {{
                    messagingServiceSid = "hic";
                    type = "private";
                }};
            }};

            UpdateChannelResponse res = sdk.updateChannel(req);

            if (res.chatV3Channel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->