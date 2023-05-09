# products

### Available Operations

* [deleteProductsIdJson](#deleteproductsidjson) - Delete an existing Product.
* [getProductsJson](#getproductsjson) - Retrieve all Products.
* [getProductsAfterIdJson](#getproductsafteridjson) - Retrieves Products after the given id.
* [getProductsCategoryCategoryIdJson](#getproductscategorycategoryidjson) - Retrieve Products filtered by category.
* [getProductsCategoryCategoryIdCountJson](#getproductscategorycategoryidcountjson) - Count Products filtered by category.
* [getProductsCountJson](#getproductscountjson) - Count all Products.
* [getProductsSearchJson](#getproductssearchjson) - Retrieve a Product List from a query.
* [getProductsStatusStatusJson](#getproductsstatusstatusjson) - Retrieve Products filtered by status.
* [getProductsStatusStatusCountJson](#getproductsstatusstatuscountjson) - Count Products filtered by status.
* [getProductsIdJson](#getproductsidjson) - Retrieve a single Product.
* [postProductsJson](#postproductsjson) - Create a new Product.
* [putProductsIdJson](#putproductsidjson) - Modify an existing Product.

## deleteProductsIdJson

Delete an existing Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdJsonRequest req = new DeleteProductsIdJsonRequest("aliquam", 958983, "dicta");            

            DeleteProductsIdJsonResponse res = sdk.products.deleteProductsIdJson(req);

            if (res.deleteProductsIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsJson

Retrieve all Products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsJsonRequest req = new GetProductsJsonRequest("ullam", "reprehenderit") {{
                limit = 356707L;
                locale = "nisi";
                page = 16328L;
            }};            

            GetProductsJsonResponse res = sdk.products.getProductsJson(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsAfterIdJson

Retrieves Products after the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsAfterIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsAfterIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsAfterIdJsonRequest req = new GetProductsAfterIdJsonRequest("voluptatum", 185232, "quibusdam") {{
                locale = "ex";
            }};            

            GetProductsAfterIdJsonResponse res = sdk.products.getProductsAfterIdJson(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsCategoryCategoryIdJson

Retrieve Products filtered by category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsCategoryCategoryIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsCategoryCategoryIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsCategoryCategoryIdJsonRequest req = new GetProductsCategoryCategoryIdJsonRequest("deleniti", 929292, "dolorum") {{
                locale = "architecto";
            }};            

            GetProductsCategoryCategoryIdJsonResponse res = sdk.products.getProductsCategoryCategoryIdJson(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsCategoryCategoryIdCountJson

Count Products filtered by category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsCategoryCategoryIdCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsCategoryCategoryIdCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsCategoryCategoryIdCountJsonRequest req = new GetProductsCategoryCategoryIdCountJsonRequest("omnis", 945302, "quasi") {{
                locale = "at";
            }};            

            GetProductsCategoryCategoryIdCountJsonResponse res = sdk.products.getProductsCategoryCategoryIdCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsCountJson

Count all Products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsCountJsonRequest req = new GetProductsCountJsonRequest("et", "voluptate");            

            GetProductsCountJsonResponse res = sdk.products.getProductsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsSearchJson

Endpoint example: 

```text
https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description 
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsSearchJsonFieldsEnum;
import org.openapis.openapi.models.operations.GetProductsSearchJsonRequest;
import org.openapis.openapi.models.operations.GetProductsSearchJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsSearchJsonRequest req = new GetProductsSearchJsonRequest("ipsa", "minima", "veritatis") {{
                fields = GetProductsSearchJsonFieldsEnum.BRAND;
                locale = "adipisci";
            }};            

            GetProductsSearchJsonResponse res = sdk.products.getProductsSearchJson(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsStatusStatusJson

Retrieve Products filtered by status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsStatusStatusJsonRequest;
import org.openapis.openapi.models.operations.GetProductsStatusStatusJsonResponse;
import org.openapis.openapi.models.operations.GetProductsStatusStatusJsonStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsStatusStatusJsonRequest req = new GetProductsStatusStatusJsonRequest("iste", "temporibus", GetProductsStatusStatusJsonStatusEnum.AVAILABLE) {{
                locale = "rem";
            }};            

            GetProductsStatusStatusJsonResponse res = sdk.products.getProductsStatusStatusJson(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsStatusStatusCountJson

Count Products filtered by status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsStatusStatusCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsStatusStatusCountJsonResponse;
import org.openapis.openapi.models.operations.GetProductsStatusStatusCountJsonStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsStatusStatusCountJsonRequest req = new GetProductsStatusStatusCountJsonRequest("aut", "laudantium", GetProductsStatusStatusCountJsonStatusEnum.NOT_AVAILABLE) {{
                locale = "mollitia";
            }};            

            GetProductsStatusStatusCountJsonResponse res = sdk.products.getProductsStatusStatusCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdJson

Retrieve a single Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdJsonRequest req = new GetProductsIdJsonRequest("ab", 544591, "non") {{
                locale = "voluptatem";
            }};            

            GetProductsIdJsonResponse res = sdk.products.getProductsIdJson(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsJson

Create a new Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsJsonResponse;
import org.openapis.openapi.models.shared.CategoryFields;
import org.openapis.openapi.models.shared.ProductEdit;
import org.openapis.openapi.models.shared.ProductEditFields;
import org.openapis.openapi.models.shared.ProductEditFieldsPackageFormatEnum;
import org.openapis.openapi.models.shared.ProductEditFieldsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsJsonRequest req = new PostProductsJsonRequest(                new ProductEdit() {{
                                product = new ProductEditFields("dolor", 5801.52) {{
                                    barcode = "numquam";
                                    categories = new org.openapis.openapi.models.shared.CategoryFields[]{{
                                        add(new CategoryFields() {{
                                            id = 131055;
                                            name = "Dr. Maria Kulas";
                                            parentId = 244651;
                                            permalink = "voluptatibus";
                                        }}),
                                        add(new CategoryFields() {{
                                            id = 374323;
                                            name = "Kevin Jast";
                                            parentId = 831520;
                                            permalink = "officia";
                                        }}),
                                        add(new CategoryFields() {{
                                            id = 807023;
                                            name = "Blanche Yundt II";
                                            parentId = 783235;
                                            permalink = "quod";
                                        }}),
                                        add(new CategoryFields() {{
                                            id = 288398;
                                            name = "Josephine Paucek";
                                            parentId = 246063;
                                            permalink = "culpa";
                                        }}),
                                    }};
                                    description = "est";
                                    diameter = 9268.8;
                                    featured = false;
                                    googleProductCategory = "totam";
                                    height = 8539.4;
                                    length = 4240.89;
                                    metaDescription = "ducimus";
                                    packageFormat = ProductEditFieldsPackageFormatEnum.CYLINDER;
                                    pageTitle = "vel";
                                    permalink = "labore";
                                    shippingRequired = false;
                                    sku = "possimus";
                                    status = ProductEditFieldsStatusEnum.DISABLED;
                                    stock = 738227;
                                    stockUnlimited = false;
                                    weight = 4148.57;
                                    width = 4471.44;
                                }};;
                            }};, "corporis", "reiciendis") {{
                locale = "assumenda";
            }};            

            PostProductsJsonResponse res = sdk.products.postProductsJson(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProductsIdJson

Modify an existing Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProductsIdJsonRequest;
import org.openapis.openapi.models.operations.PutProductsIdJsonResponse;
import org.openapis.openapi.models.shared.CategoryFields;
import org.openapis.openapi.models.shared.ProductEdit;
import org.openapis.openapi.models.shared.ProductEditFields;
import org.openapis.openapi.models.shared.ProductEditFieldsPackageFormatEnum;
import org.openapis.openapi.models.shared.ProductEditFieldsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProductsIdJsonRequest req = new PutProductsIdJsonRequest(                new ProductEdit() {{
                                product = new ProductEditFields("nemo", 9249.67) {{
                                    barcode = "aliquid";
                                    categories = new org.openapis.openapi.models.shared.CategoryFields[]{{
                                        add(new CategoryFields() {{
                                            id = 738683;
                                            name = "Arlene Heidenreich";
                                            parentId = 257233;
                                            permalink = "doloribus";
                                        }}),
                                    }};
                                    description = "suscipit";
                                    diameter = 9689.72;
                                    featured = false;
                                    googleProductCategory = "quidem";
                                    height = 9049.49;
                                    length = 8970.71;
                                    metaDescription = "dolore";
                                    packageFormat = ProductEditFieldsPackageFormatEnum.BOX;
                                    pageTitle = "asperiores";
                                    permalink = "adipisci";
                                    shippingRequired = false;
                                    sku = "non";
                                    status = ProductEditFieldsStatusEnum.AVAILABLE;
                                    stock = 105906;
                                    stockUnlimited = false;
                                    weight = 4895.09;
                                    width = 9509.53;
                                }};;
                            }};, "debitis", 233420, "corporis") {{
                locale = "harum";
            }};            

            PutProductsIdJsonResponse res = sdk.products.putProductsIdJson(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
