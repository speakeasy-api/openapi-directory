# ccc

## Overview

Endpoint for getting Commercial Credit Card data

### Available Operations

* [getCommercialCreditCards](#getcommercialcreditcards) - Gets a list of all `Commerical Credit Card` objects.
* [headCommercialCreditCards](#headcommercialcreditcards) - Gets header information on the current set of `Commerical Credit Card` data

## getCommercialCreditCards

Gets a list of all `Commerical Credit Card` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommercialCreditCardsRequest;
import org.openapis.openapi.models.operations.GetCommercialCreditCardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommercialCreditCardsRequest req = new GetCommercialCreditCardsRequest() {{
                ifModifiedSince = "debitis";
                ifNoneMatch = "ipsa";
            }};            

            GetCommercialCreditCardsResponse res = sdk.ccc.getCommercialCreditCards(req);

            if (res.getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headCommercialCreditCards

Gets header information on the current set of `Commerical Credit Card` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadCommercialCreditCardsRequest;
import org.openapis.openapi.models.operations.HeadCommercialCreditCardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadCommercialCreditCardsRequest req = new HeadCommercialCreditCardsRequest() {{
                ifModifiedSince = "delectus";
                ifNoneMatch = "tempora";
            }};            

            HeadCommercialCreditCardsResponse res = sdk.ccc.headCommercialCreditCards(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
