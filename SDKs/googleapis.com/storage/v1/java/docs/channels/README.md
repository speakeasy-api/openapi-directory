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
import org.openapis.openapi.models.operations.StorageChannelsStopSecurityOption4;
import org.openapis.openapi.models.operations.StorageChannelsStopSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageChannelsStopRequest req = new StorageChannelsStopRequest() {{
                channel = new Channel() {{
                    address = "20597 Leonard Dale";
                    expiration = "occaecati";
                    id = "921aefb9-f58c-44d8-ae68-e4be056013f5";
                    kind = "sint";
                    params = new java.util.HashMap<String, String>() {{
                        put("deserunt", "esse");
                        put("nemo", "reprehenderit");
                        put("est", "quis");
                        put("sint", "accusamus");
                    }};
                    payload = false;
                    resourceId = "impedit";
                    resourceUri = "hic";
                    token = "necessitatibus";
                    type = "asperiores";
                }};;
                alt = AltEnum.JSON;
                fields = "ex";
                key = "voluptas";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quae";
                userIp = "minus";
            }};            

            StorageChannelsStopResponse res = sdk.channels.storageChannelsStop(req, new StorageChannelsStopSecurity() {{
                option1 = new StorageChannelsStopSecurityOption1("fuga", "laborum") {{
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
