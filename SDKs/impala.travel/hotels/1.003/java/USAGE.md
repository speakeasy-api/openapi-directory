<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelBookingPathParams;
import org.openapis.openapi.models.operations.CancelBookingRequest;
import org.openapis.openapi.models.operations.CancelBookingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuthentication = new SchemeAPIKeyAuthentication() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CancelBookingRequest req = new CancelBookingRequest() {{
                pathParams = new CancelBookingPathParams() {{
                    bookingId = "corrupti";
                }};
            }};            

            CancelBookingResponse res = sdk.bookings.cancelBooking(req);

            if (res.booking.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->