<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryHistoryRecordQueryParams;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryHistoryRecordRequest;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryHistoryRecordResponse;
import org.openapis.openapi.models.shared.QueryHistoryRequestFormFactorEnum;
import org.openapis.openapi.models.shared.QueryHistoryRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromeuxreportRecordsQueryHistoryRecordRequest req = new ChromeuxreportRecordsQueryHistoryRecordRequest() {{
                queryParams = new ChromeuxreportRecordsQueryHistoryRecordQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new QueryHistoryRequest() {{
                    formFactor = "DESKTOP";
                    metrics = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    origin = "debitis";
                    url = "ipsa";
                }};
            }};            

            ChromeuxreportRecordsQueryHistoryRecordResponse res = sdk.records.chromeuxreportRecordsQueryHistoryRecord(req);

            if (res.queryHistoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->