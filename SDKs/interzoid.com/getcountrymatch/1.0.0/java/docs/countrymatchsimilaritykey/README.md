# countryMatchSimilarityKey

### Available Operations

* [getcountrymatch](#getcountrymatch) - Gets a similarity key for matching purposes for country name data

## getcountrymatch

Gets a similarity key to use for matching purposes for country name data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcountrymatchRequest;
import org.openapis.openapi.models.operations.GetcountrymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcountrymatchRequest req = new GetcountrymatchRequest("distinctio", "quibusdam");            

            GetcountrymatchResponse res = sdk.countryMatchSimilarityKey.getcountrymatch(req);

            if (res.getcountrymatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
