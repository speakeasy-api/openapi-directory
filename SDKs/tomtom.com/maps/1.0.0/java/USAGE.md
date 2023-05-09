<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsFormatRequest req = new GetMapVersionNumberCopyrightsFormatRequest(GetMapVersionNumberCopyrightsFormatFormatEnum.JSONP, GetMapVersionNumberCopyrightsFormatVersionNumberEnum.ONE) {{
                callback = "distinctio";
            }};            

            GetMapVersionNumberCopyrightsFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->