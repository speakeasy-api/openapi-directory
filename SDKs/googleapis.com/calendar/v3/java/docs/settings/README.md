# settings

### Available Operations

* [calendarSettingsGet](#calendarsettingsget) - Returns a single user setting.
* [calendarSettingsList](#calendarsettingslist) - Returns all user settings for the authenticated user.
* [calendarSettingsWatch](#calendarsettingswatch) - Watch for changes to Settings resources.

## calendarSettingsGet

Returns a single user setting.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarSettingsGetRequest;
import org.openapis.openapi.models.operations.CalendarSettingsGetResponse;
import org.openapis.openapi.models.operations.CalendarSettingsGetSecurity;
import org.openapis.openapi.models.operations.CalendarSettingsGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarSettingsGetSecurityOption2;
import org.openapis.openapi.models.operations.CalendarSettingsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarSettingsGetRequest req = new CalendarSettingsGetRequest("quis") {{
                alt = AltEnum.JSON;
                fields = "cupiditate";
                key = "aliquam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "maiores";
                userIp = "laudantium";
            }};            

            CalendarSettingsGetResponse res = sdk.settings.calendarSettingsGet(req, new CalendarSettingsGetSecurity() {{
                option1 = new CalendarSettingsGetSecurityOption1("velit", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.setting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarSettingsList

Returns all user settings for the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarSettingsListRequest;
import org.openapis.openapi.models.operations.CalendarSettingsListResponse;
import org.openapis.openapi.models.operations.CalendarSettingsListSecurity;
import org.openapis.openapi.models.operations.CalendarSettingsListSecurityOption1;
import org.openapis.openapi.models.operations.CalendarSettingsListSecurityOption2;
import org.openapis.openapi.models.operations.CalendarSettingsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarSettingsListRequest req = new CalendarSettingsListRequest() {{
                alt = AltEnum.JSON;
                fields = "amet";
                key = "nemo";
                maxResults = 57470L;
                oauthToken = "quisquam";
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "quas";
                syncToken = "molestiae";
                userIp = "aliquid";
            }};            

            CalendarSettingsListResponse res = sdk.settings.calendarSettingsList(req, new CalendarSettingsListSecurity() {{
                option1 = new CalendarSettingsListSecurityOption1("asperiores", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.settings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarSettingsWatch

Watch for changes to Settings resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarSettingsWatchRequest;
import org.openapis.openapi.models.operations.CalendarSettingsWatchResponse;
import org.openapis.openapi.models.operations.CalendarSettingsWatchSecurity;
import org.openapis.openapi.models.operations.CalendarSettingsWatchSecurityOption1;
import org.openapis.openapi.models.operations.CalendarSettingsWatchSecurityOption2;
import org.openapis.openapi.models.operations.CalendarSettingsWatchSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarSettingsWatchRequest req = new CalendarSettingsWatchRequest() {{
                channel = new Channel() {{
                    address = "501 Johnson Unions";
                    expiration = "porro";
                    id = "bb4e243c-f789-4ffa-beda-53e5ae6e0ac1";
                    kind = "blanditiis";
                    params = new java.util.HashMap<String, String>() {{
                        put("quisquam", "eos");
                        put("nobis", "natus");
                    }};
                    payload = false;
                    resourceId = "minus";
                    resourceUri = "quia";
                    token = "magnam";
                    type = "reprehenderit";
                }};;
                alt = AltEnum.JSON;
                fields = "quod";
                key = "quos";
                maxResults = 548846L;
                oauthToken = "amet";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "amet";
                syncToken = "laborum";
                userIp = "modi";
            }};            

            CalendarSettingsWatchResponse res = sdk.settings.calendarSettingsWatch(req, new CalendarSettingsWatchSecurity() {{
                option1 = new CalendarSettingsWatchSecurityOption1("perferendis", "necessitatibus") {{
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
