<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AddExpiryListingsRequest req = new AddExpiryListingsRequest() {{
                request = new AddExpiryListingsRequests() {{
                    aftermarketListingExpiryCreates = new Object[]() {{
                        add("ipsum"),
                        add("repellat"),
                        add("dolorem"),
                    }};
                    applicationXML = "est".getBytes();
                    textXML = "mollitia".getBytes();
                }};
            }};

            AddExpiryListingsResponse res = sdk.v1.addExpiryListings(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->