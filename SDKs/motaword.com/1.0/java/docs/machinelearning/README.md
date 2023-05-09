# machineLearning

### Available Operations

* [getDeliveryPrediction](#getdeliveryprediction) - Get a delivery prediction for a project

## getDeliveryPrediction

Get a delivery prediction for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliveryPredictionResponse;
import org.openapis.openapi.models.shared.DeliveryPredictionPayload;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeliveryPredictionPayload req = new DeliveryPredictionPayload() {{
                projectId = 120657L;
            }};            

            GetDeliveryPredictionResponse res = sdk.machineLearning.getDeliveryPrediction(req);

            if (res.deliveryPredictionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
