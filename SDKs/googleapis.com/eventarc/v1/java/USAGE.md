<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelConnectionsCreateRequest req = new EventarcProjectsLocationsChannelConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                channelConnectionInput = new ChannelConnectionInput() {{
                    activationToken = "distinctio";
                    channel = "quibusdam";
                    name = "Ismael Little";
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                channelConnectionId = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            EventarcProjectsLocationsChannelConnectionsCreateResponse res = sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req, new EventarcProjectsLocationsChannelConnectionsCreateSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->