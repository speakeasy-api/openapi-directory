# settings

## Overview

Operations to manage app-level webhook settings.

### Available Operations

* [deleteWebhooksV3AppIdSettingsClear](#deletewebhooksv3appidsettingsclear)
* [getWebhooksV3AppIdSettingsGetAll](#getwebhooksv3appidsettingsgetall)
* [putWebhooksV3AppIdSettingsConfigure](#putwebhooksv3appidsettingsconfigure)

## deleteWebhooksV3AppIdSettingsClear

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearResponse;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSettingsClearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksV3AppIdSettingsClearRequest req = new DeleteWebhooksV3AppIdSettingsClearRequest(715190);            

            DeleteWebhooksV3AppIdSettingsClearResponse res = sdk.settings.deleteWebhooksV3AppIdSettingsClear(req, new DeleteWebhooksV3AppIdSettingsClearSecurity("quibusdam") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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

## getWebhooksV3AppIdSettingsGetAll

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSettingsGetAllRequest;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSettingsGetAllResponse;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSettingsGetAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksV3AppIdSettingsGetAllRequest req = new GetWebhooksV3AppIdSettingsGetAllRequest(602763);            

            GetWebhooksV3AppIdSettingsGetAllResponse res = sdk.settings.getWebhooksV3AppIdSettingsGetAll(req, new GetWebhooksV3AppIdSettingsGetAllSecurity("nulla") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.settingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWebhooksV3AppIdSettingsConfigure

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWebhooksV3AppIdSettingsConfigureRequest;
import org.openapis.openapi.models.operations.PutWebhooksV3AppIdSettingsConfigureResponse;
import org.openapis.openapi.models.operations.PutWebhooksV3AppIdSettingsConfigureSecurity;
import org.openapis.openapi.models.shared.SettingsChangeRequest;
import org.openapis.openapi.models.shared.ThrottlingSettings;
import org.openapis.openapi.models.shared.ThrottlingSettingsPeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWebhooksV3AppIdSettingsConfigureRequest req = new PutWebhooksV3AppIdSettingsConfigureRequest(                new SettingsChangeRequest("corrupti",                 new ThrottlingSettings(847252, ThrottlingSettingsPeriodEnum.SECONDLY););, 623564);            

            PutWebhooksV3AppIdSettingsConfigureResponse res = sdk.settings.putWebhooksV3AppIdSettingsConfigure(req, new PutWebhooksV3AppIdSettingsConfigureSecurity("deserunt") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.settingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
