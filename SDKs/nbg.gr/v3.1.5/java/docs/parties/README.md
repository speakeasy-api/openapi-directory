# parties

### Available Operations

* [getAccountsAccountIdParties](#getaccountsaccountidparties) - Get Parties
* [getAccountsAccountIdParty](#getaccountsaccountidparty) - Get Party
* [getParty](#getparty) - Get Party

## getAccountsAccountIdParties

Get Parties by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartiesRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartiesResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdPartiesRequest req = new GetAccountsAccountIdPartiesRequest("corporis", "iste") {{
                xCustomerUserAgent = "iure";
                xFapiAuthDate = "saepe";
                xFapiCustomerIpAddress = "quidem";
                xFapiInteractionId = "architecto";
            }};            

            GetAccountsAccountIdPartiesResponse res = sdk.parties.getAccountsAccountIdParties(req, new GetAccountsAccountIdPartiesSecurity("ipsa", "reiciendis") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadParty3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsAccountIdParty

Get Party by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartyRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartyResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdPartySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdPartyRequest req = new GetAccountsAccountIdPartyRequest("est", "mollitia") {{
                xCustomerUserAgent = "laborum";
                xFapiAuthDate = "dolores";
                xFapiCustomerIpAddress = "dolorem";
                xFapiInteractionId = "corporis";
            }};            

            GetAccountsAccountIdPartyResponse res = sdk.parties.getAccountsAccountIdParty(req, new GetAccountsAccountIdPartySecurity("explicabo", "nobis") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadParty2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParty

Get Party

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPartyRequest;
import org.openapis.openapi.models.operations.GetPartyResponse;
import org.openapis.openapi.models.operations.GetPartySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPartyRequest req = new GetPartyRequest("enim") {{
                xCustomerUserAgent = "omnis";
                xFapiAuthDate = "nemo";
                xFapiCustomerIpAddress = "minima";
                xFapiInteractionId = "excepturi";
            }};            

            GetPartyResponse res = sdk.parties.getParty(req, new GetPartySecurity("accusantium", "iure") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadParty2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
