# ibanapi

## Overview

API Endpoints of IBANAPI

### Available Operations

* [getBalance](#getbalance) - Get Account Balance
* [validateIBAN](#validateiban) - Validate IBAN
* [validateIBANBasic](#validateibanbasic) - Validate IBAN Basic

## getBalance

Returns the account balance and expiry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalanceResponse;
import org.openapis.openapi.models.operations.GetBalanceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalanceResponse res = sdk.ibanapi.getBalance(new GetBalanceSecurity("provident") {{
                apiKeySecurity = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateIBAN

Returns the validation results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateIBANRequest;
import org.openapis.openapi.models.operations.ValidateIBANResponse;
import org.openapis.openapi.models.operations.ValidateIBANSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateIBANRequest req = new ValidateIBANRequest("distinctio");            

            ValidateIBANResponse res = sdk.ibanapi.validateIBAN(req, new ValidateIBANSecurity("quibusdam") {{
                apiKeySecurity = "YOUR_API_KEY_HERE";
            }});

            if (res.ibanResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateIBANBasic

Returns the basic validation results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateIBANBasicRequest;
import org.openapis.openapi.models.operations.ValidateIBANBasicResponse;
import org.openapis.openapi.models.operations.ValidateIBANBasicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateIBANBasicRequest req = new ValidateIBANBasicRequest("unde");            

            ValidateIBANBasicResponse res = sdk.ibanapi.validateIBANBasic(req, new ValidateIBANBasicSecurity("nulla") {{
                apiKeySecurity = "YOUR_API_KEY_HERE";
            }});

            if (res.ibanResultBasic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
