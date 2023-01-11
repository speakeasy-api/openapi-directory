<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BookingAvailabilityRequest req = new BookingAvailabilityRequest() {{
                headers = new BookingAvailabilityHeaders() {{
                    acceptLanguage = "sit";
                }};
                request = new BookingAvailabilityRequestBody() {{
                    ageBands = new openapisdk.models.operations.BookingAvailabilityRequestBodyAgeBands[]() {{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 6050128673802995827;
                            count = 501233450539197794;
                        }}),
                    }};
                    currencyCode = "consequuntur";
                    month = "dolor";
                    productCode = "expedita";
                    year = "voluptas";
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