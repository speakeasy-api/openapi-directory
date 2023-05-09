# sme

## Overview

Endpoint for getting Unsecured SME Loan data

### Available Operations

* [getUnsecuredSmeLoans](#getunsecuredsmeloans) - Gets a list of all `Unsercured SME Lending` objects.
* [headUnsecuredSmeLoans](#headunsecuredsmeloans) - Gets header information on the current set of `Unsercured SME Lending` data

## getUnsecuredSmeLoans

Gets a list of all `Unsercured SME Lending` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnsecuredSmeLoansRequest;
import org.openapis.openapi.models.operations.GetUnsecuredSmeLoansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUnsecuredSmeLoansRequest req = new GetUnsecuredSmeLoansRequest() {{
                ifModifiedSince = "voluptatum";
                ifNoneMatch = "iusto";
            }};            

            GetUnsecuredSmeLoansResponse res = sdk.sme.getUnsecuredSmeLoans(req);

            if (res.getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headUnsecuredSmeLoans

Gets header information on the current set of `Unsercured SME Lending` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadUnsecuredSmeLoansRequest;
import org.openapis.openapi.models.operations.HeadUnsecuredSmeLoansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadUnsecuredSmeLoansRequest req = new HeadUnsecuredSmeLoansRequest() {{
                ifModifiedSince = "excepturi";
                ifNoneMatch = "nisi";
            }};            

            HeadUnsecuredSmeLoansResponse res = sdk.sme.headUnsecuredSmeLoans(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
