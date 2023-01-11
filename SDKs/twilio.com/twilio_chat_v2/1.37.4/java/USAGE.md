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
                    serviceSid = "tempore";
                }};
                headers = new CreateChannelHeaders() {{
                    xTwilioWebhookEnabled = "true";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "aut";
                    createdBy = "tempora";
                    dateCreated = "1996-03-11T05:29:22Z";
                    dateUpdated = "2021-10-19T11:13:53Z";
                    friendlyName = "non";
                    type = "public";
                    uniqueName = "recusandae";
                }};
            }};

            CreateChannelResponse res = sdk.createChannel(req);

            if (res.chatV2ServiceChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->