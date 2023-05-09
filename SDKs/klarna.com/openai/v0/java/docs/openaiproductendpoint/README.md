# openAiProductEndpoint

## Overview

Open AI Product Endpoint. Query for products.

### Available Operations

* [productsUsingGET](#productsusingget) - API for fetching Klarna product information

## productsUsingGET

API for fetching Klarna product information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsUsingGETRequest;
import org.openapis.openapi.models.operations.ProductsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsUsingGETRequest req = new ProductsUsingGETRequest("quibusdam") {{
                budget = 602763L;
                size = 857946L;
            }};            

            ProductsUsingGETResponse res = sdk.openAiProductEndpoint.productsUsingGET(req);

            if (res.productResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
