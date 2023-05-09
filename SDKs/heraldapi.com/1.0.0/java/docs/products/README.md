# products

### Available Operations

* [getProducts](#getproducts) - /products

## getProducts

### Get products

Get a list of insurance [products](https://www.heraldapi.com/docs/products).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsRequest;
import org.openapis.openapi.models.operations.GetProductsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetProductsRequest req = new GetProductsRequest() {{
                producerId = "eum";
            }};            

            GetProductsResponse res = sdk.products.getProducts(req);

            if (res.getProducts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
