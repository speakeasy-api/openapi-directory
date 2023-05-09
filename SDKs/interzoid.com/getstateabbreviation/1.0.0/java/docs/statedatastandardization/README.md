# stateDataStandardization

### Available Operations

* [getstateabbreviation](#getstateabbreviation) - Gets a two-letter abbreviation for a state or province name data

## getstateabbreviation

Gets a two-letter abbreviation for a state or province given a permutation of state or province data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetstateabbreviationRequest;
import org.openapis.openapi.models.operations.GetstateabbreviationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetstateabbreviationRequest req = new GetstateabbreviationRequest("distinctio", "quibusdam");            

            GetstateabbreviationResponse res = sdk.stateDataStandardization.getstateabbreviation(req);

            if (res.getstateabbreviation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
