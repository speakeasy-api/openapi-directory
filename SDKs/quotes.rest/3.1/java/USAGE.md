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

            DeleteQuoteRequest req = new DeleteQuoteRequest() {{
                security = new DeleteQuoteSecurity() {{
                    xTheySaidSoApiSecret = new SchemeXTheySaidSoApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteQuoteQueryParams() {{
                    id = "illum";
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