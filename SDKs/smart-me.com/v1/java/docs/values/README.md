# values

### Available Operations

* [valuesGet](#valuesget) - Gets all (last) values of a device

## valuesGet

Gets all (last) values of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValuesGetRequest;
import org.openapis.openapi.models.operations.ValuesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValuesGetRequest req = new ValuesGetRequest("praesentium");            

            ValuesGetResponse res = sdk.values.valuesGet(req);

            if (res.valuesData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
