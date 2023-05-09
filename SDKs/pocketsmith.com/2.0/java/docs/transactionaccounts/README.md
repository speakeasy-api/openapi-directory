# transactionAccounts

### Available Operations

* [getTransactionAccountsId](#gettransactionaccountsid) - Get transaction account
* [getUsersIdTransactionAccounts](#getusersidtransactionaccounts) - List transaction accounts in user
* [putTransactionAccountsId](#puttransactionaccountsid) - Update transaction account

## getTransactionAccountsId

Gets a transaction account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionAccountsIdRequest;
import org.openapis.openapi.models.operations.GetTransactionAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionAccountsIdRequest req = new GetTransactionAccountsIdRequest(451159L);            

            GetTransactionAccountsIdResponse res = sdk.transactionAccounts.getTransactionAccountsId(req);

            if (res.transactionAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdTransactionAccounts

List all transaction accounts belonging to a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTransactionAccountsRequest;
import org.openapis.openapi.models.operations.GetUsersIdTransactionAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdTransactionAccountsRequest req = new GetUsersIdTransactionAccountsRequest(19987L);            

            GetUsersIdTransactionAccountsResponse res = sdk.transactionAccounts.getUsersIdTransactionAccounts(req);

            if (res.transactionAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTransactionAccountsId

Updates the transaction account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTransactionAccountsIdRequest;
import org.openapis.openapi.models.operations.PutTransactionAccountsIdRequestBody;
import org.openapis.openapi.models.operations.PutTransactionAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTransactionAccountsIdRequest req = new PutTransactionAccountsIdRequest(441711L) {{
                requestBody = new PutTransactionAccountsIdRequestBody() {{
                    institutionId = 42L;
                    startingBalance = 3547.45;
                    startingBalanceDate = "2015-03-15";
                }};;
            }};            

            PutTransactionAccountsIdResponse res = sdk.transactionAccounts.putTransactionAccountsId(req);

            if (res.transactionAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
