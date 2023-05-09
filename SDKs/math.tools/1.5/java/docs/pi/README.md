# pi

## Overview

Digits of PI and more.This API is free (rate limited).

### Available Operations

* [getNumbersPi](#getnumberspi) - Get digits of pi (Ï€)

## getNumbersPi

Get digits of pi (Ï€)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPiRequest;
import org.openapis.openapi.models.operations.GetNumbersPiResponse;
import org.openapis.openapi.models.operations.GetNumbersPiSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPiRequest req = new GetNumbersPiRequest() {{
                from = 143353L;
                to = 537373L;
            }};            

            GetNumbersPiResponse res = sdk.pi.getNumbersPi(req, new GetNumbersPiSecurity("hic") {{
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
