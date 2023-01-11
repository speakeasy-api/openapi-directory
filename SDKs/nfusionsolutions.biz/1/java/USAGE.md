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
                    version = "sit";
                }};
                queryParams = new GetApiVVersionCurrenciesHistoryQueryParams() {{
                    end = "2006-05-01T09:38:06Z";
                    format = "xml";
                    interval = "expedita";
                    pairs = "consequuntur";
                    start = "2003-04-20T23:11:44Z";
                    token = "expedita";
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