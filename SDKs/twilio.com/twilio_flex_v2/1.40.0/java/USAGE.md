<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateWebChannelSecurity;
import org.openapis.openapi.models.operations.CreateWebChannelCreateWebChannelRequest;
import org.openapis.openapi.models.operations.CreateWebChannelRequest;
import org.openapis.openapi.models.operations.CreateWebChannelResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebChannelRequest req = new CreateWebChannelRequest() {{
                security = new CreateWebChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateWebChannelCreateWebChannelRequest() {{
                    addressSid = "corrupti";
                    chatFriendlyName = "provident";
                    customerFriendlyName = "distinctio";
                    preEngagementData = "quibusdam";
                }};
            }};            

            CreateWebChannelResponse res = sdk.createWebChannel(req);

            if (res.flexV2WebChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->