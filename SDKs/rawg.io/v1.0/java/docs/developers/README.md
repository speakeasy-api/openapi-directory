# developers

### Available Operations

* [developersList](#developerslist) - Get a list of game developers.
* [developersRead](#developersread) - Get details of the developer.

## developersList

Get a list of game developers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevelopersListRequest;
import org.openapis.openapi.models.operations.DevelopersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevelopersListRequest req = new DevelopersListRequest() {{
                page = 847252L;
                pageSize = 423655L;
            }};            

            DevelopersListResponse res = sdk.developers.developersList(req);

            if (res.developersList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## developersRead

Get details of the developer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevelopersReadRequest;
import org.openapis.openapi.models.operations.DevelopersReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevelopersReadRequest req = new DevelopersReadRequest(623564L);            

            DevelopersReadResponse res = sdk.developers.developersRead(req);

            if (res.developerSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
