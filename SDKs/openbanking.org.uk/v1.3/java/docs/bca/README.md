# bca

## Overview

Endpoint for getting Business Current Account data

### Available Operations

* [getBusinessCurrentAccounts](#getbusinesscurrentaccounts) - Gets a list of all `Branch Current Account` objects.
* [headBusinessCurrentAccounts](#headbusinesscurrentaccounts) - Gets header information on the current set of `Business Current Account` data

## getBusinessCurrentAccounts

Gets a list of all `Branch Current Account` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBusinessCurrentAccountsRequest;
import org.openapis.openapi.models.operations.GetBusinessCurrentAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessCurrentAccountsRequest req = new GetBusinessCurrentAccountsRequest() {{
                ifModifiedSince = "corrupti";
                ifNoneMatch = "illum";
            }};            

            GetBusinessCurrentAccountsResponse res = sdk.bca.getBusinessCurrentAccounts(req);

            if (res.getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headBusinessCurrentAccounts

Gets header information on the current set of `Business Current Account` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadBusinessCurrentAccountsRequest;
import org.openapis.openapi.models.operations.HeadBusinessCurrentAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadBusinessCurrentAccountsRequest req = new HeadBusinessCurrentAccountsRequest() {{
                ifModifiedSince = "vel";
                ifNoneMatch = "error";
            }};            

            HeadBusinessCurrentAccountsResponse res = sdk.bca.headBusinessCurrentAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
