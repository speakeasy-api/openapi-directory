<!-- Start SDK Example Usage -->
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

            ProductsUsingGETRequest req = new ProductsUsingGETRequest("corrupti") {{
                budget = 592845L;
                size = 715190L;
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
<!-- End SDK Example Usage -->