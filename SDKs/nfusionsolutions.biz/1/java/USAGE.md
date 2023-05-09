<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesHistoryGETRequest req = new CurrenciesHistoryGETRequest("provident", OffsetDateTime.parse("2021-04-24T16:27:50.833Z")) {{
                end = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                format = CurrenciesHistoryGETFormatEnum.XML;
                interval = "illum";
            }};            

            CurrenciesHistoryGETResponse res = sdk.currencies.currenciesHistoryGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->