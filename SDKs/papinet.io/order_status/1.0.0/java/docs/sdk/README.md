# SDK

## Overview

papinet API is a global initiative for the Forst and Paper supply chain.

### Available Operations

* [getOrders](#getorders) - List `orders`
* [getOrdersOrderId](#getordersorderid) - Get an `order`

## getOrders

Gets a paginated list of all `orders`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersOrderStatusEnum;
import org.openapis.openapi.models.operations.GetOrdersRequest;
import org.openapis.openapi.models.operations.GetOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersRequest req = new GetOrdersRequest() {{
                limit = "quibusdam";
                offset = "unde";
                orderStatus = GetOrdersOrderStatusEnum.COMPLETED;
            }};            

            GetOrdersResponse res = sdk.sdk.getOrders(req);

            if (res.listOfOrders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersOrderId

Gets the details of a specific `order`, including a paginated list of all its lines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersOrderIdRequest;
import org.openapis.openapi.models.operations.GetOrdersOrderIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersOrderIdRequest req = new GetOrdersOrderIdRequest("8d69a674-e0f4-467c-8879-6ed151a05dfc");            

            GetOrdersOrderIdResponse res = sdk.sdk.getOrdersOrderId(req);

            if (res.getOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
