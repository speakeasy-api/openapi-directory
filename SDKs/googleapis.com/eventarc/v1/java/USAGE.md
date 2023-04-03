<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelConnectionsCreateRequest req = new EventarcProjectsLocationsChannelConnectionsCreateRequest() {{
                dollarXgafv = "2";
                channelConnectionInput = new ChannelConnectionInput() {{
                    activationToken = "provident";
                    channel = "distinctio";
                    name = "quibusdam";
                }};
                accessToken = "unde";
                alt = "proto";
                callback = "corrupti";
                channelConnectionId = "illum";
                fields = "vel";
                key = "error";
                oauthToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            EventarcProjectsLocationsChannelConnectionsCreateResponse res = sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req, new EventarcProjectsLocationsChannelConnectionsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->