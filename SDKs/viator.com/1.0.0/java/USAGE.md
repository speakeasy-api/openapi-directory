<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingAvailabilityRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands;
import org.openapis.openapi.models.operations.BookingAvailabilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingAvailabilityRequest req = new BookingAvailabilityRequest("en-US") {{
                requestBody = new BookingAvailabilityRequestBody() {{
                    ageBands = new org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands[]{{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 592845L;
                            count = 715190L;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 844266L;
                            count = 602763L;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 857946L;
                            count = 544883L;
                        }}),
                    }};
                    currencyCode = "illum";
                    month = "vel";
                    productCode = "error";
                    year = "deserunt";
                }};;
            }};            

            BookingAvailabilityResponse res = sdk.bookingServices.bookingAvailability(req);

            if (res.bookingAvailability200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->