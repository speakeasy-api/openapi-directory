# productCustomFields

### Available Operations

* [deleteProductsProductIdFieldsFieldIdJson](#deleteproductsproductidfieldsfieldidjson) - Delete value of Product Custom Field
* [getProductsIdFieldsJson](#getproductsidfieldsjson) - Retrieve all Product Custom Fields
* [getProductsIdFieldsCountJson](#getproductsidfieldscountjson) - Count all Product Custom Fields.
* [postProductsIdFieldsJson](#postproductsidfieldsjson) - Add an existing Custom Field to a Product.
* [putProductsProductIdFieldsFieldIdJson](#putproductsproductidfieldsfieldidjson) - Update value of Product Custom Field

## deleteProductsProductIdFieldsFieldIdJson

Delete value of Product Custom Field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsProductIdFieldsFieldIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsProductIdFieldsFieldIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsProductIdFieldsFieldIdJsonRequest req = new DeleteProductsProductIdFieldsFieldIdJsonRequest("quo", 232234, "recusandae", 132487);            

            DeleteProductsProductIdFieldsFieldIdJsonResponse res = sdk.productCustomFields.deleteProductsProductIdFieldsFieldIdJson(req);

            if (res.messageObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdFieldsJson

Retrieve all Product Custom Fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdFieldsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdFieldsJsonRequest req = new GetProductsIdFieldsJsonRequest("minima", 53427, "a");            

            GetProductsIdFieldsJsonResponse res = sdk.productCustomFields.getProductsIdFieldsJson(req);

            if (res.productCustomFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdFieldsCountJson

Count all Product Custom Fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdFieldsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdFieldsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdFieldsCountJsonRequest req = new GetProductsIdFieldsCountJsonRequest("libero", 13948, "aut");            

            GetProductsIdFieldsCountJsonResponse res = sdk.productCustomFields.getProductsIdFieldsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdFieldsJson

Add an existing Custom Field to a Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdFieldsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdFieldsJsonResponse;
import org.openapis.openapi.models.shared.AddProductCustomField;
import org.openapis.openapi.models.shared.AddProductCustomFieldFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdFieldsJsonRequest req = new PostProductsIdFieldsJsonRequest(                new AddProductCustomField() {{
                                field = new AddProductCustomFieldFields() {{
                                    id = 533466;
                                    value = "impedit";
                                }};;
                            }};, "aliquam", 146946, "accusamus");            

            PostProductsIdFieldsJsonResponse res = sdk.productCustomFields.postProductsIdFieldsJson(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProductsProductIdFieldsFieldIdJson

Update value of Product Custom Field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProductsProductIdFieldsFieldIdJsonRequest;
import org.openapis.openapi.models.operations.PutProductsProductIdFieldsFieldIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProductsProductIdFieldsFieldIdJsonRequest req = new PutProductsProductIdFieldsFieldIdJsonRequest("inventore", 250622, "et", 677412);            

            PutProductsProductIdFieldsFieldIdJsonResponse res = sdk.productCustomFields.putProductsProductIdFieldsFieldIdJson(req);

            if (res.productCustomField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
