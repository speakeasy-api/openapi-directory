# identifierPrefixes

## Overview

identifier prefixes

### Available Operations

* [getPrefixCollection](#getprefixcollection) - Returns list of prefixes
* [getPrefixContract](#getprefixcontract) - Returns contracted URI
* [getPrefixExpand](#getprefixexpand) - Returns expanded URI

## getPrefixCollection

Returns list of prefixes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrefixCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrefixCollectionResponse res = sdk.identifierPrefixes.getPrefixCollection();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrefixContract

Returns contracted URI

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrefixContractRequest;
import org.openapis.openapi.models.operations.GetPrefixContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrefixContractRequest req = new GetPrefixContractRequest("fugit");            

            GetPrefixContractResponse res = sdk.identifierPrefixes.getPrefixContract(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrefixExpand

Returns expanded URI

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrefixExpandRequest;
import org.openapis.openapi.models.operations.GetPrefixExpandResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrefixExpandRequest req = new GetPrefixExpandRequest("ab");            

            GetPrefixExpandResponse res = sdk.identifierPrefixes.getPrefixExpand(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
