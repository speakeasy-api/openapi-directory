# virtualTariffConsumption

### Available Operations

* [virtualTariffConsumptionGet](#virtualtariffconsumptionget) - Gets the consumption of a folder with a virtuall tariffs.

## virtualTariffConsumptionGet

Gets the consumption of a folder with a virtuall tariffs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualTariffConsumptionGetRequest;
import org.openapis.openapi.models.operations.VirtualTariffConsumptionGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualTariffConsumptionGetRequest req = new VirtualTariffConsumptionGetRequest(OffsetDateTime.parse("2021-07-21T08:55:46.635Z"), "tenetur", OffsetDateTime.parse("2022-12-31T00:19:10.437Z"));            

            VirtualTariffConsumptionGetResponse res = sdk.virtualTariffConsumption.virtualTariffConsumptionGet(req);

            if (res.virtualTariffConsumptionData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
