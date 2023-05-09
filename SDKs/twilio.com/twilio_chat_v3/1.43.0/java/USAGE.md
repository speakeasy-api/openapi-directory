<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.operations.UpdateChannelSecurity;
import org.openapis.openapi.models.operations.UpdateChannelUpdateChannelRequest;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest("corrupti", "provident") {{
                requestBody = new UpdateChannelUpdateChannelRequest() {{
                    messagingServiceSid = "distinctio";
                    type = ChannelEnumChannelTypeEnum.PRIVATE_;
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateChannelResponse res = sdk.updateChannel(req, new UpdateChannelSecurity("nulla", "corrupti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.chatV3Channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->