# floodlightGroups

### Available Operations

* [displayvideoFloodlightGroupsGet](#displayvideofloodlightgroupsget) - Gets a Floodlight group.

## displayvideoFloodlightGroupsGet

Gets a Floodlight group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFloodlightGroupsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoFloodlightGroupsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoFloodlightGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFloodlightGroupsGetRequest req = new DisplayvideoFloodlightGroupsGetRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "hic";
                key = "blanditiis";
                oauthToken = "vitae";
                partnerId = "iusto";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "velit";
                uploadProtocol = "molestiae";
            }};            

            DisplayvideoFloodlightGroupsGetResponse res = sdk.floodlightGroups.displayvideoFloodlightGroupsGet(req, new DisplayvideoFloodlightGroupsGetSecurity("nam", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
