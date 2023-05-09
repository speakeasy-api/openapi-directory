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

            ContentOrderreportsListdisbursementsRequest req = new ContentOrderreportsListdisbursementsRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "omnis";
                disbursementEndDate = "sed";
                disbursementStartDate = "nesciunt";
                fields = "maxime";
                key = "quis";
                maxResults = 586108L;
                oauthToken = "aliquam";
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "laudantium";
                uploadProtocol = "velit";
            }};            

            ContentOrderreportsListdisbursementsResponse res = sdk.orderreports.contentOrderreportsListdisbursements(req, new ContentOrderreportsListdisbursementsSecurity("reiciendis", "amet") {{
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

            ContentOrderreportsListtransactionsRequest req = new ContentOrderreportsListtransactionsRequest("nemo", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "aliquid";
                key = "asperiores";
                maxResults = 955466L;
                oauthToken = "nobis";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "accusantium";
                transactionEndDate = "dicta";
                transactionStartDate = "minus";
                uploadType = "commodi";
                uploadProtocol = "eveniet";
            }};            

            ContentOrderreportsListtransactionsResponse res = sdk.orderreports.contentOrderreportsListtransactions(req, new ContentOrderreportsListtransactionsSecurity("porro", "tempore") {{
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
