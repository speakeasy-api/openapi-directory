<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatPathParams;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatQueryParams;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetMapVersionNumberCopyrightsFormatRequest req = new GetMapVersionNumberCopyrightsFormatRequest() {{
                pathParams = new GetMapVersionNumberCopyrightsFormatPathParams() {{
                    format = "jsonp";
                    versionNumber = "1";
                }};
                queryParams = new GetMapVersionNumberCopyrightsFormatQueryParams() {{
                    callback = "provident";
                }};
            }};            

            GetMapVersionNumberCopyrightsFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->