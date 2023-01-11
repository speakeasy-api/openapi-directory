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

            GetListsBestSellersHistoryJsonRequest req = new GetListsBestSellersHistoryJsonRequest() {{
                security = new GetListsBestSellersHistoryJsonSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetListsBestSellersHistoryJsonQueryParams() {{
                    ageGroup = "sit";
                    author = "voluptas";
                    contributor = "culpa";
                    isbn = "expedita";
                    price = "consequuntur";
                    publisher = "dolor";
                    title = "expedita";
                }};
            }};

            GetListsBestSellersHistoryJsonResponse res = sdk.getListsBestSellersHistoryJson(req);

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->