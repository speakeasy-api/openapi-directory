# datafeedstatuses

### Available Operations

* [contentDatafeedstatusesCustombatch](#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [contentDatafeedstatusesGet](#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [contentDatafeedstatusesList](#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

## contentDatafeedstatusesCustombatch

Gets multiple Merchant Center datafeed statuses in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesCustombatchRequest;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesCustombatchResponse;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatafeedstatusesCustomBatchRequest;
import org.openapis.openapi.models.shared.DatafeedstatusesCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedstatusesCustombatchRequest req = new ContentDatafeedstatusesCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                datafeedstatusesCustomBatchRequest = new DatafeedstatusesCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.DatafeedstatusesCustomBatchRequestEntry[]{{
                        add(new DatafeedstatusesCustomBatchRequestEntry() {{
                            batchId = 889234L;
                            country = "Bolivia";
                            datafeedId = "laudantium";
                            language = "exercitationem";
                            merchantId = "praesentium";
                            method = "cum";
                        }}),
                        add(new DatafeedstatusesCustomBatchRequestEntry() {{
                            batchId = 386827L;
                            country = "Palestinian Territory";
                            datafeedId = "voluptatum";
                            language = "error";
                            merchantId = "hic";
                            method = "expedita";
                        }}),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "nostrum";
                key = "officia";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "accusamus";
                uploadProtocol = "tempora";
            }};            

            ContentDatafeedstatusesCustombatchResponse res = sdk.datafeedstatuses.contentDatafeedstatusesCustombatch(req, new ContentDatafeedstatusesCustombatchSecurity("atque", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedstatusesCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedstatusesGet

Retrieves the status of a datafeed from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesGetRequest;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesGetResponse;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedstatusesGetRequest req = new ContentDatafeedstatusesGetRequest("ut", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "magnam";
                country = "Albania";
                fields = "esse";
                key = "ipsam";
                language = "sit";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "repudiandae";
                uploadProtocol = "corporis";
            }};            

            ContentDatafeedstatusesGetResponse res = sdk.datafeedstatuses.contentDatafeedstatusesGet(req, new ContentDatafeedstatusesGetSecurity("et", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedstatusesList

Lists the statuses of the datafeeds in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesListRequest;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesListResponse;
import org.openapis.openapi.models.operations.ContentDatafeedstatusesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedstatusesListRequest req = new ContentDatafeedstatusesListRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "saepe";
                key = "error";
                maxResults = 8511L;
                oauthToken = "incidunt";
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "harum";
                uploadProtocol = "dicta";
            }};            

            ContentDatafeedstatusesListResponse res = sdk.datafeedstatuses.contentDatafeedstatusesList(req, new ContentDatafeedstatusesListSecurity("architecto", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedstatusesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
