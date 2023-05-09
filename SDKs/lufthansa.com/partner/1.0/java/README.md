# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest("corrupti", "provident");            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req, new BaggageTripAndContactSecurity("distinctio") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [baggage](docs/baggage/README.md)

* [baggageTripAndContact](docs/baggage/README.md#baggagetripandcontact) - Baggage Trip and Contact

### [offers](docs/offers/README.md)

* [allFares](docs/offers/README.md#allfares) - All Fares
* [bestFares](docs/offers/README.md#bestfares) - Best Fares
* [deepLinks](docs/offers/README.md#deeplinks) - Deep Links
* [fares](docs/offers/README.md#fares) - Fares
* [faresSubscriptions](docs/offers/README.md#faressubscriptions) - Fares Subscriptions
* [lhDeepLinksFFP](docs/offers/README.md#lhdeeplinksffp) - LH Deep Links - FFP
* [lhDeepLinksITCO](docs/offers/README.md#lhdeeplinksitco) - LH Deep Links - ITCO
* [lowestFares](docs/offers/README.md#lowestfares) - Lowest Fares
* [ondRoute](docs/offers/README.md#ondroute) - OND Route
* [ondStatus](docs/offers/README.md#ondstatus) - OND Status
* [topOND](docs/offers/README.md#topond) - Top OND

### [orders](docs/orders/README.md)

* [orders](docs/orders/README.md#orders) - Orders

### [preflight](docs/preflight/README.md)

* [autoCheckIn](docs/preflight/README.md#autocheckin) - Auto Check-In

### [promotions](docs/promotions/README.md)

* [priceOffers](docs/promotions/README.md#priceoffers) - Price Offers

### [referenceData](docs/referencedata/README.md)

* [seatDetails](docs/referencedata/README.md#seatdetails) - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
