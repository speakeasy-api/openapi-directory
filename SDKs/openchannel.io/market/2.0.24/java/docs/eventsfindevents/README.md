# eventsFindEvents

### Available Operations

* [getEventsEventId](#geteventseventid) - Returns an event

## getEventsEventId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsEventIdRequest;
import org.openapis.openapi.models.operations.GetEventsEventIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque", "facere") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetEventsEventIdRequest req = new GetEventsEventIdRequest("ea");            

            GetEventsEventIdResponse res = sdk.eventsFindEvents.getEventsEventId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
