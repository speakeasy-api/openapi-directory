# customFields

### Available Operations

* [getAllCustomFieldsByCategory](#getallcustomfieldsbycategory) - Get All Custom Fields

## getAllCustomFieldsByCategory

Get All Custom Fields for the selected company

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCustomFieldsByCategoryRequest;
import org.openapis.openapi.models.operations.GetAllCustomFieldsByCategoryResponse;
import org.openapis.openapi.models.operations.GetAllCustomFieldsByCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllCustomFieldsByCategoryRequest req = new GetAllCustomFieldsByCategoryRequest("at", "at");            

            GetAllCustomFieldsByCategoryResponse res = sdk.customFields.getAllCustomFieldsByCategory(req, new GetAllCustomFieldsByCategorySecurity("maiores") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customFieldDefinitions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
