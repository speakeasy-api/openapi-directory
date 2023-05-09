# media

### Available Operations

* [youtubereportingMediaDownload](#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

## youtubereportingMediaDownload

Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingMediaDownloadRequest;
import org.openapis.openapi.models.operations.YoutubereportingMediaDownloadResponse;
import org.openapis.openapi.models.operations.YoutubereportingMediaDownloadSecurity;
import org.openapis.openapi.models.operations.YoutubereportingMediaDownloadSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingMediaDownloadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingMediaDownloadRequest req = new YoutubereportingMediaDownloadRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            YoutubereportingMediaDownloadResponse res = sdk.media.youtubereportingMediaDownload(req, new YoutubereportingMediaDownloadSecurity() {{
                option1 = new YoutubereportingMediaDownloadSecurityOption1("cupiditate", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.gdataMedia != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
