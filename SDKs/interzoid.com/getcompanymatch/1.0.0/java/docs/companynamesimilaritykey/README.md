# companyNameSimilarityKey

### Available Operations

* [getcompanymatch](#getcompanymatch) - Gets a similarity key for matching purposes for company name data

## getcompanymatch

Gets a similarity key for matching purposes for company name data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcompanymatchRequest;
import org.openapis.openapi.models.operations.GetcompanymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcompanymatchRequest req = new GetcompanymatchRequest("distinctio", "quibusdam");            

            GetcompanymatchResponse res = sdk.companyNameSimilarityKey.getcompanymatch(req);

            if (res.getcompanymatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
