# media

### Available Operations

* [chatMediaDownload](#chatmediadownload) - Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

## chatMediaDownload

Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChatMediaDownloadRequest;
import org.openapis.openapi.models.operations.ChatMediaDownloadResponse;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurity;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption1;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption2;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChatMediaDownloadRequest req = new ChatMediaDownloadRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ChatMediaDownloadResponse res = sdk.media.chatMediaDownload(req, new ChatMediaDownloadSecurity() {{
                option1 = new ChatMediaDownloadSecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
