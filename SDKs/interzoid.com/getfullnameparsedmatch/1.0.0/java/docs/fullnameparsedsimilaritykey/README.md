# fullNameParsedSimilarityKey

### Available Operations

* [getfullnameparsedmatch](#getfullnameparsedmatch) - Gets a similarity key for matching purposes for parsed full name data

## getfullnameparsedmatch

Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfullnameparsedmatchRequest;
import org.openapis.openapi.models.operations.GetfullnameparsedmatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetfullnameparsedmatchRequest req = new GetfullnameparsedmatchRequest("quibusdam", "unde", "nulla");            

            GetfullnameparsedmatchResponse res = sdk.fullNameParsedSimilarityKey.getfullnameparsedmatch(req);

            if (res.getfullnameparsedmatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
