<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAllFacilitiesSecurity;
import org.openapis.openapi.models.operations.GetAllFacilitiesAcceptEnum;
import org.openapis.openapi.models.operations.GetAllFacilitiesRequest;
import org.openapis.openapi.models.operations.GetAllFacilitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllFacilitiesRequest req = new GetAllFacilitiesRequest() {{
                accept = "application/vnd.geo+json";
            }}            

            GetAllFacilitiesResponse res = sdk.facilities.getAllFacilities(req, new GetAllFacilitiesSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.geoFacilitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->