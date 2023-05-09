# settlementtransactions

### Available Operations

* [contentSettlementtransactionsList](#contentsettlementtransactionslist) - Retrieves a list of transactions for the settlement.

## contentSettlementtransactionsList

Retrieves a list of transactions for the settlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSettlementtransactionsListRequest;
import org.openapis.openapi.models.operations.ContentSettlementtransactionsListResponse;
import org.openapis.openapi.models.operations.ContentSettlementtransactionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSettlementtransactionsListRequest req = new ContentSettlementtransactionsListRequest("illum", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "et";
                key = "officiis";
                maxResults = 778374L;
                oauthToken = "culpa";
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "iure";
                transactionIds = new String[]{{
                    add("doloribus"),
                    add("praesentium"),
                    add("iste"),
                    add("tempora"),
                }};
                uploadType = "ad";
                uploadProtocol = "ab";
            }};            

            ContentSettlementtransactionsListResponse res = sdk.settlementtransactions.contentSettlementtransactionsList(req, new ContentSettlementtransactionsListSecurity("harum", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settlementtransactionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
