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

            GetApiVVersionCurrenciesHistoryRequest req = new GetApiVVersionCurrenciesHistoryRequest() {{
                pathParams = new GetApiVVersionCurrenciesHistoryPathParams() {{
                    version = "totam";
                }};
                queryParams = new GetApiVVersionCurrenciesHistoryQueryParams() {{
                    end = "1998-04-04T07:05:04Z";
                    format = "xml";
                    interval = "animi";
                    pairs = "autem";
                    start = "1986-08-05T16:26:47Z";
                    token = "quia";
                }};
            }};

            GetApiVVersionCurrenciesHistoryResponse res = sdk.currencies.getApiVVersionCurrenciesHistory(req);

            if (res.intervalCollectionResponses.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->