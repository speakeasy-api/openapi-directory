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
                        addressLine1 = "ea";
                        addressLine2 = "maxime";
                        addressLine3 = "eum";
                        addressResidentialIndicator = new java.util.HashMap<String, Object>() {{
                            put("et", "rerum");
                            put("reiciendis", "quis");
                        }};
                        cityLocality = "cumque";
                        companyName = "minima";
                        countryCode = "necessitatibus";
                        name = "est";
                        phone = "quis";
                        postalCode = "eum";
                        stateProvince = "labore";
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