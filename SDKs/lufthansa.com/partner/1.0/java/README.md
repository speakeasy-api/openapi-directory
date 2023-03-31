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

import org.openapis.openapi.models.operations.BaggageTripAndContactSecurity;
import org.openapis.openapi.models.operations.BaggageTripAndContactPathParams;
import org.openapis.openapi.models.operations.BaggageTripAndContactHeaders;
import org.openapis.openapi.models.operations.BaggageTripAndContactRequest;
import org.openapis.openapi.models.operations.BaggageTripAndContactResponse;
import org.openapis.openapi.models.shared.SchemeAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest() {{
                security = new BaggageTripAndContactSecurity() {{
                    auth = new SchemeAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaggageTripAndContactPathParams() {{
                    searchID = "corrupti";
                }};
                headers = new BaggageTripAndContactHeaders() {{
                    accept = "provident";
                }};
            }};            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req);

            if (res.baggageTripAndContact200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### baggage

* `baggageTripAndContact` - Baggage Trip and Contact

### offers

* `allFares` - All Fares
* `bestFares` - Best Fares
* `deepLinks` - Deep Links
* `fares` - Fares
* `faresSubscriptions` - Fares Subscriptions
* `lhDeepLinksFFP` - LH Deep Links - FFP
* `lhDeepLinksITCO` - LH Deep Links - ITCO
* `lowestFares` - Lowest Fares
* `ondRoute` - OND Route
* `ondStatus` - OND Status
* `topOND` - Top OND

### orders

* `orders` - Orders

### preflight

* `autoCheckIn` - Auto Check-In

### promotions

* `priceOffers` - Price Offers

### referenceData

* `seatDetails` - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
