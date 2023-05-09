# categories

### Available Operations

* [deleteCategoriesIdJson](#deletecategoriesidjson) - Delete an existing Category.
* [getCategoriesJson](#getcategoriesjson) - Retrieve all Categories.
* [getCategoriesCountJson](#getcategoriescountjson) - Count all Categories.
* [getCategoriesIdJson](#getcategoriesidjson) - Retrieve a single Category.
* [postCategoriesJson](#postcategoriesjson) - Create a new Category.
* [putCategoriesIdJson](#putcategoriesidjson) - Modify an existing Category.

## deleteCategoriesIdJson

Delete an existing Category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCategoriesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCategoriesIdJsonRequest req = new DeleteCategoriesIdJsonRequest("delectus", 272656, "suscipit");            

            DeleteCategoriesIdJsonResponse res = sdk.categories.deleteCategoriesIdJson(req);

            if (res.deleteCategoriesIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesJson

Retrieve all Categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesJsonRequest;
import org.openapis.openapi.models.operations.GetCategoriesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesJsonRequest req = new GetCategoriesJsonRequest("molestiae", "minus");            

            GetCategoriesJsonResponse res = sdk.categories.getCategoriesJson(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesCountJson

Count all Categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesCountJsonRequest;
import org.openapis.openapi.models.operations.GetCategoriesCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesCountJsonRequest req = new GetCategoriesCountJsonRequest("placeat", "voluptatum");            

            GetCategoriesCountJsonResponse res = sdk.categories.getCategoriesCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesIdJson

Retrieve a single Category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.GetCategoriesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesIdJsonRequest req = new GetCategoriesIdJsonRequest("iusto", 568045, "nisi");            

            GetCategoriesIdJsonResponse res = sdk.categories.getCategoriesIdJson(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCategoriesJson

Category's permalink is automatically generated from the given category's name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCategoriesJsonRequest;
import org.openapis.openapi.models.operations.PostCategoriesJsonResponse;
import org.openapis.openapi.models.shared.CategoryEdit;
import org.openapis.openapi.models.shared.CategoryEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCategoriesJsonRequest req = new PostCategoriesJsonRequest(                new CategoryEdit() {{
                                category = new CategoryEditFields() {{
                                    name = "Jake Bernier MD";
                                    parentId = 20218;
                                }};;
                            }};, "ipsam", "repellendus");            

            PostCategoriesJsonResponse res = sdk.categories.postCategoriesJson(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCategoriesIdJson

Modify an existing Category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.PutCategoriesIdJsonResponse;
import org.openapis.openapi.models.shared.CategoryEdit;
import org.openapis.openapi.models.shared.CategoryEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCategoriesIdJsonRequest req = new PutCategoriesIdJsonRequest(                new CategoryEdit() {{
                                category = new CategoryEditFields() {{
                                    name = "Cedric Connelly";
                                    parentId = 978619;
                                }};;
                            }};, "molestiae", 799159, "quod");            

            PutCategoriesIdJsonResponse res = sdk.categories.putCategoriesIdJson(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
