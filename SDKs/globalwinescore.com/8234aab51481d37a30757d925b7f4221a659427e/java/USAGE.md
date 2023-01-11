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
                    limit = 8086289725498386086;
                    lwin = "architecto";
                    lwin11 = "beatae";
                    offset = 8436827725763183950;
                    ordering = "date";
                    vintage = "hic";
                    wineId = new Long[]() {{
                        add(536448273514821351),
                        add(2679765305844388554),
                        add(130050936231533110),
                    }};
                }};
                headers = new GetGlobalwinescoresLatestHeaders() {{
                    authorization = "voluptatibus";
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