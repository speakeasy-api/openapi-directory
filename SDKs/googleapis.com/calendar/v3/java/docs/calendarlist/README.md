# calendarList

### Available Operations

* [calendarCalendarListDelete](#calendarcalendarlistdelete) - Removes a calendar from the user's calendar list.
* [calendarCalendarListGet](#calendarcalendarlistget) - Returns a calendar from the user's calendar list.
* [calendarCalendarListInsert](#calendarcalendarlistinsert) - Inserts an existing calendar into the user's calendar list.
* [calendarCalendarListList](#calendarcalendarlistlist) - Returns the calendars on the user's calendar list.
* [calendarCalendarListPatch](#calendarcalendarlistpatch) - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* [calendarCalendarListUpdate](#calendarcalendarlistupdate) - Updates an existing calendar on the user's calendar list.
* [calendarCalendarListWatch](#calendarcalendarlistwatch) - Watch for changes to CalendarList resources.

## calendarCalendarListDelete

Removes a calendar from the user's calendar list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListDeleteRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListDeleteResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListDeleteRequest req = new CalendarCalendarListDeleteRequest("accusamus") {{
                alt = AltEnum.JSON;
                fields = "delectus";
                key = "quidem";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "id";
            }};            

            CalendarCalendarListDeleteResponse res = sdk.calendarList.calendarCalendarListDelete(req, new CalendarCalendarListDeleteSecurity("blanditiis", "deleniti") {{
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

## calendarCalendarListGet

Returns a calendar from the user's calendar list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListGetRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListGetResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListGetSecurity;
import org.openapis.openapi.models.operations.CalendarCalendarListGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarCalendarListGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListGetRequest req = new CalendarCalendarListGetRequest("sapiente") {{
                alt = AltEnum.JSON;
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                userIp = "natus";
            }};            

            CalendarCalendarListGetResponse res = sdk.calendarList.calendarCalendarListGet(req, new CalendarCalendarListGetSecurity() {{
                option1 = new CalendarCalendarListGetSecurityOption1("omnis", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.calendarListEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarListInsert

Inserts an existing calendar into the user's calendar list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListInsertRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListInsertResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarListEntry;
import org.openapis.openapi.models.shared.CalendarListEntryNotificationSettings;
import org.openapis.openapi.models.shared.CalendarNotification;
import org.openapis.openapi.models.shared.ConferenceProperties;
import org.openapis.openapi.models.shared.EventReminder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListInsertRequest req = new CalendarCalendarListInsertRequest() {{
                calendarListEntry = new CalendarListEntry() {{
                    accessRole = "perferendis";
                    backgroundColor = "nihil";
                    colorId = "magnam";
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("id"),
                            add("labore"),
                            add("labore"),
                        }};
                    }};;
                    defaultReminders = new org.openapis.openapi.models.shared.EventReminder[]{{
                        add(new EventReminder() {{
                            method = "natus";
                            minutes = 749170;
                        }}),
                        add(new EventReminder() {{
                            method = "eum";
                            minutes = 878453;
                        }}),
                    }};
                    deleted = false;
                    description = "aspernatur";
                    etag = "architecto";
                    foregroundColor = "magnam";
                    hidden = false;
                    id = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                    kind = "repellat";
                    location = "quibusdam";
                    notificationSettings = new CalendarListEntryNotificationSettings() {{
                        notifications = new org.openapis.openapi.models.shared.CalendarNotification[]{{
                            add(new CalendarNotification() {{
                                method = "saepe";
                                type = "pariatur";
                            }}),
                        }};
                    }};;
                    primary = false;
                    selected = false;
                    summary = "accusantium";
                    summaryOverride = "consequuntur";
                    timeZone = "praesentium";
                }};;
                alt = AltEnum.JSON;
                colorRgbFormat = false;
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "quo";
                userIp = "illum";
            }};            

            CalendarCalendarListInsertResponse res = sdk.calendarList.calendarCalendarListInsert(req, new CalendarCalendarListInsertSecurity("pariatur", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarListEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarListList

Returns the calendars on the user's calendar list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListListMinAccessRoleEnum;
import org.openapis.openapi.models.operations.CalendarCalendarListListRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListListResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListListSecurity;
import org.openapis.openapi.models.operations.CalendarCalendarListListSecurityOption1;
import org.openapis.openapi.models.operations.CalendarCalendarListListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListListRequest req = new CalendarCalendarListListRequest() {{
                alt = AltEnum.JSON;
                fields = "ea";
                key = "excepturi";
                maxResults = 139972L;
                minAccessRole = CalendarCalendarListListMinAccessRoleEnum.OWNER;
                oauthToken = "accusantium";
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                showDeleted = false;
                showHidden = false;
                syncToken = "quidem";
                userIp = "ipsam";
            }};            

            CalendarCalendarListListResponse res = sdk.calendarList.calendarCalendarListList(req, new CalendarCalendarListListSecurity() {{
                option1 = new CalendarCalendarListListSecurityOption1("voluptate", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.calendarList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarListPatch

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListPatchRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListPatchResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarListEntry;
import org.openapis.openapi.models.shared.CalendarListEntryNotificationSettings;
import org.openapis.openapi.models.shared.CalendarNotification;
import org.openapis.openapi.models.shared.ConferenceProperties;
import org.openapis.openapi.models.shared.EventReminder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListPatchRequest req = new CalendarCalendarListPatchRequest("nam") {{
                calendarListEntry = new CalendarListEntry() {{
                    accessRole = "eaque";
                    backgroundColor = "pariatur";
                    colorId = "nemo";
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("perferendis"),
                            add("fugiat"),
                            add("amet"),
                            add("aut"),
                        }};
                    }};;
                    defaultReminders = new org.openapis.openapi.models.shared.EventReminder[]{{
                        add(new EventReminder() {{
                            method = "corporis";
                            minutes = 944124;
                        }}),
                        add(new EventReminder() {{
                            method = "libero";
                            minutes = 749999;
                        }}),
                        add(new EventReminder() {{
                            method = "dolores";
                            minutes = 339404;
                        }}),
                        add(new EventReminder() {{
                            method = "totam";
                            minutes = 489549;
                        }}),
                    }};
                    deleted = false;
                    description = "eaque";
                    etag = "quis";
                    foregroundColor = "nesciunt";
                    hidden = false;
                    id = "202c73d5-fe9b-490c-a890-9b3fe49a8d9c";
                    kind = "libero";
                    location = "delectus";
                    notificationSettings = new CalendarListEntryNotificationSettings() {{
                        notifications = new org.openapis.openapi.models.shared.CalendarNotification[]{{
                            add(new CalendarNotification() {{
                                method = "quos";
                                type = "aliquid";
                            }}),
                            add(new CalendarNotification() {{
                                method = "dolorem";
                                type = "dolorem";
                            }}),
                        }};
                    }};;
                    primary = false;
                    selected = false;
                    summary = "dolor";
                    summaryOverride = "qui";
                    timeZone = "ipsum";
                }};;
                alt = AltEnum.JSON;
                colorRgbFormat = false;
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                userIp = "dignissimos";
            }};            

            CalendarCalendarListPatchResponse res = sdk.calendarList.calendarCalendarListPatch(req, new CalendarCalendarListPatchSecurity("reiciendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarListEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarListUpdate

Updates an existing calendar on the user's calendar list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListUpdateRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListUpdateResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CalendarListEntry;
import org.openapis.openapi.models.shared.CalendarListEntryNotificationSettings;
import org.openapis.openapi.models.shared.CalendarNotification;
import org.openapis.openapi.models.shared.ConferenceProperties;
import org.openapis.openapi.models.shared.EventReminder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListUpdateRequest req = new CalendarCalendarListUpdateRequest("dolorum") {{
                calendarListEntry = new CalendarListEntry() {{
                    accessRole = "numquam";
                    backgroundColor = "veritatis";
                    colorId = "ipsa";
                    conferenceProperties = new ConferenceProperties() {{
                        allowedConferenceSolutionTypes = new String[]{{
                            add("iure"),
                        }};
                    }};;
                    defaultReminders = new org.openapis.openapi.models.shared.EventReminder[]{{
                        add(new EventReminder() {{
                            method = "quaerat";
                            minutes = 881005;
                        }}),
                        add(new EventReminder() {{
                            method = "quidem";
                            minutes = 976405;
                        }}),
                    }};
                    deleted = false;
                    description = "voluptas";
                    etag = "natus";
                    foregroundColor = "eos";
                    hidden = false;
                    id = "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95";
                    kind = "repellendus";
                    location = "totam";
                    notificationSettings = new CalendarListEntryNotificationSettings() {{
                        notifications = new org.openapis.openapi.models.shared.CalendarNotification[]{{
                            add(new CalendarNotification() {{
                                method = "alias";
                                type = "at";
                            }}),
                            add(new CalendarNotification() {{
                                method = "quaerat";
                                type = "tempora";
                            }}),
                            add(new CalendarNotification() {{
                                method = "vel";
                                type = "quod";
                            }}),
                        }};
                    }};;
                    primary = false;
                    selected = false;
                    summary = "officiis";
                    summaryOverride = "qui";
                    timeZone = "dolorum";
                }};;
                alt = AltEnum.JSON;
                colorRgbFormat = false;
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "ipsum";
            }};            

            CalendarCalendarListUpdateResponse res = sdk.calendarList.calendarCalendarListUpdate(req, new CalendarCalendarListUpdateSecurity("quisquam", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calendarListEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarCalendarListWatch

Watch for changes to CalendarList resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchMinAccessRoleEnum;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchRequest;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchResponse;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchSecurity;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchSecurityOption1;
import org.openapis.openapi.models.operations.CalendarCalendarListWatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarCalendarListWatchRequest req = new CalendarCalendarListWatchRequest() {{
                channel = new Channel() {{
                    address = "78232 Leannon Lane";
                    expiration = "sit";
                    id = "b326b5a7-3429-4cdb-9a84-22bb679d2322";
                    kind = "odio";
                    params = new java.util.HashMap<String, String>() {{
                        put("ullam", "nam");
                    }};
                    payload = false;
                    resourceId = "hic";
                    resourceUri = "voluptatem";
                    token = "cumque";
                    type = "soluta";
                }};;
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "et";
                maxResults = 903720L;
                minAccessRole = CalendarCalendarListWatchMinAccessRoleEnum.FREE_BUSY_READER;
                oauthToken = "veritatis";
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                showDeleted = false;
                showHidden = false;
                syncToken = "tempore";
                userIp = "cupiditate";
            }};            

            CalendarCalendarListWatchResponse res = sdk.calendarList.calendarCalendarListWatch(req, new CalendarCalendarListWatchSecurity() {{
                option1 = new CalendarCalendarListWatchSecurityOption1("aperiam", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
