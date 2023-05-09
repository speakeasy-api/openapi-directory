# productOptions

### Available Operations

* [deleteProductsIdOptionsOptionIdJson](#deleteproductsidoptionsoptionidjson) - Delete a Product Option.
* [getProductsIdOptionsJson](#getproductsidoptionsjson) - Retrieve all Product Options.
* [getProductsIdOptionsCountJson](#getproductsidoptionscountjson) - Count all Product Options.
* [getProductsIdOptionsOptionIdJson](#getproductsidoptionsoptionidjson) - Retrieve a single Product Option.
* [postProductsIdOptionsJson](#postproductsidoptionsjson) - Create a new Product Option.
* [putProductsIdOptionsOptionIdJson](#putproductsidoptionsoptionidjson) - Modify an existing Product Option.

## deleteProductsIdOptionsOptionIdJson

Delete a Product Option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdOptionsOptionIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdOptionsOptionIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdOptionsOptionIdJsonRequest req = new DeleteProductsIdOptionsOptionIdJsonRequest("quas", 510017, "consequuntur", 536178);            

            DeleteProductsIdOptionsOptionIdJsonResponse res = sdk.productOptions.deleteProductsIdOptionsOptionIdJson(req);

            if (res.deleteProductsIdOptionsOptionIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsJson

Retrieve all Product Options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsJsonRequest req = new GetProductsIdOptionsJsonRequest("fugit", 681393, "mollitia");            

            GetProductsIdOptionsJsonResponse res = sdk.productOptions.getProductsIdOptionsJson(req);

            if (res.productOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsCountJson

Count all Product Options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsCountJsonRequest req = new GetProductsIdOptionsCountJsonRequest("incidunt", 539224, "explicabo");            

            GetProductsIdOptionsCountJsonResponse res = sdk.productOptions.getProductsIdOptionsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsOptionIdJson

Retrieve a single Product Option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsOptionIdJsonRequest req = new GetProductsIdOptionsOptionIdJsonRequest("minima", 392676, "fugit", 956406);            

            GetProductsIdOptionsOptionIdJsonResponse res = sdk.productOptions.getProductsIdOptionsOptionIdJson(req);

            if (res.productOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdOptionsJson

Create a new Product Option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdOptionsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdOptionsJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionEdit;
import org.openapis.openapi.models.shared.ProductOptionEditFields;
import org.openapis.openapi.models.shared.ProductOptionEditFieldsOptionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdOptionsJsonRequest req = new PostProductsIdOptionsJsonRequest(                new ProductOptionEdit() {{
                                option = new ProductOptionEditFields() {{
                                    name = "Norma Christiansen";
                                    optionType = ProductOptionEditFieldsOptionTypeEnum.TEXT;
                                    position = 92260;
                                }};;
                            }};, "esse", 910545, "accusamus");            

            PostProductsIdOptionsJsonResponse res = sdk.productOptions.postProductsIdOptionsJson(req);

            if (res.productOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProductsIdOptionsOptionIdJson

Modify an existing Product Option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProductsIdOptionsOptionIdJsonRequest;
import org.openapis.openapi.models.operations.PutProductsIdOptionsOptionIdJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionEdit;
import org.openapis.openapi.models.shared.ProductOptionEditFields;
import org.openapis.openapi.models.shared.ProductOptionEditFieldsOptionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProductsIdOptionsOptionIdJsonRequest req = new PutProductsIdOptionsOptionIdJsonRequest(                new ProductOptionEdit() {{
                                option = new ProductOptionEditFields() {{
                                    name = "Joy Schmidt";
                                    optionType = ProductOptionEditFieldsOptionTypeEnum.INPUT;
                                    position = 93459;
                                }};;
                            }};, "saepe", 426306, "harum", 473221);            

            PutProductsIdOptionsOptionIdJsonResponse res = sdk.productOptions.putProductsIdOptionsOptionIdJson(req);

            if (res.productOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
