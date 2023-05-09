# offers

### Available Operations

* [offersLoungesByLocationGet](#offersloungesbylocationget) - Lounges
* [offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet](#offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget) - Seat Maps

## offersLoungesByLocationGet

Lounge information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OffersLoungesByLocationGetRequest;
import org.openapis.openapi.models.operations.OffersLoungesByLocationGetResponse;
import org.openapis.openapi.models.operations.OffersLoungesByLocationGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OffersLoungesByLocationGetRequest req = new OffersLoungesByLocationGetRequest("delectus", "tempora") {{
                cabinClass = "suscipit";
                lang = "molestiae";
                tierCode = "minus";
            }};            

            OffersLoungesByLocationGetResponse res = sdk.offers.offersLoungesByLocationGet(req, new OffersLoungesByLocationGetSecurity("placeat") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.offersLoungesByLocationGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet

Cabin layout and seat characteristics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest;
import org.openapis.openapi.models.operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse;
import org.openapis.openapi.models.operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest req = new OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest("voluptatum", "iusto", "excepturi", "nisi", "recusandae", "temporibus");            

            OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse res = sdk.offers.offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(req, new OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity("ab") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
