# publishers

### Available Operations

* [publishersList](#publisherslist) - Get a list of video game publishers.
* [publishersRead](#publishersread) - Get details of the publisher.

## publishersList

Get a list of video game publishers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishersListRequest;
import org.openapis.openapi.models.operations.PublishersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishersListRequest req = new PublishersListRequest() {{
                page = 135218L;
                pageSize = 18789L;
            }};            

            PublishersListResponse res = sdk.publishers.publishersList(req);

            if (res.publishersList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishersRead

Get details of the publisher.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishersReadRequest;
import org.openapis.openapi.models.operations.PublishersReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishersReadRequest req = new PublishersReadRequest(324141L);            

            PublishersReadResponse res = sdk.publishers.publishersRead(req);

            if (res.publisherSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
