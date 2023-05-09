# spell

## Overview

Spell out a number ordinal, cardinal or currency. This API is free (rate limited).

### Available Operations

* [getNumbersCardinal](#getnumberscardinal) - Get the cardinal of the given number
* [getNumbersCurrency](#getnumberscurrency) - Spells out the number as a currency
* [getNumbersOrdinal](#getnumbersordinal) - Get the ordinal of the given number

## getNumbersCardinal

Get the cardinal of the given number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersCardinalRequest;
import org.openapis.openapi.models.operations.GetNumbersCardinalResponse;
import org.openapis.openapi.models.operations.GetNumbersCardinalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersCardinalRequest req = new GetNumbersCardinalRequest() {{
                language = "sed";
                number = 612096L;
            }};            

            GetNumbersCardinalResponse res = sdk.spell.getNumbersCardinal(req, new GetNumbersCardinalSecurity("dolor") {{
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

## getNumbersCurrency

Spells out the number as a currency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersCurrencyRequest;
import org.openapis.openapi.models.operations.GetNumbersCurrencyResponse;
import org.openapis.openapi.models.operations.GetNumbersCurrencySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersCurrencyRequest req = new GetNumbersCurrencyRequest() {{
                language = "natus";
                number = 386489L;
            }};            

            GetNumbersCurrencyResponse res = sdk.spell.getNumbersCurrency(req, new GetNumbersCurrencySecurity("hic") {{
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

## getNumbersOrdinal

Get the ordinal of the given number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersOrdinalRequest;
import org.openapis.openapi.models.operations.GetNumbersOrdinalResponse;
import org.openapis.openapi.models.operations.GetNumbersOrdinalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersOrdinalRequest req = new GetNumbersOrdinalRequest() {{
                number = 902599L;
            }};            

            GetNumbersOrdinalResponse res = sdk.spell.getNumbersOrdinal(req, new GetNumbersOrdinalSecurity("fuga") {{
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
