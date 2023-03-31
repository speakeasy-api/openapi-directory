<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetSecurity;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetQueryParams;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetRequest;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesFindPlacesGetRequest req = new FindPlacesFindPlacesGetRequest() {{
                security = new FindPlacesFindPlacesGetSecurity() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new FindPlacesFindPlacesGetQueryParams() {{
                    key = "corrupti";
                    language = "fr";
                    text = "distinctio";
                }};
            }};            

            FindPlacesFindPlacesGetResponse res = sdk.locationEndpoints.findPlacesFindPlacesGet(req);

            if (res.findPlacesModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->