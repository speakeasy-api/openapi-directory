<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetSectionFormatFormatEnum;
import org.openapis.openapi.models.operations.GetSectionFormatSectionEnum;
import org.openapis.openapi.models.operations.GetSectionFormatPathParams;
import org.openapis.openapi.models.operations.GetSectionFormatQueryParams;
import org.openapis.openapi.models.operations.GetSectionFormatRequest;
import org.openapis.openapi.models.operations.GetSectionFormatResponse;

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

            GetSectionFormatRequest req = new GetSectionFormatRequest() {{
                pathParams = new GetSectionFormatPathParams() {{
                    format = "jsonp";
                    section = "theater";
                }};
                queryParams = new GetSectionFormatQueryParams() {{
                    callback = "distinctio";
                }};
            }};            

            GetSectionFormatResponse res = sdk.stories.getSectionFormat(req);

            if (res.getSectionFormat200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->