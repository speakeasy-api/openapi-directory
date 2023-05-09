<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetRequest;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetResponse;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesFindPlacesGetRequest req = new FindPlacesFindPlacesGetRequest("corrupti") {{
                key = "provident";
                language = FindPlacesFindPlacesGetLanguageLanguageEnum.PL;
            }};            

            FindPlacesFindPlacesGetResponse res = sdk.locationEndpoints.findPlacesFindPlacesGet(req, new FindPlacesFindPlacesGetSecurity("quibusdam") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.findPlacesModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->