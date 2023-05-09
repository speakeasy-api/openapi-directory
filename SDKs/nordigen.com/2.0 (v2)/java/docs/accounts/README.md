# accounts

### Available Operations

* [retrieveAccountBalancesV2](#retrieveaccountbalancesv2) - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* [retrieveAccountDetailsV2](#retrieveaccountdetailsv2) - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* [retrieveAccountMetadata](#retrieveaccountmetadata) - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.
* [retrieveAccountTransactionsV22](#retrieveaccounttransactionsv22) - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

## retrieveAccountBalancesV2

Access account balances.

Balances will be returned in Berlin Group PSD2 format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Request;
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountBalancesV2Request req = new RetrieveAccountBalancesV2Request("5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb");            

            RetrieveAccountBalancesV2Response res = sdk.accounts.retrieveAccountBalancesV2(req);

            if (res.retrieveAccountBalancesV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAccountDetailsV2

Access account details.

Account details will be returned in Berlin Group PSD2 format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountDetailsV2Request;
import org.openapis.openapi.models.operations.RetrieveAccountDetailsV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountDetailsV2Request req = new RetrieveAccountDetailsV2Request("39205929-396f-4ea7-996e-b10faaa2352c");            

            RetrieveAccountDetailsV2Response res = sdk.accounts.retrieveAccountDetailsV2(req);

            if (res.retrieveAccountDetailsV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAccountMetadata

Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountMetadataRequest;
import org.openapis.openapi.models.operations.RetrieveAccountMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountMetadataRequest req = new RetrieveAccountMetadataRequest("955907af-f1a3-4a2f-a946-7739251aa52c");            

            RetrieveAccountMetadataResponse res = sdk.accounts.retrieveAccountMetadata(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAccountTransactionsV22

Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountTransactionsV22Request;
import org.openapis.openapi.models.operations.RetrieveAccountTransactionsV22Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountTransactionsV22Request req = new RetrieveAccountTransactionsV22Request("f5ad019d-a1ff-4e78-b097-b0074f15471b") {{
                dateFrom = LocalDate.parse("2022-02-13");
                dateTo = LocalDate.parse("2022-01-30");
            }};            

            RetrieveAccountTransactionsV22Response res = sdk.accounts.retrieveAccountTransactionsV22(req);

            if (res.retrieveAccountTransactionsV22200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
