# atm

## Overview

Endpoint for getting ATM data

### Available Operations

* [getAtms](#getatms) - Gets a list of all `ATM` objects.
* [headAtms](#headatms) - Gets header information on the current set of `ATM` data

## getAtms

Gets a list of all `ATM` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAtmsRequest;
import org.openapis.openapi.models.operations.GetAtmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAtmsRequest req = new GetAtmsRequest() {{
                ifModifiedSince = "distinctio";
                ifNoneMatch = "quibusdam";
            }};            

            GetAtmsResponse res = sdk.atm.getAtms(req);

            if (res.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headAtms

Gets header information on the current set of `ATM` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadAtmsRequest;
import org.openapis.openapi.models.operations.HeadAtmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadAtmsRequest req = new HeadAtmsRequest() {{
                ifModifiedSince = "unde";
                ifNoneMatch = "nulla";
            }};            

            HeadAtmsResponse res = sdk.atm.headAtms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
