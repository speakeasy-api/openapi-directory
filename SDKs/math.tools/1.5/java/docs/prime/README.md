# prime

## Overview

Things to do with Prime numbers

### Available Operations

* [getNumbersPrimeFactors](#getnumbersprimefactors) - Get the prime factors of a given number.
* [getNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## getNumbersPrimeFactors

Get the prime factors of a given number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersPrimeFactorsRequest;
import org.openapis.openapi.models.operations.GetNumbersPrimeFactorsResponse;
import org.openapis.openapi.models.operations.GetNumbersPrimeFactorsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersPrimeFactorsRequest req = new GetNumbersPrimeFactorsRequest() {{
                number = 758616L;
            }};            

            GetNumbersPrimeFactorsResponse res = sdk.prime.getNumbersPrimeFactors(req, new GetNumbersPrimeFactorsSecurity("totam") {{
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
                number = 105907L;
            }};            

            GetNumbersPrimeIsFermatPrimeResponse res = sdk.prime.getNumbersPrimeIsFermatPrime(req, new GetNumbersPrimeIsFermatPrimeSecurity("commodi") {{
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
                number = 473600L;
            }};            

            GetNumbersPrimeIsFibonacciPrimeResponse res = sdk.prime.getNumbersPrimeIsFibonacciPrime(req, new GetNumbersPrimeIsFibonacciPrimeSecurity("modi") {{
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
                number = 186332L;
            }};            

            GetNumbersPrimeIsMersennePrimeResponse res = sdk.prime.getNumbersPrimeIsMersennePrime(req, new GetNumbersPrimeIsMersennePrimeSecurity("impedit") {{
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
                number = 736918L;
            }};            

            GetNumbersPrimeIsPartitionPrimeResponse res = sdk.prime.getNumbersPrimeIsPartitionPrime(req, new GetNumbersPrimeIsPartitionPrimeSecurity("esse") {{
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
                number = 216550L;
            }};            

            GetNumbersPrimeIsPellPrimeResponse res = sdk.prime.getNumbersPrimeIsPellPrime(req, new GetNumbersPrimeIsPellPrimeSecurity("excepturi") {{
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
                number = 135218L;
            }};            

            GetNumbersPrimeIsPerfectResponse res = sdk.prime.getNumbersPrimeIsPerfect(req, new GetNumbersPrimeIsPerfectSecurity("perferendis") {{
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
                number = 324141L;
            }};            

            GetNumbersPrimeIsPrimeResponse res = sdk.prime.getNumbersPrimeIsPrime(req, new GetNumbersPrimeIsPrimeSecurity("natus") {{
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
