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

            GetAllFacilitiesRequest req = new GetAllFacilitiesRequest() {{
                security = new GetAllFacilitiesSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new GetAllFacilitiesHeaders() {{
                    accept = "application/vnd.geo+json";
                }};
            }};

            GetAllFacilitiesResponse res = sdk.facilities.getAllFacilities(req);

            if (res.geoFacilitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->