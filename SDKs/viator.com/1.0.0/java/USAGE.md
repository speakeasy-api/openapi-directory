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
                    acceptLanguage = "possimus";
                }};
                request = new BookingAvailabilityRequestBody() {{
                    ageBands = new openapisdk.models.operations.BookingAvailabilityRequestBodyAgeBands[]() {{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 3335198230263325045;
                            count = 5635747801292324080;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 2849534501507876885;
                            count = 205860177557125077;
                        }}),
                    }};
                    currencyCode = "inventore";
                    month = "omnis";
                    productCode = "veritatis";
                    year = "minus";
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