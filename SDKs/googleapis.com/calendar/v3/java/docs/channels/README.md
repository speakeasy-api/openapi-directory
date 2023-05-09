# channels

### Available Operations

* [calendarChannelsStop](#calendarchannelsstop) - Stop watching resources through this channel

## calendarChannelsStop

Stop watching resources through this channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarChannelsStopRequest;
import org.openapis.openapi.models.operations.CalendarChannelsStopResponse;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurity;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurityOption1;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurityOption2;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurityOption3;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurityOption4;
import org.openapis.openapi.models.operations.CalendarChannelsStopSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarChannelsStopRequest req = new CalendarChannelsStopRequest() {{
                channel = new Channel() {{
                    address = "404 Tillman Freeway";
                    expiration = "odio";
                    id = "96f2a70c-6882-482a-a482-562f222e9817";
                    kind = "eveniet";
                    params = new java.util.HashMap<String, String>() {{
                        put("veritatis", "esse");
                        put("quod", "nam");
                        put("vero", "aliquid");
                        put("quasi", "saepe");
                    }};
                    payload = false;
                    resourceId = "vel";
                    resourceUri = "harum";
                    token = "molestiae";
                    type = "rerum";
                }};;
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "minima";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eligendi";
                userIp = "sit";
            }};            

            CalendarChannelsStopResponse res = sdk.channels.calendarChannelsStop(req, new CalendarChannelsStopSecurity() {{
                option1 = new CalendarChannelsStopSecurityOption1("culpa", "tempore") {{
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
