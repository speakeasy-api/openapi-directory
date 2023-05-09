# videoAbuseReportReasons

### Available Operations

* [youtubeVideoAbuseReportReasonsList](#youtubevideoabusereportreasonslist) - Retrieves a list of resources, possibly filtered.

## youtubeVideoAbuseReportReasonsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListRequest;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListResponse;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListSecurity;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideoAbuseReportReasonsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideoAbuseReportReasonsListRequest req = new YoutubeVideoAbuseReportReasonsListRequest(                new String[]{{
                                add("maiores"),
                                add("consectetur"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "provident";
                hl = "adipisci";
                key = "accusantium";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "omnis";
                uploadProtocol = "explicabo";
            }};            

            YoutubeVideoAbuseReportReasonsListResponse res = sdk.videoAbuseReportReasons.youtubeVideoAbuseReportReasonsList(req, new YoutubeVideoAbuseReportReasonsListSecurity() {{
                option1 = new YoutubeVideoAbuseReportReasonsListSecurityOption1("vel", "cum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.videoAbuseReportReasonListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
