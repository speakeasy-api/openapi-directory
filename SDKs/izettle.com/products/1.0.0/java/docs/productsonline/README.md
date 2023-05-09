# productsOnline

### Available Operations

* [createProductSlug](#createproductslug) - Create a product identifier

## createProductSlug

Creates a unique slug (identifier) for a product. The slug is used to create a product URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductSlugRequest;
import org.openapis.openapi.models.operations.CreateProductSlugResponse;
import org.openapis.openapi.models.operations.CreateProductSlugSecurity;
import org.openapis.openapi.models.shared.CreateSlugRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProductSlugRequest req = new CreateProductSlugRequest(                new CreateSlugRequest("commodi");, "88f77c1f-fc71-4dca-963f-2a3c80a97ff3");            

            CreateProductSlugResponse res = sdk.productsOnline.createProductSlug(req, new CreateProductSlugSecurity("adipisci") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.slugResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
