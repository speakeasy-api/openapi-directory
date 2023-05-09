# paymentMethods

### Available Operations

* [getPaymentMethodsJson](#getpaymentmethodsjson) - Retrieve all Store's Payment Methods.
* [getPaymentMethodsIdJson](#getpaymentmethodsidjson) - Retrieve a single Payment Method.

## getPaymentMethodsJson

Retrieve all Store's Payment Methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentMethodsJsonRequest;
import org.openapis.openapi.models.operations.GetPaymentMethodsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentMethodsJsonRequest req = new GetPaymentMethodsJsonRequest("magnam", "ratione");            

            GetPaymentMethodsJsonResponse res = sdk.paymentMethods.getPaymentMethodsJson(req);

            if (res.paymentMethods != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentMethodsIdJson

Retrieve a single Payment Method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentMethodsIdJsonRequest;
import org.openapis.openapi.models.operations.GetPaymentMethodsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentMethodsIdJsonRequest req = new GetPaymentMethodsIdJsonRequest("ex", 511319, "dicta");            

            GetPaymentMethodsIdJsonResponse res = sdk.paymentMethods.getPaymentMethodsIdJson(req);

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
