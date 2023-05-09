# calendars

### Available Operations

* [calendarCalendarsClear](#calendarcalendarsclear) - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* [calendarCalendarsDelete](#calendarcalendarsdelete) - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* [calendarCalendarsGet](#calendarcalendarsget) - Returns metadata for a calendar.
* [calendarCalendarsInsert](#calendarcalendarsinsert) - Creates a secondary calendar.
* [calendarCalendarsPatch](#calendarcalendarspatch) - Updates metadata for a calendar. This method supports patch semantics.
* [calendarCalendarsUpdate](#calendarcalendarsupdate) - Updates metadata for a calendar.

## calendarCalendarsClear

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsClearRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsClearResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsClearSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsClearRequest req = new CalendarCalendarsClearRequest("dolorem") {{
                alt = AltEnum.JSON;
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                userIp = "architecto";
            }};            

            CalendarCalendarsClearResponse res = sdk.calendars.calendarCalendarsClear(req, new CalendarCalendarsClearSecurity("quae", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## calendarCalendarsDelete

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsDeleteRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsDeleteResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsDeleteRequest req = new CalendarCalendarsDeleteRequest("quas") {{
                alt = AltEnum.JSON;
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "porro";
            }};            

            CalendarCalendarsDeleteResponse res = sdk.calendars.calendarCalendarsDelete(req, new CalendarCalendarsDeleteSecurity("doloribus", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## calendarCalendarsGet

Returns metadata for a calendar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsGetRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsGetResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsGetSecurity;
import org.openapis.openapi.models.operations.CalendarCalendarsGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarCalendarsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsGetRequest req = new CalendarCalendarsGetRequest("facilis") {{
                alt = AltEnum.JSON;
                fields = "cupiditate";
                key = "qui";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "laudantium";
                userIp = "odio";
            }};            

            CalendarCalendarsGetResponse res = sdk.calendars.calendarCalendarsGet(req, new CalendarCalendarsGetSecurity() {{
                option1 = new CalendarCalendarsGetSecurityOption1("occaecati", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarsInsert

Creates a secondary calendar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsInsertRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsInsertResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Calendar;
import org.openapis.openapi.models.shared.ConferenceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsInsertRequest req = new CalendarCalendarsInsertRequest() {{
                calendar = new Calendar() {{
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("vero"),
                            add("omnis"),
                            add("quis"),
                            add("ipsum"),
                        }};
                    }};;
                    description = "delectus";
                    etag = "voluptate";
                    id = "3ef7fbc7-abd7-44dd-b9c0-f5d2cff7c70a";
                    kind = "tempora";
                    location = "ipsam";
                    summary = "ea";
                    timeZone = "aspernatur";
                }};;
                alt = AltEnum.JSON;
                fields = "vel";
                key = "possimus";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "ratione";
                userIp = "ex";
            }};            

            CalendarCalendarsInsertResponse res = sdk.calendars.calendarCalendarsInsert(req, new CalendarCalendarsInsertSecurity("laudantium", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarsPatch

Updates metadata for a calendar. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsPatchRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsPatchResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Calendar;
import org.openapis.openapi.models.shared.ConferenceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsPatchRequest req = new CalendarCalendarsPatchRequest("dolor") {{
                calendar = new Calendar() {{
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("quasi"),
                            add("ex"),
                            add("nulla"),
                            add("excepturi"),
                        }};
                    }};;
                    description = "voluptatibus";
                    etag = "nostrum";
                    id = "fce6c556-146c-43e2-90fb-008c42e141aa";
                    kind = "placeat";
                    location = "velit";
                    summary = "eum";
                    timeZone = "autem";
                }};;
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "quas";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "voluptas";
            }};            

            CalendarCalendarsPatchResponse res = sdk.calendars.calendarCalendarsPatch(req, new CalendarCalendarsPatchSecurity("libero", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarsUpdate

Updates metadata for a calendar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarsUpdateRequest;
import org.openapis.openapi.models.operations.CalendarCalendarsUpdateResponse;
import org.openapis.openapi.models.operations.CalendarCalendarsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Calendar;
import org.openapis.openapi.models.shared.ConferenceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarsUpdateRequest req = new CalendarCalendarsUpdateRequest("tempora") {{
                calendar = new Calendar() {{
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("explicabo"),
                            add("provident"),
                        }};
                    }};;
                    description = "ipsa";
                    etag = "molestiae";
                    id = "474778a7-bd46-46d2-8c10-ab3cdca42519";
                    kind = "consequatur";
                    location = "tempora";
                    summary = "debitis";
                    timeZone = "ipsam";
                }};;
                alt = AltEnum.JSON;
                fields = "aspernatur";
                key = "sequi";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "esse";
                userIp = "recusandae";
            }};            

            CalendarCalendarsUpdateResponse res = sdk.calendars.calendarCalendarsUpdate(req, new CalendarCalendarsUpdateSecurity("aperiam", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
