# bankAccounts

### Available Operations

* [getBankAccount](#getbankaccount) - GetBankAccount
* [getBankAccountByV1Id](#getbankaccountbyv1id) - GetBankAccountByV1Id
* [listBankAccounts](#listbankaccounts) - ListBankAccounts

## getBankAccount

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount)
linked to a Square account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBankAccountRequest;
import org.openapis.openapi.models.operations.GetBankAccountResponse;
import org.openapis.openapi.models.operations.GetBankAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBankAccountRequest req = new GetBankAccountRequest("unde");            

            GetBankAccountResponse res = sdk.bankAccounts.getBankAccount(req, new GetBankAccountSecurity("nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getBankAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBankAccountByV1Id

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) identified by V1 bank account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBankAccountByV1IdRequest;
import org.openapis.openapi.models.operations.GetBankAccountByV1IdResponse;
import org.openapis.openapi.models.operations.GetBankAccountByV1IdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBankAccountByV1IdRequest req = new GetBankAccountByV1IdRequest("corrupti");            

            GetBankAccountByV1IdResponse res = sdk.bankAccounts.getBankAccountByV1Id(req, new GetBankAccountByV1IdSecurity("illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getBankAccountByV1IdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBankAccounts

Returns a list of [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) objects linked to a Square account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBankAccountsRequest;
import org.openapis.openapi.models.operations.ListBankAccountsResponse;
import org.openapis.openapi.models.operations.ListBankAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBankAccountsRequest req = new ListBankAccountsRequest() {{
                cursor = "vel";
                limit = 623564L;
                locationId = "deserunt";
            }};            

            ListBankAccountsResponse res = sdk.bankAccounts.listBankAccounts(req, new ListBankAccountsSecurity("suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBankAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
