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
                    serviceSid = "repellendus";
                }};
                headers = new CreateChannelHeaders() {{
                    xTwilioWebhookEnabled = "false";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "eum";
                    createdBy = "earum";
                    dateCreated = "1973-08-29T09:00:45Z";
                    dateUpdated = "1994-01-26T05:40:31Z";
                    friendlyName = "aut";
                    type = "public";
                    uniqueName = "quia";
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