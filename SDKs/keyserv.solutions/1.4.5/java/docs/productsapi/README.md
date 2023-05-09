# productsApi

### Available Operations

* [productsApiCount](#productsapicount)
* [productsApiDeleteProduct](#productsapideleteproduct)
* [productsApiDeleteProduct2](#productsapideleteproduct2)
* [productsApiFind](#productsapifind)
* [productsApiList](#productsapilist)
* [productsApiPatchProduct](#productsapipatchproduct)
* [productsApiPatchProduct2](#productsapipatchproduct2)
* [productsApiSave](#productsapisave)

## productsApiCount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiCountResponse;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ApiKey() {{
                key = "nulla";
            }}            

            ProductsApiCountResponse res = sdk.productsApi.productsApiCount(req);

            if (res.productsApiCount200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiDeleteProduct

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiDeleteProductRequest;
import org.openapis.openapi.models.operations.ProductsApiDeleteProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsApiDeleteProductRequest req = new ProductsApiDeleteProductRequest("corrupti", "illum");            

            ProductsApiDeleteProductResponse res = sdk.productsApi.productsApiDeleteProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiDeleteProduct2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiDeleteProduct2Request;
import org.openapis.openapi.models.operations.ProductsApiDeleteProduct2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsApiDeleteProduct2Request req = new ProductsApiDeleteProduct2Request("vel", "error");            

            ProductsApiDeleteProduct2Response res = sdk.productsApi.productsApiDeleteProduct2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiFind

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiFindRequest;
import org.openapis.openapi.models.operations.ProductsApiFindResponse;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsApiFindRequest req = new ProductsApiFindRequest(                new FindCredentials() {{
                                key = "deserunt";
                                serial = "suscipit";
                            }}) {{
                page = 437587;
            }};            

            ProductsApiFindResponse res = sdk.productsApi.productsApiFind(req);

            if (res.productsApiFind200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiListRequest;
import org.openapis.openapi.models.operations.ProductsApiListResponse;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsApiListRequest req = new ProductsApiListRequest(                new ApiKey() {{
                                key = "magnam";
                            }}) {{
                page = 891773;
            }};            

            ProductsApiListResponse res = sdk.productsApi.productsApiList(req);

            if (res.productViews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiPatchProduct

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiPatchProductResponse;
import org.openapis.openapi.models.shared.ProductCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ProductCreateModify() {{
                custom = "ipsa";
                key = "delectus";
                name = "Laurie Kreiger";
                serial = "voluptatum";
            }}            

            ProductsApiPatchProductResponse res = sdk.productsApi.productsApiPatchProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiPatchProduct2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiPatchProduct2Response;
import org.openapis.openapi.models.shared.ProductCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ProductCreateModify() {{
                custom = "iusto";
                key = "excepturi";
                name = "Mrs. Sophie Smith MD";
                serial = "perferendis";
            }}            

            ProductsApiPatchProduct2Response res = sdk.productsApi.productsApiPatchProduct2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsApiSave

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsApiSaveResponse;
import org.openapis.openapi.models.shared.ProductCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ProductCreateModify() {{
                custom = "ipsam";
                key = "repellendus";
                name = "Cedric Connelly";
                serial = "maiores";
            }}            

            ProductsApiSaveResponse res = sdk.productsApi.productsApiSave(req);

            if (res.productsApiSave201ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
