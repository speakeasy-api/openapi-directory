# watermarks

### Available Operations

* [youtubeWatermarksSet](#youtubewatermarksset) - Allows upload of watermark image and setting it for a channel.
* [youtubeWatermarksUnset](#youtubewatermarksunset) - Allows removal of channel watermark.

## youtubeWatermarksSet

Allows upload of watermark image and setting it for a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetRequest;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetResponse;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetSecurity;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeWatermarksSetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InvideoBranding;
import org.openapis.openapi.models.shared.InvideoPosition;
import org.openapis.openapi.models.shared.InvideoPositionCornerPositionEnum;
import org.openapis.openapi.models.shared.InvideoPositionTypeEnum;
import org.openapis.openapi.models.shared.InvideoTiming;
import org.openapis.openapi.models.shared.InvideoTimingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeWatermarksSetRequest req = new YoutubeWatermarksSetRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "provident".getBytes();
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "fuga";
                key = "facilis";
                oauthToken = "maiores";
                onBehalfOfContentOwner = "error";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "a";
                uploadProtocol = "consectetur";
            }};            

            YoutubeWatermarksSetResponse res = sdk.watermarks.youtubeWatermarksSet(req, new YoutubeWatermarksSetSecurity() {{
                option1 = new YoutubeWatermarksSetSecurityOption1("sapiente", "voluptatibus") {{
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

## youtubeWatermarksUnset

Allows removal of channel watermark.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetRequest;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetResponse;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetSecurity;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeWatermarksUnsetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeWatermarksUnsetRequest req = new YoutubeWatermarksUnsetRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "voluptatibus";
                key = "aut";
                oauthToken = "quam";
                onBehalfOfContentOwner = "omnis";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "asperiores";
                uploadProtocol = "modi";
            }};            

            YoutubeWatermarksUnsetResponse res = sdk.watermarks.youtubeWatermarksUnset(req, new YoutubeWatermarksUnsetSecurity() {{
                option1 = new YoutubeWatermarksUnsetSecurityOption1("facere", "neque") {{
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
