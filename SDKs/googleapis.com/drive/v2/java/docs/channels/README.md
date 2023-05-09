# channels

### Available Operations

* [driveChannelsStop](#drivechannelsstop) - Stop watching resources through this channel

## driveChannelsStop

Stop watching resources through this channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChannelsStopRequest;
import org.openapis.openapi.models.operations.DriveChannelsStopResponse;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurity;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption1;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption2;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption3;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption4;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption5;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption6;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption7;
import org.openapis.openapi.models.operations.DriveChannelsStopSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChannelsStopRequest req = new DriveChannelsStopRequest() {{
                channel = new Channel() {{
                    address = "984 Wolff Canyon";
                    expiration = "omnis";
                    id = "7b0074f1-5471-4b5e-ae13-b99d488e1e91";
                    kind = "itaque";
                    params = new java.util.HashMap<String, String>() {{
                        put("enim", "consequatur");
                        put("est", "quibusdam");
                    }};
                    payload = false;
                    resourceId = "explicabo";
                    resourceUri = "deserunt";
                    token = "distinctio";
                    type = "quibusdam";
                }};;
                alt = AltEnum.JSON;
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "cupiditate";
            }};            

            DriveChannelsStopResponse res = sdk.channels.driveChannelsStop(req, new DriveChannelsStopSecurity() {{
                option1 = new DriveChannelsStopSecurityOption1("quos", "perferendis") {{
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
