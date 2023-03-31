<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UpdateChannelSecurity;
import org.openapis.openapi.models.operations.UpdateChannelPathParams;
import org.openapis.openapi.models.operations.UpdateChannelHeaders;
import org.openapis.openapi.models.operations.UpdateChannelUpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest() {{
                security = new UpdateChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new UpdateChannelPathParams() {{
                    serviceSid = "corrupti";
                    sid = "provident";
                }};
                headers = new UpdateChannelHeaders() {{
                    xTwilioWebhookEnabled = "false";
                }};
                request = new UpdateChannelUpdateChannelRequest() {{
                    messagingServiceSid = "quibusdam";
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