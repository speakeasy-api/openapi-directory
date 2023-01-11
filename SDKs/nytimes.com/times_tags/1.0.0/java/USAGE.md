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
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetTimestagsRequest req = new GetTimestagsRequest() {{
                queryParams = new GetTimestagsQueryParams() {{
                    filter = "Org";
                    max = 2259404117704393152;
                    query = "culpa";
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