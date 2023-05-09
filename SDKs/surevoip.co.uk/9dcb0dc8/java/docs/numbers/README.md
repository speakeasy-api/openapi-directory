# numbers

## Overview

Create, List, Updated and Delete Numbers (DDIs)

### Available Operations

* [getNumbers](#getnumbers) - List available SureVoIP Ofcom number allocations for purchase

## getNumbers

List available SureVoIP Ofcom number allocations for purchase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("totam", "beatae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetNumbersResponse res = sdk.numbers.getNumbers();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
