<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonSecurity;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonQueryParams;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonRequest;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsBestSellersHistoryJsonRequest req = new GETListsBestSellersHistoryJsonRequest() {{
                security = new GETListsBestSellersHistoryJsonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GETListsBestSellersHistoryJsonQueryParams() {{
                    ageGroup = "corrupti";
                    author = "provident";
                    contributor = "distinctio";
                    isbn = "quibusdam";
                    price = "unde";
                    publisher = "nulla";
                    title = "Ms.";
                }};
            }};            

            GETListsBestSellersHistoryJsonResponse res = sdk.getListsBestSellersHistoryJson(req);

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->