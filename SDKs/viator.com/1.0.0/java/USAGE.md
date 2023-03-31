<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BookingAvailabilityHeaders;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BookingAvailabilityRequest req = new BookingAvailabilityRequest() {{
                headers = new BookingAvailabilityHeaders() {{
                    acceptLanguage = "en-US";
                }};
                request = new BookingAvailabilityRequestBody() {{
                    ageBands = new org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands[]{{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 592845;
                            count = 715190;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 844266;
                            count = 602763;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 857946;
                            count = 544883;
                        }}),
                    }};
                    currencyCode = "illum";
                    month = "vel";
                    productCode = "error";
                    year = "deserunt";
                }};
            }};            

            BookingAvailabilityResponse res = sdk.bookingServices.bookingAvailability(req);

            if (res.bookingAvailability200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->