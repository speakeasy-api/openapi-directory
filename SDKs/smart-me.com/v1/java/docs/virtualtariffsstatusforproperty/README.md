# virtualTariffsStatusForProperty

### Available Operations

* [virtualTariffsStatusForPropertyGet](#virtualtariffsstatusforpropertyget) - Gets the calculation status for a virtual tariff property

## virtualTariffsStatusForPropertyGet

Gets the calculation status for a virtual tariff property

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualTariffsStatusForPropertyGetRequest;
import org.openapis.openapi.models.operations.VirtualTariffsStatusForPropertyGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualTariffsStatusForPropertyGetRequest req = new VirtualTariffsStatusForPropertyGetRequest("deserunt");            

            VirtualTariffsStatusForPropertyGetResponse res = sdk.virtualTariffsStatusForProperty.virtualTariffsStatusForPropertyGet(req);

            if (res.virtualTariffsStatusForPropertyGet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
