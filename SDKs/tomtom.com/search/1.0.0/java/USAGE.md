<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtExtEnum;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberAdditionalDataExtResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberAdditionalDataExtRequest req = new GetSearchVersionNumberAdditionalDataExtRequest(GetSearchVersionNumberAdditionalDataExtExtEnum.JSON, "provident", VersionNumberEnum.TWO) {{
                geometriesZoom = GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum.SIXTEEN;
            }};            

            GetSearchVersionNumberAdditionalDataExtResponse res = sdk.additionalData.getSearchVersionNumberAdditionalDataExt(req);

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