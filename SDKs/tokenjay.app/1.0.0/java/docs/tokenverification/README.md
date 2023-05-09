# tokenVerification

## Overview

Ergo Platform Genuine Tokens Verification

EIP-21
<https://github.com/ergoplatform/eips/blob/master/eip-0021.md>
### Available Operations

* [checkToken](#checktoken) - Check a token verification
* [listBlocked](#listblocked) - Lists all blocked tokens
* [listGenuine](#listgenuine) - Lists all genuine tokens known

## checkToken

Check a token verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckTokenRequest;
import org.openapis.openapi.models.operations.CheckTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckTokenRequest req = new CheckTokenRequest("nemo", "minima");            

            CheckTokenResponse res = sdk.tokenVerification.checkToken(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBlocked

Lists all blocked tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBlockedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBlockedResponse res = sdk.tokenVerification.listBlocked();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGenuine

Lists all genuine tokens known

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGenuineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGenuineResponse res = sdk.tokenVerification.listGenuine();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
