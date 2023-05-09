# channels

### Available Operations

* [storageChannelsStop](#storagechannelsstop) - Stop watching resources through this channel

## storageChannelsStop

Stop watching resources through this channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageChannelsStopRequest;
import org.openapis.openapi.models.operations.StorageChannelsStopResponse;
import org.openapis.openapi.models.operations.StorageChannelsStopSecurity;
import org.openapis.openapi.models.operations.StorageChannelsStopSecurityOption1;
import org.openapis.openapi.models.operations.StorageChannelsStopSecurityOption2;
import org.openapis.openapi.models.operations.StorageChannelsStopSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageChannelsStopRequest req = new StorageChannelsStopRequest() {{
                channel = new Channel() {{
                    address = "44262 Larkin Keys";
                    expiration = "nemo";
                    id = "e7956f92-51a5-4a9d-a660-ff57bfaad4f9";
                    kind = "officiis";
                    params = new java.util.HashMap<String, String>() {{
                        put("cumque", "vitae");
                        put("rerum", "tempora");
                        put("quis", "inventore");
                        put("fugit", "cumque");
                    }};
                    payload = false;
                    resourceId = "quae";
                    resourceUri = "perferendis";
                    token = "velit";
                    type = "aspernatur";
                }};;
                alt = AltEnum.JSON;
                fields = "eum";
                key = "eius";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "at";
                userIp = "impedit";
            }};            

            StorageChannelsStopResponse res = sdk.channels.storageChannelsStop(req, new StorageChannelsStopSecurity() {{
                option1 = new StorageChannelsStopSecurityOption1("eos", "sapiente") {{
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
