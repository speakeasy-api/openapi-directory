# colors

### Available Operations

* [calendarColorsGet](#calendarcolorsget) - Returns the color definitions for calendars and events.

## calendarColorsGet

Returns the color definitions for calendars and events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarColorsGetRequest;
import org.openapis.openapi.models.operations.CalendarColorsGetResponse;
import org.openapis.openapi.models.operations.CalendarColorsGetSecurity;
import org.openapis.openapi.models.operations.CalendarColorsGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarColorsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarColorsGetRequest req = new CalendarColorsGetRequest() {{
                alt = AltEnum.JSON;
                fields = "adipisci";
                key = "cumque";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "consequatur";
                userIp = "minus";
            }};            

            CalendarColorsGetResponse res = sdk.colors.calendarColorsGet(req, new CalendarColorsGetSecurity() {{
                option1 = new CalendarColorsGetSecurityOption1("quaerat", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.colors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
