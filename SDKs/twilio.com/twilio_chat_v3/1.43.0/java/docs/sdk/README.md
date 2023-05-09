# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [updateChannel](#updatechannel) - Update a specific Channel.

## updateChannel

Update a specific Channel.

### Example Usage

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

            UpdateChannelRequest req = new UpdateChannelRequest("illum", "vel") {{
                requestBody = new UpdateChannelUpdateChannelRequest() {{
                    messagingServiceSid = "error";
                    type = ChannelEnumChannelTypeEnum.PRIVATE_;
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateChannelResponse res = sdk.sdk.updateChannel(req, new UpdateChannelSecurity("iure", "magnam") {{
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
