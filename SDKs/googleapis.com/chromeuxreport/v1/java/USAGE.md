<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryHistoryRecordRequest;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryHistoryRecordResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryHistoryRequest;
import org.openapis.openapi.models.shared.QueryHistoryRequestFormFactorEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromeuxreportRecordsQueryHistoryRecordRequest req = new ChromeuxreportRecordsQueryHistoryRecordRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                queryHistoryRequest = new QueryHistoryRequest() {{
                    formFactor = QueryHistoryRequestFormFactorEnum.DESKTOP;
                    metrics = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    origin = "corrupti";
                    url = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            ChromeuxreportRecordsQueryHistoryRecordResponse res = sdk.records.chromeuxreportRecordsQueryHistoryRecord(req);

            if (res.queryHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->