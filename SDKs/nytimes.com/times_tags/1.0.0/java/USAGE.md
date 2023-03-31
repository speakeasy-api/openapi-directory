<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetTimestagsFilterEnum;
import org.openapis.openapi.models.operations.GetTimestagsQueryParams;
import org.openapis.openapi.models.operations.GetTimestagsRequest;
import org.openapis.openapi.models.operations.GetTimestagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetTimestagsRequest req = new GetTimestagsRequest() {{
                queryParams = new GetTimestagsQueryParams() {{
                    filter = "Org";
                    max = 592845;
                    query = "distinctio";
                }};
            }};            

            GetTimestagsResponse res = sdk.getTimestags(req);

            if (res.getTimestags200ApplicationJSONArrays.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->