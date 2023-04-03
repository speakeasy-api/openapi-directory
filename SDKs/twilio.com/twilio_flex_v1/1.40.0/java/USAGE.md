<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelCreateChannelRequest req = new CreateChannelCreateChannelRequest() {{
                chatFriendlyName = "corrupti";
                chatUniqueName = "provident";
                chatUserFriendlyName = "distinctio";
                flexFlowSid = "quibusdam";
                identity = "unde";
                longLived = false;
                preEngagementData = "nulla";
                target = "corrupti";
                taskAttributes = "illum";
                taskSid = "vel";
            }}            

            CreateChannelResponse res = sdk.createChannel(req, new CreateChannelSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Channel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->