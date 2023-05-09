# presences

## Overview

The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.


<https://intellifi.zendesk.com/hc/en-us/articles/360008309313>
### Available Operations

* [getPresenceById](#getpresencebyid) - Get presence
* [getPresences](#getpresences) - Get all presences

## getPresenceById

Get presence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresenceByIdRequest;
import org.openapis.openapi.models.operations.GetPresenceByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresenceByIdRequest req = new GetPresenceByIdRequest("dolor");            

            GetPresenceByIdResponse res = sdk.presences.getPresenceById(req);

            if (res.presence != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresences

Get all presences

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresencesRequest;
import org.openapis.openapi.models.operations.GetPresencesResponse;
import org.openapis.openapi.models.shared.ProximityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TechnologyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresencesRequest req = new GetPresencesRequest() {{
                after = OffsetDateTime.parse("2020-02-22T17:45:21.686Z");
                afterId = "dolorum";
                before = "in";
                beforeId = "in";
                from = "illum";
                fromId = "maiores";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                item = "5b7d6cbd7503c445552a1664";
                limit = 699479L;
                location = "5b7d6cbd7503c445552a1664";
                populate = "dicta";
                proximity = ProximityEnum.IMMEDIATE;
                resultsOnly = false;
                select = "magnam";
                sort = "cumque";
                technology = TechnologyEnum.RFID;
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 8137.98;
                until = "ea";
                untilId = "aliquid";
            }};            

            GetPresencesResponse res = sdk.presences.getPresences(req);

            if (res.getPresences200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
