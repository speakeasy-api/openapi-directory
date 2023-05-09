# superChatEvents

### Available Operations

* [youtubeSuperChatEventsList](#youtubesuperchateventslist) - Retrieves a list of resources, possibly filtered.

## youtubeSuperChatEventsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListRequest;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListResponse;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListSecurity;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeSuperChatEventsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeSuperChatEventsListRequest req = new YoutubeSuperChatEventsListRequest(                new String[]{{
                                add("doloremque"),
                                add("sed"),
                                add("amet"),
                                add("rerum"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "dolor";
                hl = "nisi";
                key = "dignissimos";
                maxResults = 971360L;
                oauthToken = "itaque";
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "accusantium";
                uploadProtocol = "quod";
            }};            

            YoutubeSuperChatEventsListResponse res = sdk.superChatEvents.youtubeSuperChatEventsList(req, new YoutubeSuperChatEventsListSecurity() {{
                option1 = new YoutubeSuperChatEventsListSecurityOption1("minus", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.superChatEventListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
