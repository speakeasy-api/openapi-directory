# pca

## Overview

Endpoint for getting Personal Current Account data

### Available Operations

* [getPersonalCurrentAccounts](#getpersonalcurrentaccounts) - Gets a list of all `Personal Current Account` objects.
* [headPersonalCurrentAccounts](#headpersonalcurrentaccounts) - Gets header information on the current set of `Personal Current Account` data

## getPersonalCurrentAccounts

Gets a list of all `Personal Current Account` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPersonalCurrentAccountsRequest;
import org.openapis.openapi.models.operations.GetPersonalCurrentAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPersonalCurrentAccountsRequest req = new GetPersonalCurrentAccountsRequest() {{
                ifModifiedSince = "suscipit";
                ifNoneMatch = "molestiae";
            }};            

            GetPersonalCurrentAccountsResponse res = sdk.pca.getPersonalCurrentAccounts(req);

            if (res.getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headPersonalCurrentAccounts

Gets header information on the current set of `Personal Current Account` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadPersonalCurrentAccountsRequest;
import org.openapis.openapi.models.operations.HeadPersonalCurrentAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadPersonalCurrentAccountsRequest req = new HeadPersonalCurrentAccountsRequest() {{
                ifModifiedSince = "minus";
                ifNoneMatch = "placeat";
            }};            

            HeadPersonalCurrentAccountsResponse res = sdk.pca.headPersonalCurrentAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
