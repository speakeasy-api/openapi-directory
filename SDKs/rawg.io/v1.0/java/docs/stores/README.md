# stores

### Available Operations

* [storesList](#storeslist) - Get a list of video game storefronts.
* [storesRead](#storesread) - Get details of the store.

## storesList

Get a list of video game storefronts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresListRequest;
import org.openapis.openapi.models.operations.StoresListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresListRequest req = new StoresListRequest() {{
                ordering = "natus";
                page = 149675L;
                pageSize = 612096L;
            }};            

            StoresListResponse res = sdk.stores.storesList(req);

            if (res.storesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storesRead

Get details of the store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresReadRequest;
import org.openapis.openapi.models.operations.StoresReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresReadRequest req = new StoresReadRequest(222321L);            

            StoresReadResponse res = sdk.stores.storesRead(req);

            if (res.storeSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
