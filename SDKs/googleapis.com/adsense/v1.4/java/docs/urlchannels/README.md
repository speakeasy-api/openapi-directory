# urlchannels

### Available Operations

* [adsenseUrlchannelsList](#adsenseurlchannelslist) - List all URL channels in the specified ad client for this AdSense account.

## adsenseUrlchannelsList

List all URL channels in the specified ad client for this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseUrlchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseUrlchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseUrlchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseUrlchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseUrlchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseUrlchannelsListRequest req = new AdsenseUrlchannelsListRequest("esse") {{
                alt = AltEnum.JSON;
                fields = "iusto";
                key = "ipsum";
                maxResults = 788740L;
                oauthToken = "tenetur";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "tempore";
                userIp = "accusamus";
            }};            

            AdsenseUrlchannelsListResponse res = sdk.urlchannels.adsenseUrlchannelsList(req, new AdsenseUrlchannelsListSecurity() {{
                option1 = new AdsenseUrlchannelsListSecurityOption1("numquam", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.urlChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
