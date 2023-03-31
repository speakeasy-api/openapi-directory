<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETQueryParams;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    token = new SchemeToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CurrenciesHistoryGETRequest req = new CurrenciesHistoryGETRequest() {{
                queryParams = new CurrenciesHistoryGETQueryParams() {{
                    end = "2021-10-25T05:21:43.948Z";
                    format = "xml";
                    interval = "quibusdam";
                    pairs = "unde";
                    start = "2021-05-14T08:28:11.899Z";
                }};
            }};            

            CurrenciesHistoryGETResponse res = sdk.currencies.currenciesHistoryGET(req);

            if (res.intervalCollectionResponses.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->