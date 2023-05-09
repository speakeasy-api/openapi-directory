# baseConversion

## Overview

Convert from one base to another. This API is free (rate limited).

### Available Operations

* [getNumbersBase](#getnumbersbase) - Convert a given number from one base to another base
* [getNumbersBaseBinary](#getnumbersbasebinary) - Convert a given number to binary
* [getNumbersBaseHex](#getnumbersbasehex) - Convert a given number to hexadecimal
* [getNumbersBaseOctal](#getnumbersbaseoctal) - Convert a given number to octal

## getNumbersBase

Convert a given number from one base to another base

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest(602763L, 857946L) {{
                from = 544883L;
            }};            

            GetNumbersBaseResponse res = sdk.baseConversion.getNumbersBase(req, new GetNumbersBaseSecurity("illum") {{
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

## getNumbersBaseBinary

Convert a given number to binary

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseBinaryRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseBinaryResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseBinarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseBinaryRequest req = new GetNumbersBaseBinaryRequest(423655L) {{
                from = 623564L;
            }};            

            GetNumbersBaseBinaryResponse res = sdk.baseConversion.getNumbersBaseBinary(req, new GetNumbersBaseBinarySecurity("deserunt") {{
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

## getNumbersBaseHex

Convert a given number to hexadecimal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseHexRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseHexResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseHexSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseHexRequest req = new GetNumbersBaseHexRequest(384382L) {{
                from = 437587L;
            }};            

            GetNumbersBaseHexResponse res = sdk.baseConversion.getNumbersBaseHex(req, new GetNumbersBaseHexSecurity("magnam") {{
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

## getNumbersBaseOctal

Convert a given number to octal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseOctalRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseOctalResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseOctalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseOctalRequest req = new GetNumbersBaseOctalRequest(891773L) {{
                from = 56713L;
            }};            

            GetNumbersBaseOctalResponse res = sdk.baseConversion.getNumbersBaseOctal(req, new GetNumbersBaseOctalSecurity("delectus") {{
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
