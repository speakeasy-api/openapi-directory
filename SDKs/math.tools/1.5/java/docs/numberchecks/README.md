# numberChecks

## Overview

Check Property of a given number.

### Available Operations

* [getNumbersIsCube](#getnumbersiscube) - Checks whether a given number is a cube number or not.
* [getNumbersIsPalindrome](#getnumbersispalindrome) - Checks whether a given number is a palindrome number or not.
* [getNumbersIsSquare](#getnumbersissquare) - Checks whether a given number is a square number or not.
* [getNumbersIsTriangle](#getnumbersistriangle) - Checks whether a given number is a triangle number or not.
* [getNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## getNumbersIsCube

Checks whether a given number is a cube number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersIsCubeRequest;
import org.openapis.openapi.models.operations.GetNumbersIsCubeResponse;
import org.openapis.openapi.models.operations.GetNumbersIsCubeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersIsCubeRequest req = new GetNumbersIsCubeRequest() {{
                number = 272656L;
            }};            

            GetNumbersIsCubeResponse res = sdk.numberChecks.getNumbersIsCube(req, new GetNumbersIsCubeSecurity("suscipit") {{
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

## getNumbersIsPalindrome

Checks whether a given number is a palindrome number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersIsPalindromeRequest;
import org.openapis.openapi.models.operations.GetNumbersIsPalindromeResponse;
import org.openapis.openapi.models.operations.GetNumbersIsPalindromeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersIsPalindromeRequest req = new GetNumbersIsPalindromeRequest() {{
                number = 477665L;
            }};            

            GetNumbersIsPalindromeResponse res = sdk.numberChecks.getNumbersIsPalindrome(req, new GetNumbersIsPalindromeSecurity("minus") {{
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

## getNumbersIsSquare

Checks whether a given number is a square number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersIsSquareRequest;
import org.openapis.openapi.models.operations.GetNumbersIsSquareResponse;
import org.openapis.openapi.models.operations.GetNumbersIsSquareSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersIsSquareRequest req = new GetNumbersIsSquareRequest() {{
                number = 812169L;
            }};            

            GetNumbersIsSquareResponse res = sdk.numberChecks.getNumbersIsSquare(req, new GetNumbersIsSquareSecurity("voluptatum") {{
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

## getNumbersIsTriangle

Checks whether a given number is a triangle number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersIsTriangleRequest;
import org.openapis.openapi.models.operations.GetNumbersIsTriangleResponse;
import org.openapis.openapi.models.operations.GetNumbersIsTriangleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersIsTriangleRequest req = new GetNumbersIsTriangleRequest() {{
                number = 479977L;
            }};            

            GetNumbersIsTriangleResponse res = sdk.numberChecks.getNumbersIsTriangle(req, new GetNumbersIsTriangleSecurity("excepturi") {{
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

## getNumbersPrimeIsFermatPrime

Checks whether a given number is a known fermat prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFermatPrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFermatPrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFermatPrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsFermatPrimeRequest req = new GetNumbersPrimeIsFermatPrimeRequest() {{
                number = 392785L;
            }};            

            GetNumbersPrimeIsFermatPrimeResponse res = sdk.numberChecks.getNumbersPrimeIsFermatPrime(req, new GetNumbersPrimeIsFermatPrimeSecurity("recusandae") {{
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

## getNumbersPrimeIsFibonacciPrime

Checks whether a given number is a known fibonacci prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFibonacciPrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFibonacciPrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsFibonacciPrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsFibonacciPrimeRequest req = new GetNumbersPrimeIsFibonacciPrimeRequest() {{
                number = 836079L;
            }};            

            GetNumbersPrimeIsFibonacciPrimeResponse res = sdk.numberChecks.getNumbersPrimeIsFibonacciPrime(req, new GetNumbersPrimeIsFibonacciPrimeSecurity("ab") {{
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

## getNumbersPrimeIsMersennePrime

Checks whether a given number is a known mersenne prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsMersennePrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsMersennePrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsMersennePrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsMersennePrimeRequest req = new GetNumbersPrimeIsMersennePrimeRequest() {{
                number = 337396L;
            }};            

            GetNumbersPrimeIsMersennePrimeResponse res = sdk.numberChecks.getNumbersPrimeIsMersennePrime(req, new GetNumbersPrimeIsMersennePrimeSecurity("veritatis") {{
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

## getNumbersPrimeIsPartitionPrime

Checks whether a given number is a known partition prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPartitionPrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPartitionPrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPartitionPrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsPartitionPrimeRequest req = new GetNumbersPrimeIsPartitionPrimeRequest() {{
                number = 648172L;
            }};            

            GetNumbersPrimeIsPartitionPrimeResponse res = sdk.numberChecks.getNumbersPrimeIsPartitionPrime(req, new GetNumbersPrimeIsPartitionPrimeSecurity("perferendis") {{
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

## getNumbersPrimeIsPellPrime

Checks whether a given number is a known pell prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPellPrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPellPrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPellPrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsPellPrimeRequest req = new GetNumbersPrimeIsPellPrimeRequest() {{
                number = 368241L;
            }};            

            GetNumbersPrimeIsPellPrimeResponse res = sdk.numberChecks.getNumbersPrimeIsPellPrime(req, new GetNumbersPrimeIsPellPrimeSecurity("repellendus") {{
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

## getNumbersPrimeIsPerfect

Checks whether a given number is a perfect number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPerfectRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPerfectResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPerfectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsPerfectRequest req = new GetNumbersPrimeIsPerfectRequest() {{
                number = 957156L;
            }};            

            GetNumbersPrimeIsPerfectResponse res = sdk.numberChecks.getNumbersPrimeIsPerfect(req, new GetNumbersPrimeIsPerfectSecurity("quo") {{
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

## getNumbersPrimeIsPrime

Checks whether a given number is a known prime number or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPrimeRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPrimeResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeIsPrimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeIsPrimeRequest req = new GetNumbersPrimeIsPrimeRequest() {{
                number = 140350L;
            }};            

            GetNumbersPrimeIsPrimeResponse res = sdk.numberChecks.getNumbersPrimeIsPrime(req, new GetNumbersPrimeIsPrimeSecurity("at") {{
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
