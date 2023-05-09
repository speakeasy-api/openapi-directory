# settlementreports

### Available Operations

* [contentSettlementreportsGet](#contentsettlementreportsget) - Retrieves a settlement report from your Merchant Center account.
* [contentSettlementreportsList](#contentsettlementreportslist) - Retrieves a list of settlement reports from your Merchant Center account.

## contentSettlementreportsGet

Retrieves a settlement report from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSettlementreportsGetRequest;
import org.openapis.openapi.models.operations.ContentSettlementreportsGetResponse;
import org.openapis.openapi.models.operations.ContentSettlementreportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSettlementreportsGetRequest req = new ContentSettlementreportsGetRequest("recusandae", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "fuga";
                key = "nulla";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "ad";
                uploadProtocol = "fugiat";
            }};            

            ContentSettlementreportsGetResponse res = sdk.settlementreports.contentSettlementreportsGet(req, new ContentSettlementreportsGetSecurity("quas", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settlementReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentSettlementreportsList

Retrieves a list of settlement reports from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSettlementreportsListRequest;
import org.openapis.openapi.models.operations.ContentSettlementreportsListResponse;
import org.openapis.openapi.models.operations.ContentSettlementreportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSettlementreportsListRequest req = new ContentSettlementreportsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "rerum";
                key = "voluptate";
                maxResults = 21341L;
                oauthToken = "maiores";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "ratione";
                transferEndDate = "molestias";
                transferStartDate = "odio";
                uploadType = "non";
                uploadProtocol = "magni";
            }};            

            ContentSettlementreportsListResponse res = sdk.settlementreports.contentSettlementreportsList(req, new ContentSettlementreportsListSecurity("sint", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settlementreportsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
