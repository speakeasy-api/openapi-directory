# thumbnails

### Available Operations

* [youtubeThumbnailsSet](#youtubethumbnailsset) - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

## youtubeThumbnailsSet

As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetRequest;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetResponse;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetSecurity;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeThumbnailsSetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeThumbnailsSetRequest req = new YoutubeThumbnailsSetRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "similique";
                key = "porro";
                oauthToken = "impedit";
                onBehalfOfContentOwner = "nisi";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "soluta";
                uploadProtocol = "fugiat";
            }};            

            YoutubeThumbnailsSetResponse res = sdk.thumbnails.youtubeThumbnailsSet(req, new YoutubeThumbnailsSetSecurity() {{
                option1 = new YoutubeThumbnailsSetSecurityOption1("laboriosam", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.thumbnailSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
