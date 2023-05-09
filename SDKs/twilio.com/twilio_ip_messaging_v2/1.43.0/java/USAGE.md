<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest("corrupti") {{
                requestBody = new CreateChannelCreateChannelRequest() {{
                    attributes = "provident";
                    createdBy = "distinctio";
                    dateCreated = OffsetDateTime.parse("2021-03-11T23:22:42.658Z");
                    dateUpdated = OffsetDateTime.parse("2021-05-14T08:28:11.899Z");
                    friendlyName = "illum";
                    type = ChannelEnumChannelTypeEnum.PUBLIC_;
                    uniqueName = "error";
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateChannelResponse res = sdk.createChannel(req, new CreateChannelSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->