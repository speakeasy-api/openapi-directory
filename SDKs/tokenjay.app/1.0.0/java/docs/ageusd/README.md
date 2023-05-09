# ageUsd

### Available Operations

* [calcSigmaRsvExchange](#calcsigmarsvexchange) - Calculates SigRSV exchange
* [calcSigmaUsdExchange](#calcsigmausdexchange) - Calculates SigUSD exchange
* [doSigmaRsvExchange](#dosigmarsvexchange) - Builds ErgoPayRequest for SigRSV exchange
* [doSigmaUsdExchange](#dosigmausdexchange) - Builds ErgoPayRequest for SigUSD exchange
* [getAgeUsdInfo](#getageusdinfo) - Returns state of AgeUSD at this moment
* [getSigmaRsvPrice](#getsigmarsvprice) - Lists price and available volume for SigmaRSV
* [getSigmaUsdPrice](#getsigmausdprice) - Lists price and available volume for SigmaUSD

## calcSigmaRsvExchange

Calculates SigRSV exchange

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeRequest;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalcSigmaRsvExchangeRequest req = new CalcSigmaRsvExchangeRequest(592845L);            

            CalcSigmaRsvExchangeResponse res = sdk.ageUsd.calcSigmaRsvExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calcSigmaUsdExchange

Calculates SigUSD exchange

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalcSigmaUsdExchangeRequest;
import org.openapis.openapi.models.operations.CalcSigmaUsdExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalcSigmaUsdExchangeRequest req = new CalcSigmaUsdExchangeRequest(715190L);            

            CalcSigmaUsdExchangeResponse res = sdk.ageUsd.calcSigmaUsdExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doSigmaRsvExchange

Builds ErgoPayRequest for SigRSV exchange

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoSigmaRsvExchangeRequest;
import org.openapis.openapi.models.operations.DoSigmaRsvExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoSigmaRsvExchangeRequest req = new DoSigmaRsvExchangeRequest("quibusdam", 602763L) {{
                checkRate = 857946L;
                executionFee = 544883L;
            }};            

            DoSigmaRsvExchangeResponse res = sdk.ageUsd.doSigmaRsvExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doSigmaUsdExchange

Builds ErgoPayRequest for SigUSD exchange

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoSigmaUsdExchangeRequest;
import org.openapis.openapi.models.operations.DoSigmaUsdExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoSigmaUsdExchangeRequest req = new DoSigmaUsdExchangeRequest("illum", 423655L) {{
                checkRate = 623564L;
                executionFee = 645894L;
            }};            

            DoSigmaUsdExchangeResponse res = sdk.ageUsd.doSigmaUsdExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgeUsdInfo

Returns state of AgeUSD at this moment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgeUsdInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAgeUsdInfoResponse res = sdk.ageUsd.getAgeUsdInfo();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSigmaRsvPrice

Lists price and available volume for SigmaRSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigmaRsvPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigmaRsvPriceResponse res = sdk.ageUsd.getSigmaRsvPrice();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSigmaUsdPrice

Lists price and available volume for SigmaUSD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigmaUsdPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigmaUsdPriceResponse res = sdk.ageUsd.getSigmaUsdPrice();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
