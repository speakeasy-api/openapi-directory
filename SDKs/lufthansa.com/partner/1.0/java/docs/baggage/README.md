# baggage

### Available Operations

* [baggageTripAndContact](#baggagetripandcontact) - Baggage Trip and Contact

## baggageTripAndContact

Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaggageTripAndContactRequest;
import org.openapis.openapi.models.operations.BaggageTripAndContactResponse;
import org.openapis.openapi.models.operations.BaggageTripAndContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest("quibusdam", "unde");            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req, new BaggageTripAndContactSecurity("nulla") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.baggageTripAndContact200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
