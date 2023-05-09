# orderreports

### Available Operations

* [contentOrderreportsListdisbursements](#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [contentOrderreportsListtransactions](#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

## contentOrderreportsListdisbursements

Retrieves a report for disbursements from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreportsListdisbursementsRequest;
import org.openapis.openapi.models.operations.ContentOrderreportsListdisbursementsResponse;
import org.openapis.openapi.models.operations.ContentOrderreportsListdisbursementsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreportsListdisbursementsRequest req = new ContentOrderreportsListdisbursementsRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "iste";
                disbursementEndDate = "corporis";
                disbursementStartDate = "accusantium";
                fields = "illo";
                key = "aut";
                maxResults = 984031L;
                oauthToken = "nostrum";
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "neque";
                uploadProtocol = "pariatur";
            }};            

            ContentOrderreportsListdisbursementsResponse res = sdk.orderreports.contentOrderreportsListdisbursements(req, new ContentOrderreportsListdisbursementsSecurity("vel", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreportsListDisbursementsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreportsListtransactions

Retrieves a list of transactions for a disbursement from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreportsListtransactionsRequest;
import org.openapis.openapi.models.operations.ContentOrderreportsListtransactionsResponse;
import org.openapis.openapi.models.operations.ContentOrderreportsListtransactionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreportsListtransactionsRequest req = new ContentOrderreportsListtransactionsRequest("mollitia", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "ad";
                key = "aliquam";
                maxResults = 788165L;
                oauthToken = "quas";
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "maiores";
                transactionEndDate = "inventore";
                transactionStartDate = "aliquid";
                uploadType = "laudantium";
                uploadProtocol = "est";
            }};            

            ContentOrderreportsListtransactionsResponse res = sdk.orderreports.contentOrderreportsListtransactions(req, new ContentOrderreportsListtransactionsSecurity("dolor", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreportsListTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
