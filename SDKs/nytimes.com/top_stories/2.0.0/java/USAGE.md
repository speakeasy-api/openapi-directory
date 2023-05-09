<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionFormatFormatEnum;
import org.openapis.openapi.models.operations.GetSectionFormatRequest;
import org.openapis.openapi.models.operations.GetSectionFormatResponse;
import org.openapis.openapi.models.operations.GetSectionFormatSectionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSectionFormatRequest req = new GetSectionFormatRequest(GetSectionFormatFormatEnum.JSONP, GetSectionFormatSectionEnum.TMAGAZINE) {{
                callback = "quibusdam";
            }};            

            GetSectionFormatResponse res = sdk.stories.getSectionFormat(req);

            if (res.getSectionFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->