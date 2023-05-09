# productVariants

### Available Operations

* [getProductsIdVariantsJson](#getproductsidvariantsjson) - Retrieve all Product Variants.
* [getProductsIdVariantsCountJson](#getproductsidvariantscountjson) - Count all Product Variants.
* [getProductsIdVariantsVariantIdJson](#getproductsidvariantsvariantidjson) - Retrieve a single Product Variant.
* [postProductsIdVariantsJson](#postproductsidvariantsjson) - Create a new Product Variant.
* [putProductsIdVariantsVariantIdJson](#putproductsidvariantsvariantidjson) - Modify an existing Product Variant.

## getProductsIdVariantsJson

Retrieve all Product Variants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdVariantsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdVariantsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdVariantsJsonRequest req = new GetProductsIdVariantsJsonRequest("rerum", 580197, "minima");            

            GetProductsIdVariantsJsonResponse res = sdk.productVariants.getProductsIdVariantsJson(req);

            if (res.variants != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdVariantsCountJson

Count all Product Variants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdVariantsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdVariantsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdVariantsCountJsonRequest req = new GetProductsIdVariantsCountJsonRequest("distinctio", 756779, "sit");            

            GetProductsIdVariantsCountJsonResponse res = sdk.productVariants.getProductsIdVariantsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdVariantsVariantIdJson

Retrieve a single Product Variant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdVariantsVariantIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdVariantsVariantIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdVariantsVariantIdJsonRequest req = new GetProductsIdVariantsVariantIdJsonRequest("culpa", 731398, "adipisci", 766964);            

            GetProductsIdVariantsVariantIdJsonResponse res = sdk.productVariants.getProductsIdVariantsVariantIdJson(req);

            if (res.variant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdVariantsJson

Create a new Product Variant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdVariantsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdVariantsJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionVariantEdit;
import org.openapis.openapi.models.shared.VariantEdit;
import org.openapis.openapi.models.shared.VariantEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdVariantsJsonRequest req = new PostProductsIdVariantsJsonRequest(                new VariantEdit() {{
                                variant = new VariantEditFields() {{
                                    imageId = 160538;
                                    options = new org.openapis.openapi.models.shared.ProductOptionVariantEdit[]{{
                                        add(new ProductOptionVariantEdit() {{
                                            name = "Calvin Williamson";
                                            productOptionId = 503427;
                                            productOptionPosition = 590984;
                                            productOptionValueId = 953722;
                                            productValuePosition = 857723;
                                            value = "quas";
                                        }}),
                                    }};
                                    price = 4572.23;
                                    sku = "quasi";
                                    stock = 951875;
                                    stockUnlimited = false;
                                }};;
                            }};, "error", 575751, "pariatur");            

            PostProductsIdVariantsJsonResponse res = sdk.productVariants.postProductsIdVariantsJson(req);

            if (res.variant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProductsIdVariantsVariantIdJson

Modify an existing Product Variant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProductsIdVariantsVariantIdJsonRequest;
import org.openapis.openapi.models.operations.PutProductsIdVariantsVariantIdJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionVariantEdit;
import org.openapis.openapi.models.shared.VariantEdit;
import org.openapis.openapi.models.shared.VariantEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProductsIdVariantsVariantIdJsonRequest req = new PutProductsIdVariantsVariantIdJsonRequest(                new VariantEdit() {{
                                variant = new VariantEditFields() {{
                                    imageId = 820767;
                                    options = new org.openapis.openapi.models.shared.ProductOptionVariantEdit[]{{
                                        add(new ProductOptionVariantEdit() {{
                                            name = "Mr. Marlon Schultz V";
                                            productOptionId = 633608;
                                            productOptionPosition = 398434;
                                            productOptionValueId = 949298;
                                            productValuePosition = 62713;
                                            value = "earum";
                                        }}),
                                    }};
                                    price = 4240.32;
                                    sku = "in";
                                    stock = 258684;
                                    stockUnlimited = false;
                                }};;
                            }};, "libero", 849039, "soluta", 33304);            

            PutProductsIdVariantsVariantIdJsonResponse res = sdk.productVariants.putProductsIdVariantsVariantIdJson(req);

            if (res.variant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
