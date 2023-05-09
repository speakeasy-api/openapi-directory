# channelBanners

### Available Operations

* [youtubeChannelBannersInsert](#youtubechannelbannersinsert) - Inserts a new resource into this collection.

## youtubeChannelBannersInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertRequest;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertResponse;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelBannersInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelBannerResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelBannersInsertRequest req = new YoutubeChannelBannersInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "ducimus".getBytes();
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                channelId = "ipsam";
                fields = "ea";
                key = "aspernatur";
                oauthToken = "vel";
                onBehalfOfContentOwner = "possimus";
                onBehalfOfContentOwnerChannel = "magnam";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "ex";
                uploadProtocol = "laudantium";
            }};            

            YoutubeChannelBannersInsertResponse res = sdk.channelBanners.youtubeChannelBannersInsert(req, new YoutubeChannelBannersInsertSecurity() {{
                option1 = new YoutubeChannelBannersInsertSecurityOption1("dicta", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channelBannerResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
