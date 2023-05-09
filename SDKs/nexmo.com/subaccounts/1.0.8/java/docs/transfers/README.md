# transfers

## Overview

This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.

### Available Operations

* [retrieveBalanceTransfers](#retrievebalancetransfers) - Retrieve list of balance transfers
* [retrieveCreditTransfers](#retrievecredittransfers) - Retrieve list of credit transfers
* [transferBalance](#transferbalance) - Transfer balance
* [transferCredit](#transfercredit) - Transfer credit
* [transferNumber](#transfernumber) - Transfer number

## retrieveBalanceTransfers

Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveBalanceTransfersRequest;
import org.openapis.openapi.models.operations.RetrieveBalanceTransfersResponse;
import org.openapis.openapi.models.operations.RetrieveBalanceTransfersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveBalanceTransfersRequest req = new RetrieveBalanceTransfersRequest("tempora", "suscipit") {{
                endDate = "molestiae";
                subaccount = "minus";
            }};            

            RetrieveBalanceTransfersResponse res = sdk.transfers.retrieveBalanceTransfers(req, new RetrieveBalanceTransfersSecurity("placeat", "voluptatum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBalanceTransfersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCreditTransfers

Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCreditTransfersRequest;
import org.openapis.openapi.models.operations.RetrieveCreditTransfersResponse;
import org.openapis.openapi.models.operations.RetrieveCreditTransfersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCreditTransfersRequest req = new RetrieveCreditTransfersRequest("iusto", "excepturi") {{
                endDate = "nisi";
                subaccount = "recusandae";
            }};            

            RetrieveCreditTransfersResponse res = sdk.transfers.retrieveCreditTransfers(req, new RetrieveCreditTransfersSecurity("temporibus", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCreditTransfersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferBalance

Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferBalanceRequest;
import org.openapis.openapi.models.operations.TransferBalanceResponse;
import org.openapis.openapi.models.operations.TransferBalanceSecurity;
import org.openapis.openapi.models.shared.TransferBalanceOrCreditRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransferBalanceRequest req = new TransferBalanceRequest(                new TransferBalanceOrCreditRequest(123.45, "7c9738e6", "ad6dc56f") {{
                                reference = "This gets added to the audit log";
                            }};, "quis");            

            TransferBalanceResponse res = sdk.transfers.transferBalance(req, new TransferBalanceSecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.transferBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferCredit

Transfer credit limit between a primary account and one of its subaccounts.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferCreditRequest;
import org.openapis.openapi.models.operations.TransferCreditResponse;
import org.openapis.openapi.models.operations.TransferCreditSecurity;
import org.openapis.openapi.models.shared.TransferBalanceOrCreditRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransferCreditRequest req = new TransferCreditRequest(                new TransferBalanceOrCreditRequest(123.45, "7c9738e6", "ad6dc56f") {{
                                reference = "This gets added to the audit log";
                            }};, "perferendis");            

            TransferCreditResponse res = sdk.transfers.transferCredit(req, new TransferCreditSecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.transferCreditResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferNumber

Transfer number from one account to another.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferNumberRequest;
import org.openapis.openapi.models.operations.TransferNumberResponse;
import org.openapis.openapi.models.operations.TransferNumberSecurity;
import org.openapis.openapi.models.shared.TransferNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransferNumberRequest req = new TransferNumberRequest(                new TransferNumberRequest() {{
                                country = "GB";
                                from = "7c9738e6";
                                number = 23507703696;
                                to = "ad6dc56f";
                            }};, "sapiente");            

            TransferNumberResponse res = sdk.transfers.transferNumber(req, new TransferNumberSecurity("quo", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.transferNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
