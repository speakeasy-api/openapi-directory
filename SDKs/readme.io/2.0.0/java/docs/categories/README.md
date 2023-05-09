# categories

### Available Operations

* [getCategory](#getcategory) - Get category
* [getCategoryDocs](#getcategorydocs) - Get docs for category

## getCategory

Returns the category with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoryRequest;
import org.openapis.openapi.models.operations.GetCategoryResponse;
import org.openapis.openapi.models.operations.GetCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoryRequest req = new GetCategoryRequest("placeat", "voluptatum");            

            GetCategoryResponse res = sdk.categories.getCategory(req, new GetCategorySecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoryDocs

Returns the docs and children docs within this category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoryDocsRequest;
import org.openapis.openapi.models.operations.GetCategoryDocsResponse;
import org.openapis.openapi.models.operations.GetCategoryDocsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoryDocsRequest req = new GetCategoryDocsRequest("nisi", "recusandae");            

            GetCategoryDocsResponse res = sdk.categories.getCategoryDocs(req, new GetCategoryDocsSecurity("temporibus", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
