# productDigitalProducts

### Available Operations

* [deleteProductsIdDigitalProductsDigitalProductIdJson](#deleteproductsiddigitalproductsdigitalproductidjson) - Delete a Product DigitalProduct.
* [getProductsIdDigitalProductsJson](#getproductsiddigitalproductsjson) - Retrieve all Product DigitalProducts.
* [getProductsIdDigitalProductsCountJson](#getproductsiddigitalproductscountjson) - Count all Product DigitalProducts.
* [getProductsIdDigitalProductsDigitalProductIdJson](#getproductsiddigitalproductsdigitalproductidjson) - Retrieve a single Product DigitalProduct.
* [postProductsIdDigitalProductsJson](#postproductsiddigitalproductsjson) - Create a new Product DigitalProduct.

## deleteProductsIdDigitalProductsDigitalProductIdJson

Delete a Product DigitalProduct.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest req = new DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest("laborum", 810424, 245367, "eum");            

            DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse res = sdk.productDigitalProducts.deleteProductsIdDigitalProductsDigitalProductIdJson(req);

            if (res.deleteProductsIdDigitalProductsDigitalProductIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdDigitalProductsJson

Retrieve all Product DigitalProducts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdDigitalProductsJsonRequest req = new GetProductsIdDigitalProductsJsonRequest("autem", 752135, "quas");            

            GetProductsIdDigitalProductsJsonResponse res = sdk.productDigitalProducts.getProductsIdDigitalProductsJson(req);

            if (res.digitalProducts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdDigitalProductsCountJson

Count all Product DigitalProducts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdDigitalProductsCountJsonRequest req = new GetProductsIdDigitalProductsCountJsonRequest("assumenda", 860552, "voluptas");            

            GetProductsIdDigitalProductsCountJsonResponse res = sdk.productDigitalProducts.getProductsIdDigitalProductsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdDigitalProductsDigitalProductIdJson

Retrieve a single Product DigitalProduct.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsDigitalProductIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdDigitalProductsDigitalProductIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdDigitalProductsDigitalProductIdJsonRequest req = new GetProductsIdDigitalProductsDigitalProductIdJsonRequest("libero", 96549, 270328, "numquam");            

            GetProductsIdDigitalProductsDigitalProductIdJsonResponse res = sdk.productDigitalProducts.getProductsIdDigitalProductsDigitalProductIdJson(req);

            if (res.digitalProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdDigitalProductsJson

Create a new Product DigitalProduct.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdDigitalProductsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdDigitalProductsJsonResponse;
import org.openapis.openapi.models.shared.DigitalProductEdit;
import org.openapis.openapi.models.shared.DigitalProductEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdDigitalProductsJsonRequest req = new PostProductsIdDigitalProductsJsonRequest(                new DigitalProductEdit() {{
                                digitalProduct = new DigitalProductEditFields() {{
                                    filename = "explicabo";
                                    url = "provident";
                                }};;
                            }};, "ipsa", 476477, "magnam");            

            PostProductsIdDigitalProductsJsonResponse res = sdk.productDigitalProducts.postProductsIdDigitalProductsJson(req);

            if (res.digitalProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
