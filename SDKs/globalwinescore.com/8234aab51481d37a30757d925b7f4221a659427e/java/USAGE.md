<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestColorEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestOrderingEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestRequest;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    tokenAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGlobalwinescoresLatestRequest req = new GetGlobalwinescoresLatestRequest() {{
                authorization = "provident";
                color = GetGlobalwinescoresLatestColorEnum.PINK;
                isPrimeurs = false;
                limit = 844266L;
                lwin = "unde";
                lwin11 = "nulla";
                offset = 544883L;
                ordering = GetGlobalwinescoresLatestOrderingEnum.MINUS_SCORE;
                vintage = "vel";
                wineId = new Long[]{{
                    add(645894L),
                    add(384382L),
                    add(437587L),
                }};
            }};            

            GetGlobalwinescoresLatestResponse res = sdk.globalWineScore.getGlobalwinescoresLatest(req);

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