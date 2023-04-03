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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelBookingRequest;
import org.openapis.openapi.models.operations.CancelBookingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelBookingRequest req = new CancelBookingRequest() {{
                bookingId = "corrupti";
            }}            

            CancelBookingResponse res = sdk.bookings.cancelBooking(req);

            if (res.booking.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bookings

* `cancelBooking` - Cancel a booking
* `createBooking` - Create a booking
* `listBookings` - List all bookings
* `retrieveBooking` - Retrieve a booking
* `updateBooking` - Change a booking
* `updateBookingContact` - Change a booking contact

### hotels

* `listHotels` - List all hotels
* `retrieveHotel` - Retrieve a hotel

### rateCalendar

* `listRatePlanForHotelForRatePlanId` - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* `listRatePlansForHotel` - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
