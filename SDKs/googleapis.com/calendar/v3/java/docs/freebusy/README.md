# freebusy

### Available Operations

* [calendarFreebusyQuery](#calendarfreebusyquery) - Returns free/busy information for a set of calendars.

## calendarFreebusyQuery

Returns free/busy information for a set of calendars.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarFreebusyQueryRequest;
import org.openapis.openapi.models.operations.CalendarFreebusyQueryResponse;
import org.openapis.openapi.models.operations.CalendarFreebusyQuerySecurity;
import org.openapis.openapi.models.operations.CalendarFreebusyQuerySecurityOption1;
import org.openapis.openapi.models.operations.CalendarFreebusyQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FreeBusyRequest;
import org.openapis.openapi.models.shared.FreeBusyRequestItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarFreebusyQueryRequest req = new CalendarFreebusyQueryRequest() {{
                freeBusyRequest = new FreeBusyRequest() {{
                    calendarExpansionMax = 674683;
                    groupExpansionMax = 911451;
                    items = new org.openapis.openapi.models.shared.FreeBusyRequestItem[]{{
                        add(new FreeBusyRequestItem() {{
                            id = "4c506a8a-a94c-4026-84cf-5e9d9a4578ad";
                        }}),
                        add(new FreeBusyRequestItem() {{
                            id = "c1ac600d-ec00-41ac-802e-2ec09ff8f0f8";
                        }}),
                        add(new FreeBusyRequestItem() {{
                            id = "16ff3477-c13e-4902-8141-25b0960a6681";
                        }}),
                    }};
                    timeMax = OffsetDateTime.parse("2022-12-09T02:50:43.097Z");
                    timeMin = OffsetDateTime.parse("2022-06-11T23:23:54.406Z");
                    timeZone = "quam";
                }};;
                alt = AltEnum.JSON;
                fields = "magni";
                key = "deserunt";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "omnis";
                userIp = "sed";
            }};            

            CalendarFreebusyQueryResponse res = sdk.freebusy.calendarFreebusyQuery(req, new CalendarFreebusyQuerySecurity() {{
                option1 = new CalendarFreebusyQuerySecurityOption1("nesciunt", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.freeBusyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
