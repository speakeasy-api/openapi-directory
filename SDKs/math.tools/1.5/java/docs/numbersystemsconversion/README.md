# numberSystemsConversion

## Overview

Convert from one number system to another.

### Available Operations

* [getNumbersNumeralChinese](#getnumbersnumeralchinese) - Convert base 10 representation of a given number to chinese numeral.
* [getNumbersNumeralEgyptian](#getnumbersnumeralegyptian) - Convert base 10 representation of a given number to egyptian numeral.
* [getNumbersNumeralRoman](#getnumbersnumeralroman) - Convert base 10 representation of a given number to roman numeral.

## getNumbersNumeralChinese

Convert base 10 representation of a given number to chinese numeral.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersNumeralChineseRequest;
import org.openapis.openapi.models.operations.GetNumbersNumeralChineseResponse;
import org.openapis.openapi.models.operations.GetNumbersNumeralChineseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersNumeralChineseRequest req = new GetNumbersNumeralChineseRequest() {{
                number = 520478L;
            }};            

            GetNumbersNumeralChineseResponse res = sdk.numberSystemsConversion.getNumbersNumeralChinese(req, new GetNumbersNumeralChineseSecurity("porro") {{
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

## getNumbersNumeralEgyptian

Convert base 10 representation of a given number to egyptian numeral.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersNumeralEgyptianRequest;
import org.openapis.openapi.models.operations.GetNumbersNumeralEgyptianResponse;
import org.openapis.openapi.models.operations.GetNumbersNumeralEgyptianSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersNumeralEgyptianRequest req = new GetNumbersNumeralEgyptianRequest() {{
                number = 678880L;
            }};            

            GetNumbersNumeralEgyptianResponse res = sdk.numberSystemsConversion.getNumbersNumeralEgyptian(req, new GetNumbersNumeralEgyptianSecurity("dicta") {{
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

## getNumbersNumeralRoman

Convert base 10 representation of a given number to roman numeral.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersNumeralRomanRequest;
import org.openapis.openapi.models.operations.GetNumbersNumeralRomanResponse;
import org.openapis.openapi.models.operations.GetNumbersNumeralRomanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersNumeralRomanRequest req = new GetNumbersNumeralRomanRequest() {{
                number = 720633L;
            }};            

            GetNumbersNumeralRomanResponse res = sdk.numberSystemsConversion.getNumbersNumeralRoman(req, new GetNumbersNumeralRomanSecurity("officia") {{
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
