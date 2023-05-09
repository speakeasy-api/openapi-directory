# tokenPrices

### Available Operations

* [getTokenPrice](#gettokenprice) - Lists price and available volume for a certain token
* [getTokenPrices](#gettokenprices) - Lists all token prices and available volume

## getTokenPrice

Lists price and available volume for a certain token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenPriceRequest;
import org.openapis.openapi.models.operations.GetTokenPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenPriceRequest req = new GetTokenPriceRequest("omnis");            

            GetTokenPriceResponse res = sdk.tokenPrices.getTokenPrice(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenPrices

Lists all token prices and available volume

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenPricesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenPricesResponse res = sdk.tokenPrices.getTokenPrices();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
