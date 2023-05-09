# productImages

### Available Operations

* [deleteProductsIdImagesImageIdJson](#deleteproductsidimagesimageidjson) - Delete a Product Image.
* [getProductsIdImagesJson](#getproductsidimagesjson) - Retrieve all Product Images.
* [getProductsIdImagesCountJson](#getproductsidimagescountjson) - Count all Product Images.
* [getProductsIdImagesImageIdJson](#getproductsidimagesimageidjson) - Retrieve a single Product Image.
* [postProductsIdImagesJson](#postproductsidimagesjson) - Create a new Product Image.

## deleteProductsIdImagesImageIdJson

Delete a Product Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdImagesImageIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdImagesImageIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdImagesImageIdJsonRequest req = new DeleteProductsIdImagesImageIdJsonRequest("odio", 262118, 458515, "esse");            

            DeleteProductsIdImagesImageIdJsonResponse res = sdk.productImages.deleteProductsIdImagesImageIdJson(req);

            if (res.deleteProductsIdImagesImageIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdImagesJson

Retrieve all Product Images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdImagesJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdImagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdImagesJsonRequest req = new GetProductsIdImagesJsonRequest("rem", 683282, "reprehenderit");            

            GetProductsIdImagesJsonResponse res = sdk.productImages.getProductsIdImagesJson(req);

            if (res.images != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdImagesCountJson

Count all Product Images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdImagesCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdImagesCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdImagesCountJsonRequest req = new GetProductsIdImagesCountJsonRequest("quidem", 852635, "ut");            

            GetProductsIdImagesCountJsonResponse res = sdk.productImages.getProductsIdImagesCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdImagesImageIdJson

Retrieve a single Product Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdImagesImageIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdImagesImageIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdImagesImageIdJsonRequest req = new GetProductsIdImagesImageIdJsonRequest("eum", 379927, 826871, "eos");            

            GetProductsIdImagesImageIdJsonResponse res = sdk.productImages.getProductsIdImagesImageIdJson(req);

            if (res.image != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdImagesJson

Create a new Product Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdImagesJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdImagesJsonResponse;
import org.openapis.openapi.models.shared.ImageEdit;
import org.openapis.openapi.models.shared.ImageEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdImagesJsonRequest req = new PostProductsIdImagesJsonRequest(                new ImageEdit() {{
                                image = new ImageEditFields() {{
                                    url = "praesentium";
                                }};;
                            }};, "quisquam", 86377, "ipsa");            

            PostProductsIdImagesJsonResponse res = sdk.productImages.postProductsIdImagesJson(req);

            if (res.image != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
