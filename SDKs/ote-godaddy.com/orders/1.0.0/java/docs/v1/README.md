# v1

### Available Operations

* [get](#get) - Retrieve details for specified order
* [list](#list) - Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time

## get

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("quibusdam") {{
                xMarketId = "unde";
                xShopperId = "nulla";
            }};            

            GetResponse res = sdk.v1.get(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## list

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRequest;
import org.openapis.openapi.models.operations.ListResponse;
import org.openapis.openapi.models.operations.ListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRequest req = new ListRequest() {{
                xMarketId = "corrupti";
                xShopperId = "illum";
                domain = "vel";
                limit = 623564L;
                offset = 645894L;
                parentOrderId = "suscipit";
                paymentProfileId = 437587L;
                periodEnd = "magnam";
                periodStart = "debitis";
                productGroupId = 56713L;
                sort = ListSortEnum.MINUS_PRICING_TOTAL;
            }};            

            ListResponse res = sdk.v1.list(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
