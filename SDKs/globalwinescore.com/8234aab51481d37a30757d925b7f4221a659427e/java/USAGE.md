<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestColorEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestOrderingEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestQueryParams;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestHeaders;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestRequest;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    tokenAuthentication = new SchemeTokenAuthentication() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetGlobalwinescoresLatestRequest req = new GetGlobalwinescoresLatestRequest() {{
                queryParams = new GetGlobalwinescoresLatestQueryParams() {{
                    color = "white";
                    isPrimeurs = false;
                    limit = 592845;
                    lwin = "distinctio";
                    lwin11 = "quibusdam";
                    offset = 602763;
                    ordering = "-score";
                    vintage = "corrupti";
                    wineId = new Long[]{{
                        add(423655),
                        add(623564),
                        add(645894),
                        add(384382),
                    }};
                }};
                headers = new GetGlobalwinescoresLatestHeaders() {{
                    authorization = "iure";
                }};
            }};            

            GetGlobalwinescoresLatestResponse res = sdk.globalWineScore.getGlobalwinescoresLatest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->