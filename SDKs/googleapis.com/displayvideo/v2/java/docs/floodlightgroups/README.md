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

            DisplayvideoFloodlightGroupsGetRequest req = new DisplayvideoFloodlightGroupsGetRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "illum";
                key = "voluptates";
                oauthToken = "officia";
                partnerId = "est";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illo";
                uploadProtocol = "voluptate";
            }};            

            DisplayvideoFloodlightGroupsGetResponse res = sdk.floodlightGroups.displayvideoFloodlightGroupsGet(req, new DisplayvideoFloodlightGroupsGetSecurity("consequatur", "delectus") {{
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
