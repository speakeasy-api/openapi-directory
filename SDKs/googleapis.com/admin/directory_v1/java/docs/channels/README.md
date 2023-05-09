# channels

### Available Operations

* [adminChannelsStop](#adminchannelsstop) - Stops watching resources through this channel.

## adminChannelsStop

Stops watching resources through this channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminChannelsStopRequest;
import org.openapis.openapi.models.operations.AdminChannelsStopResponse;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurity;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurityOption1;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurityOption2;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurityOption3;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurityOption4;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminChannelsStopRequest req = new AdminChannelsStopRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                channel = new Channel() {{
                    address = "1442 Ona River";
                    expiration = "esse";
                    id = "39205929-396f-4ea7-996e-b10faaa2352c";
                    kind = "enim";
                    params = new java.util.HashMap<String, String>() {{
                        put("nemo", "minima");
                        put("excepturi", "accusantium");
                        put("iure", "culpa");
                    }};
                    payload = false;
                    resourceId = "doloribus";
                    resourceUri = "sapiente";
                    token = "architecto";
                    type = "mollitia";
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            AdminChannelsStopResponse res = sdk.channels.adminChannelsStop(req, new AdminChannelsStopSecurity() {{
                option1 = new AdminChannelsStopSecurityOption1("molestiae", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
