# numberOfTheDay

## Overview

Number of the day. This API is free (rate limited).

### Available Operations

* [getNumbersNod](#getnumbersnod) - Get the number of the day for current day

## getNumbersNod

Get the number of the day for current day

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersNodResponse;
import org.openapis.openapi.models.operations.GetNumbersNodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersNodResponse res = sdk.numberOfTheDay.getNumbersNod(new GetNumbersNodSecurity("occaecati") {{
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
