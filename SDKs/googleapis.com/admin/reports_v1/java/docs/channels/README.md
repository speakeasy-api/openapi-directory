# channels

### Available Operations

* [adminChannelsStop](#adminchannelsstop) - Stop watching resources through this channel.

## adminChannelsStop

Stop watching resources through this channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminChannelsStopRequest;
import org.openapis.openapi.models.operations.AdminChannelsStopResponse;
import org.openapis.openapi.models.operations.AdminChannelsStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminChannelsStopRequest req = new AdminChannelsStopRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                channel = new Channel() {{
                    address = "1663 Orlando Drives";
                    expiration = "tenetur";
                    id = "5ad019da-1ffe-478f-897b-0074f15471b5";
                    kind = "accusamus";
                    params = new java.util.HashMap<String, String>() {{
                        put("repudiandae", "quae");
                        put("ipsum", "quidem");
                    }};
                    payload = false;
                    resourceId = "molestias";
                    resourceUri = "excepturi";
                    token = "pariatur";
                    type = "modi";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                fields = "quasi";
                key = "repudiandae";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "itaque";
                uploadProtocol = "incidunt";
            }};            

            AdminChannelsStopResponse res = sdk.channels.adminChannelsStop(req, new AdminChannelsStopSecurity("enim", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
