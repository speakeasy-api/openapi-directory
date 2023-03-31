<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.operations.CreateChannelPathParams;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest() {{
                security = new CreateChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateChannelPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "provident";
                    friendlyName = "distinctio";
                    type = "private";
                    uniqueName = "unde";
                }};
            }};            

            CreateChannelResponse res = sdk.createChannel(req);

            if (res.chatV1ServiceChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->