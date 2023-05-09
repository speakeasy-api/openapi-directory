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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChannelsStopRequest req = new DriveChannelsStopRequest() {{
                channel = new Channel() {{
                    address = "6991 Durgan Pike";
                    expiration = "consequuntur";
                    id = "fa946773-9251-4aa5-ac3f-5ad019da1ffe";
                    kind = "nihil";
                    params = new java.util.HashMap<String, String>() {{
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    payload = false;
                    resourceId = "doloremque";
                    resourceUri = "reprehenderit";
                    token = "ut";
                    type = "maiores";
                }};;
                alt = AltEnum.JSON;
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "dicta";
            }};            

            DriveChannelsStopResponse res = sdk.channels.driveChannelsStop(req, new DriveChannelsStopSecurity() {{
                option1 = new DriveChannelsStopSecurityOption1("harum", "enim") {{
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
