<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ParseAddressRequest;
import org.openapis.openapi.models.operations.ParseAddressResponse;
import org.openapis.openapi.models.shared.ParseAddressRequestBody;
import org.openapis.openapi.models.shared.PartialAddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.PartialAddress;

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

            ParseAddressRequest req = new ParseAddressRequest() {{
                request = new ParseAddressRequestBody() {{
                    address = new PartialAddress() {{
                        addressLine1 = "1999 Bishop Grandin Blvd.";
                        addressLine2 = "Unit 408";
                        addressLine3 = "Building #7";
                        addressResidentialIndicator = "no";
                        cityLocality = "Winnipeg";
                        companyName = "The Home Depot";
                        countryCode = "CA";
                        email = "example@example.com";
                        name = "John Doe";
                        phone = "+1 204-253-9411 ext. 123";
                        postalCode = "78756-3717";
                        stateProvince = "Manitoba";
                    }};
                    text = "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.";
                }};
            }};            

            ParseAddressResponse res = sdk.addresses.parseAddress(req);

            if (res.parseAddressResponseBody.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->