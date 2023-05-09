# platforms

### Available Operations

* [platformsList](#platformslist) - Get a list of video game platforms.
* [platformsListsParentsList](#platformslistsparentslist) - Get a list of parent platforms.
* [platformsRead](#platformsread) - Get details of the platform.

## platformsList

Get a list of video game platforms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlatformsListRequest;
import org.openapis.openapi.models.operations.PlatformsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlatformsListRequest req = new PlatformsListRequest() {{
                ordering = "modi";
                page = 186332L;
                pageSize = 774234L;
            }};            

            PlatformsListResponse res = sdk.platforms.platformsList(req);

            if (res.platformsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## platformsListsParentsList

For instance, for PS2 and PS4 the “parent platform” is PlayStation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlatformsListsParentsListRequest;
import org.openapis.openapi.models.operations.PlatformsListsParentsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlatformsListsParentsListRequest req = new PlatformsListsParentsListRequest() {{
                ordering = "cum";
                page = 456150L;
                pageSize = 216550L;
            }};            

            PlatformsListsParentsListResponse res = sdk.platforms.platformsListsParentsList(req);

            if (res.platformsListsParentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## platformsRead

Get details of the platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlatformsReadRequest;
import org.openapis.openapi.models.operations.PlatformsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlatformsReadRequest req = new PlatformsReadRequest(568434L);            

            PlatformsReadResponse res = sdk.platforms.platformsRead(req);

            if (res.platformSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
