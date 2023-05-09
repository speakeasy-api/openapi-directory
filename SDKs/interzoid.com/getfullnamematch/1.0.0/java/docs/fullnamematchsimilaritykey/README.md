# fullNameMatchSimilarityKey

### Available Operations

* [getfullnamematch](#getfullnamematch) - Gets a similarity key for matching purposes for full name data

## getfullnamematch

Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfullnamematchRequest;
import org.openapis.openapi.models.operations.GetfullnamematchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetfullnamematchRequest req = new GetfullnamematchRequest("distinctio", "quibusdam");            

            GetfullnamematchResponse res = sdk.fullNameMatchSimilarityKey.getfullnamematch(req);

            if (res.getfullnamematch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
