# predictions

### Available Operations

* [predictions](#predictions) - Get predictions for a given year

## predictions

Get all predictions for a given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictionsRequest;
import org.openapis.openapi.models.operations.PredictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictionsRequest req = new PredictionsRequest() {{
                year = 844266L;
            }};            

            PredictionsResponse res = sdk.predictions.predictions(req);

            if (res.predictions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
