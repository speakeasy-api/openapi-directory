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
                    dollarXgafv = "2";
                    accessToken = "eum";
                    alt = "json";
                    callback = "sed";
                    fields = "expedita";
                    key = "maxime";
                    oauthToken = "eos";
                    prettyPrint = true;
                    quotaUser = "autem";
                    uploadType = "deleniti";
                    uploadProtocol = "impedit";
                }};
                request = new QueryRequest() {{
                    effectiveConnectionType = "asperiores";
                    formFactor = "DESKTOP";
                    metrics = new String[]() {{
                        add("commodi"),
                        add("ut"),
                    }};
                    origin = "aut";
                    url = "explicabo";
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