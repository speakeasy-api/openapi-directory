# promotions

### Available Operations

* [priceOffers](#priceoffers) - Price Offers

## priceOffers

Retrieve a best price offer given an origin and destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PriceOffersRequest;
import org.openapis.openapi.models.operations.PriceOffersResponse;
import org.openapis.openapi.models.operations.PriceOffersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PriceOffersRequest req = new PriceOffersRequest("error", "temporibus", "laborum", "quasi") {{
                service = "reiciendis";
            }};            

            PriceOffersResponse res = sdk.promotions.priceOffers(req, new PriceOffersSecurity("voluptatibus") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.priceOffers200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
