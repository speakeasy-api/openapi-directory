# fulfillments

### Available Operations

* [getFulfillmentsJson](#getfulfillmentsjson) - Retrieve all Fulfillments.
* [getFulfillmentsCountJson](#getfulfillmentscountjson) - Count all Fulfillments.
* [getFulfillmentsIdJson](#getfulfillmentsidjson) - Retrieve a single Fulfillment.
* [getOrderIdFulfillmentsJson](#getorderidfulfillmentsjson) - Retrieve the Fulfillments associated with the Order.

## getFulfillmentsJson

Retrieve all Fulfillments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentsJsonRequest;
import org.openapis.openapi.models.operations.GetFulfillmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentsJsonRequest req = new GetFulfillmentsJsonRequest("rerum", "adipisci") {{
                limit = 992397L;
                page = 934214L;
            }};            

            GetFulfillmentsJsonResponse res = sdk.fulfillments.getFulfillmentsJson(req);

            if (res.fulfillments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFulfillmentsCountJson

Count all Fulfillments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentsCountJsonRequest;
import org.openapis.openapi.models.operations.GetFulfillmentsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentsCountJsonRequest req = new GetFulfillmentsCountJsonRequest("modi", "iste");            

            GetFulfillmentsCountJsonResponse res = sdk.fulfillments.getFulfillmentsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFulfillmentsIdJson

Retrieve a single Fulfillment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentsIdJsonRequest;
import org.openapis.openapi.models.operations.GetFulfillmentsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentsIdJsonRequest req = new GetFulfillmentsIdJsonRequest("dolorum", 535633, "pariatur");            

            GetFulfillmentsIdJsonResponse res = sdk.fulfillments.getFulfillmentsIdJson(req);

            if (res.fulfillment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderIdFulfillmentsJson

Retrieve the Fulfillments associated with the Order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderIdFulfillmentsJsonRequest;
import org.openapis.openapi.models.operations.GetOrderIdFulfillmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderIdFulfillmentsJsonRequest req = new GetOrderIdFulfillmentsJsonRequest("provident", 750844, "libero");            

            GetOrderIdFulfillmentsJsonResponse res = sdk.fulfillments.getOrderIdFulfillmentsJson(req);

            if (res.fulfillments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
