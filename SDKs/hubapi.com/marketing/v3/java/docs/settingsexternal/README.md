# settingsExternal

### Available Operations

* [getMarketingV3MarketingEventsAppIdSettingsGetAll](#getmarketingv3marketingeventsappidsettingsgetall)
* [postMarketingV3MarketingEventsAppIdSettingsCreate](#postmarketingv3marketingeventsappidsettingscreate)

## getMarketingV3MarketingEventsAppIdSettingsGetAll

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest req = new GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest(325685);            

            GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse res = sdk.settingsExternal.getMarketingV3MarketingEventsAppIdSettingsGetAll(req, new GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity() {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventDetailSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsAppIdSettingsCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;
import org.openapis.openapi.models.shared.EventDetailSettingsUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsAppIdSettingsCreateRequest req = new PostMarketingV3MarketingEventsAppIdSettingsCreateRequest(                new EventDetailSettingsUrl("nisi");, 147014);            

            PostMarketingV3MarketingEventsAppIdSettingsCreateResponse res = sdk.settingsExternal.postMarketingV3MarketingEventsAppIdSettingsCreate(req, new PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity() {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventDetailSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
