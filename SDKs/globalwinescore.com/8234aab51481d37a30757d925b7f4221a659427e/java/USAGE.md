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
                    tokenAuthentication = new SchemeTokenAuthentication() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetGlobalwinescoresLatestRequest req = new GetGlobalwinescoresLatestRequest() {{
                queryParams = new GetGlobalwinescoresLatestQueryParams() {{
                    color = "red";
                    isPrimeurs = false;
                    limit = 6050128673802995827;
                    lwin = "expedita";
                    lwin11 = "consequuntur";
                    offset = 2669985732393126063;
                    ordering = "-score";
                    vintage = "voluptas";
                    wineId = new Long[]() {{
                        add(1543572285742637646),
                    }};
                }};
                headers = new GetGlobalwinescoresLatestHeaders() {{
                    authorization = "nihil";
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