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

            ParseAddressRequest req = new ParseAddressRequest() {{
                request = new ParseAddressRequestBody() {{
                    address = new PartialAddress() {{
                        addressLine1 = "sit";
                        addressLine2 = "voluptas";
                        addressLine3 = "culpa";
                        addressResidentialIndicator = new java.util.HashMap<String, Object>() {{
                            put("consequuntur", "dolor");
                            put("expedita", "voluptas");
                        }};
                        cityLocality = "fugit";
                        companyName = "et";
                        countryCode = "nihil";
                        name = "rerum";
                        phone = "dicta";
                        postalCode = "debitis";
                        stateProvince = "voluptatum";
                    }};
                    text = "et";
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