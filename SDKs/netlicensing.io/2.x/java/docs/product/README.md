# product

## Overview

Product operations

Product Services
<https://netlicensing.io/wiki/product-services>
### Available Operations

* [createProduct](#createproduct) - Create Product
* [deleteProduct](#deleteproduct) - Delete Product
* [listProducts](#listproducts) - List Products
* [productNumber](#productnumber) - Get Product
* [updateProduct](#updateproduct) - Update Product

## createProduct

Creates a new Product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductRequestBody;
import org.openapis.openapi.models.operations.CreateProductRequestBodyVatModeEnum;
import org.openapis.openapi.models.operations.CreateProductResponse;
import org.openapis.openapi.models.operations.CreateProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProductRequestBody req = new CreateProductRequestBody(false, "reprehenderit", "ut") {{
                description = "maiores";
                licenseeAutoCreate = false;
                licensingInfo = "dicta";
                number = "corporis";
                vatMode = CreateProductRequestBodyVatModeEnum.GROSS;
            }};            

            CreateProductResponse res = sdk.product.createProduct(req, new CreateProductSecurity("iusto", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProduct

Delete a Product by 'number'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductRequest;
import org.openapis.openapi.models.operations.DeleteProductResponse;
import org.openapis.openapi.models.operations.DeleteProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductRequest req = new DeleteProductRequest("harum") {{
                forceCascade = false;
            }};            

            DeleteProductResponse res = sdk.product.deleteProduct(req, new DeleteProductSecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProducts

Return a list of all configured Products for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductsResponse;
import org.openapis.openapi.models.operations.ListProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListProductsResponse res = sdk.product.listProducts(new ListProductsSecurity("commodi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productNumber

Return a Product by 'productNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductNumberRequest;
import org.openapis.openapi.models.operations.ProductNumberResponse;
import org.openapis.openapi.models.operations.ProductNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductNumberRequest req = new ProductNumberRequest("quae");            

            ProductNumberResponse res = sdk.product.productNumber(req, new ProductNumberSecurity("ipsum", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProduct

Sets the provided properties to a Product. Return an updated Product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductRequest;
import org.openapis.openapi.models.operations.UpdateProductRequestBody;
import org.openapis.openapi.models.operations.UpdateProductRequestBodyVatModeEnum;
import org.openapis.openapi.models.operations.UpdateProductResponse;
import org.openapis.openapi.models.operations.UpdateProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProductRequest req = new UpdateProductRequest("molestias") {{
                requestBody = new UpdateProductRequestBody() {{
                    active = false;
                    description = "excepturi";
                    licenseeAutoCreate = false;
                    licensingInfo = "pariatur";
                    name = "Irma Ledner DVM";
                    number = "sint";
                    vatMode = UpdateProductRequestBodyVatModeEnum.GROSS;
                    version = "itaque";
                }};;
            }};            

            UpdateProductResponse res = sdk.product.updateProduct(req, new UpdateProductSecurity("incidunt", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
