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

            GetApiCardRequest req = new GetApiCardRequest() {{
                queryParams = new GetApiCardQueryParams() {{
                    type = "debitis";
                }};
                headers = new GetApiCardHeaders() {{
                    xApiKey = "vel";
                }};
            }};

            GetApiCardResponse res = sdk.card.getApiCard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->