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
import org.openapis.openapi.models.operations.CancelBookingRequest;
import org.openapis.openapi.models.operations.CancelBookingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelBookingRequest req = new CancelBookingRequest("provident");            

            CancelBookingResponse res = sdk.bookings.cancelBooking(req);

            if (res.booking != null) {
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


### [bookings](docs/bookings/README.md)

* [cancelBooking](docs/bookings/README.md#cancelbooking) - Cancel a booking
* [createBooking](docs/bookings/README.md#createbooking) - Create a booking
* [listBookings](docs/bookings/README.md#listbookings) - List all bookings
* [retrieveBooking](docs/bookings/README.md#retrievebooking) - Retrieve a booking
* [updateBooking](docs/bookings/README.md#updatebooking) - Change a booking
* [updateBookingContact](docs/bookings/README.md#updatebookingcontact) - Change a booking contact

### [hotels](docs/hotels/README.md)

* [listHotels](docs/hotels/README.md#listhotels) - List all hotels
* [retrieveHotel](docs/hotels/README.md#retrievehotel) - Retrieve a hotel

### [rateCalendar](docs/ratecalendar/README.md)

* [listRatePlanForHotelForRatePlanId](docs/ratecalendar/README.md#listrateplanforhotelforrateplanid) - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* [listRatePlansForHotel](docs/ratecalendar/README.md#listrateplansforhotel) - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
