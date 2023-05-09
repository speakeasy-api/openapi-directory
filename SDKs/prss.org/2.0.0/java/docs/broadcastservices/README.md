# broadcastServices

## Overview

Broadcast services can subscribe to content for multiple destinations.

### Available Operations

* [getApiV2Broadcastservices](#getapiv2broadcastservices) - Gets broadcast services matching the given criteria.
* [getApiV2BroadcastservicesId](#getapiv2broadcastservicesid) - Returns the broadcast service matching the given ID.

## getApiV2Broadcastservices

Gets broadcast services matching the given criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesResponse;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesRequest req = new GetApiV2BroadcastservicesRequest() {{
                orderById = GetApiV2BroadcastservicesOrderByIDEnum.DESC;
                pageSize = 857946;
                pageStart = 544883;
            }};            

            GetApiV2BroadcastservicesResponse res = sdk.broadcastServices.getApiV2Broadcastservices(req, new GetApiV2BroadcastservicesSecurity("illum") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.episodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2BroadcastservicesId

Returns the broadcast service matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesIdRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesIdResponse;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesIdRequest req = new GetApiV2BroadcastservicesIdRequest(423655L);            

            GetApiV2BroadcastservicesIdResponse res = sdk.broadcastServices.getApiV2BroadcastservicesId(req, new GetApiV2BroadcastservicesIdSecurity("error") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.broadcastService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
