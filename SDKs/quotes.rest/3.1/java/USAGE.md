<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteQuoteSecurity;
import org.openapis.openapi.models.operations.DeleteQuoteQueryParams;
import org.openapis.openapi.models.operations.DeleteQuoteRequest;
import org.openapis.openapi.models.operations.DeleteQuoteResponse;
import org.openapis.openapi.models.shared.SchemeXTheySaidSoAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteRequest req = new DeleteQuoteRequest() {{
                security = new DeleteQuoteSecurity() {{
                    xTheySaidSoApiSecret = new SchemeXTheySaidSoAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteQuoteQueryParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteQuoteResponse res = sdk.privateQuotes.deleteQuote(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->