# numberGeneration

## Overview

Generate Random and interesting numbers.

### Available Operations

* [getNumbersRandom](#getnumbersrandom) - Generate random number(s)

## getNumbersRandom

Generate random number(s)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersRandomRequest;
import org.openapis.openapi.models.operations.GetNumbersRandomResponse;
import org.openapis.openapi.models.operations.GetNumbersRandomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersRandomRequest req = new GetNumbersRandomRequest() {{
                max = 473608L;
                min = 799159L;
                total = 800911L;
            }};            

            GetNumbersRandomResponse res = sdk.numberGeneration.getNumbersRandom(req, new GetNumbersRandomSecurity("esse") {{
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
