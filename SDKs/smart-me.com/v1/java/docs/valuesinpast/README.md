# valuesInPast

### Available Operations

* [valuesInPastGet](#valuesinpastget) - Gets all (last) values of a device
            The first Value found before the given Date is returned.

## valuesInPastGet

Gets the Values for a device at a given Date. The first Value found before the given Date is returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValuesInPastGetRequest;
import org.openapis.openapi.models.operations.ValuesInPastGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValuesInPastGetRequest req = new ValuesInPastGetRequest(OffsetDateTime.parse("2022-05-19T10:07:39.882Z"), "incidunt");            

            ValuesInPastGetResponse res = sdk.valuesInPast.valuesInPastGet(req);

            if (res.valuesData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
