# numberFacts

## Overview

Get random interesting fact about a given number.

### Available Operations

* [getNumbersFact](#getnumbersfact) - Get a random fact about a number

## getNumbersFact

Get a random fact about a number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersFactRequest;
import org.openapis.openapi.models.operations.GetNumbersFactResponse;
import org.openapis.openapi.models.operations.GetNumbersFactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersFactRequest req = new GetNumbersFactRequest(870088L);            

            GetNumbersFactResponse res = sdk.numberFacts.getNumbersFact(req, new GetNumbersFactSecurity("maiores") {{
                xMathtoolsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
