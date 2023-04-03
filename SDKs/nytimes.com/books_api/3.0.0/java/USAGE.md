<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonSecurity;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonRequest;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsBestSellersHistoryJsonRequest req = new GETListsBestSellersHistoryJsonRequest() {{
                ageGroup = "corrupti";
                author = "provident";
                contributor = "distinctio";
                isbn = "quibusdam";
                price = "unde";
                publisher = "nulla";
                title = "Ms.";
            }}            

            GETListsBestSellersHistoryJsonResponse res = sdk.getListsBestSellersHistoryJson(req, new GETListsBestSellersHistoryJsonSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->