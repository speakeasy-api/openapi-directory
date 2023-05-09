# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [records](docs/records/README.md)

* [chromeuxreportRecordsQueryHistoryRecord](docs/records/README.md#chromeuxreportrecordsqueryhistoryrecord) - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* [chromeuxreportRecordsQueryRecord](docs/records/README.md#chromeuxreportrecordsqueryrecord) - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
