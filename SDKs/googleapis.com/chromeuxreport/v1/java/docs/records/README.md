# records

### Available Operations

* [chromeuxreportRecordsQueryHistoryRecord](#chromeuxreportrecordsqueryhistoryrecord) - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* [chromeuxreportRecordsQueryRecord](#chromeuxreportrecordsqueryrecord) - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

## chromeuxreportRecordsQueryHistoryRecord

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                queryHistoryRequest = new QueryHistoryRequest() {{
                    formFactor = QueryHistoryRequestFormFactorEnum.PHONE;
                    metrics = new String[]{{
                        add("minus"),
                        add("placeat"),
                    }};
                    origin = "voluptatum";
                    url = "iusto";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
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

## chromeuxreportRecordsQueryRecord

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryRecordRequest;
import org.openapis.openapi.models.operations.ChromeuxreportRecordsQueryRecordResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.QueryRequestFormFactorEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromeuxreportRecordsQueryRecordRequest req = new ChromeuxreportRecordsQueryRecordRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                queryRequest = new QueryRequest() {{
                    effectiveConnectionType = "repellendus";
                    formFactor = QueryRequestFormFactorEnum.TABLET;
                    metrics = new String[]{{
                        add("odit"),
                        add("at"),
                        add("at"),
                        add("maiores"),
                    }};
                    origin = "molestiae";
                    url = "quod";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            ChromeuxreportRecordsQueryRecordResponse res = sdk.records.chromeuxreportRecordsQueryRecord(req);

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
