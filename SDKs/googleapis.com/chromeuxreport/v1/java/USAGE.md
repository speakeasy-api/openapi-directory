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

            ChromeuxreportRecordsQueryRecordRequest req = new ChromeuxreportRecordsQueryRecordRequest() {{
                queryParams = new ChromeuxreportRecordsQueryRecordQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new QueryRequest() {{
                    effectiveConnectionType = "rerum";
                    formFactor = "TABLET";
                    metrics = new String[]() {{
                        add("voluptatum"),
                    }};
                    origin = "et";
                    url = "ut";
                }};
            }};

            ChromeuxreportRecordsQueryRecordResponse res = sdk.records.chromeuxreportRecordsQueryRecord(req);

            if (res.queryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->