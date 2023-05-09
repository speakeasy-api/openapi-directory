# projectCategory

### Available Operations

* [getProjectCategoryList](#getprojectcategorylist) - List the project categories
* [getProjectCategoryListOfClient](#getprojectcategorylistofclient) - List the project categories of client side

## getProjectCategoryList

List the project categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectCategoryListRequest;
import org.openapis.openapi.models.operations.GetProjectCategoryListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectCategoryListRequest req = new GetProjectCategoryListRequest("ab");            

            GetProjectCategoryListResponse res = sdk.projectCategory.getProjectCategoryList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectCategoryListOfClient

List the project categories of client side

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectCategoryListOfClientRequest;
import org.openapis.openapi.models.operations.GetProjectCategoryListOfClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectCategoryListOfClientRequest req = new GetProjectCategoryListOfClientRequest("maiores", "quidem");            

            GetProjectCategoryListOfClientResponse res = sdk.projectCategory.getProjectCategoryListOfClient(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
