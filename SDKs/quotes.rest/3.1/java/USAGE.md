<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteQuoteSecurity;
import org.openapis.openapi.models.operations.DeleteQuoteRequest;
import org.openapis.openapi.models.operations.DeleteQuoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteRequest req = new DeleteQuoteRequest() {{
                id = "corrupti";
            }}            

            DeleteQuoteResponse res = sdk.privateQuotes.deleteQuote(req, new DeleteQuoteSecurity() {{
                xTheySaidSoApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->