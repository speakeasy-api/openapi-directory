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
                            batchId = 932394L;
                            country = "Belize";
                            datafeedId = "ipsum";
                            feedLabel = "unde";
                            language = "nulla";
                            merchantId = "distinctio";
                            method = "maxime";
                        }}),
                        add(new DatafeedstatusesCustomBatchRequestEntry() {{
                            batchId = 157222L;
                            country = "Cape Verde";
                            datafeedId = "nostrum";
                            feedLabel = "omnis";
                            language = "libero";
                            merchantId = "dicta";
                            method = "id";
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "quos";
                key = "placeat";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsa";
                uploadProtocol = "voluptates";
            }};            

            ContentDatafeedstatusesCustombatchResponse res = sdk.datafeedstatuses.contentDatafeedstatusesCustombatch(req, new ContentDatafeedstatusesCustombatchSecurity("inventore", "aperiam") {{
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

            ContentDatafeedstatusesGetRequest req = new ContentDatafeedstatusesGetRequest("totam", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.JSON;
                callback = "autem";
                country = "Kenya";
                feedLabel = "dolores";
                fields = "assumenda";
                key = "beatae";
                language = "est";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "molestiae";
                uploadProtocol = "provident";
            }};            

            ContentDatafeedstatusesGetResponse res = sdk.datafeedstatuses.contentDatafeedstatusesGet(req, new ContentDatafeedstatusesGetSecurity("accusamus", "necessitatibus") {{
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

            ContentDatafeedstatusesListRequest req = new ContentDatafeedstatusesListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "rerum";
                key = "laudantium";
                maxResults = 357207L;
                oauthToken = "officiis";
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "at";
                uploadProtocol = "alias";
            }};            

            ContentDatafeedstatusesListResponse res = sdk.datafeedstatuses.contentDatafeedstatusesList(req, new ContentDatafeedstatusesListSecurity("quia", "quidem") {{
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
