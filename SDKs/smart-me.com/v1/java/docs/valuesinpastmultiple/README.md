# valuesInPastMultiple

### Available Operations

* [valuesInPastMultipleGet](#valuesinpastmultipleget) - Gets multiple values of a device. This call needs a smart-me professional licence.

## valuesInPastMultipleGet

Gets multiple values of a device. This call needs a smart-me professional licence.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValuesInPastMultipleGetRequest;
import org.openapis.openapi.models.operations.ValuesInPastMultipleGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValuesInPastMultipleGetRequest req = new ValuesInPastMultipleGetRequest(OffsetDateTime.parse("2022-02-08T08:59:54.184Z"), "rem", 26522, OffsetDateTime.parse("2021-02-14T22:16:10.503Z"));            

            ValuesInPastMultipleGetResponse res = sdk.valuesInPastMultiple.valuesInPastMultipleGet(req);

            if (res.valuesData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
