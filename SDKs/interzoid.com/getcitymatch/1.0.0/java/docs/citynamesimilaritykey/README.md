# cityNameSimilarityKey

### Available Operations

* [getcitymatch](#getcitymatch) - Gets a similarity key for matching purposes for city name data

## getcitymatch

Gets a similarity key for matching purposes for city name data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcitymatchRequest;
import org.openapis.openapi.models.operations.GetcitymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcitymatchRequest req = new GetcitymatchRequest("distinctio", "quibusdam");            

            GetcitymatchResponse res = sdk.cityNameSimilarityKey.getcitymatch(req);

            if (res.getcitymatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
