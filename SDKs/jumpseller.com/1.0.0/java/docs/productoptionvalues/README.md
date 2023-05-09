# productOptionValues

### Available Operations

* [deleteProductsIdOptionsOptionIdValuesValueIdJson](#deleteproductsidoptionsoptionidvaluesvalueidjson) - Delete a Product Option Value.
* [getProductsIdOptionsOptionIdValuesJson](#getproductsidoptionsoptionidvaluesjson) - Retrieve all Product Option Values.
* [getProductsIdOptionsOptionIdValuesCountJson](#getproductsidoptionsoptionidvaluescountjson) - Count all Product Option Values.
* [getProductsIdOptionsOptionIdValuesValueIdJson](#getproductsidoptionsoptionidvaluesvalueidjson) - Retrieve a single Product Option Value.
* [postProductsIdOptionsOptionIdValuesJson](#postproductsidoptionsoptionidvaluesjson) - Create a new Product Option Value.
* [putProductsIdOptionsOptionIdValuesValueIdJson](#putproductsidoptionsoptionidvaluesvalueidjson) - Modify an existing Product Option Value.

## deleteProductsIdOptionsOptionIdValuesValueIdJson

Delete a Product Option Value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest req = new DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest("id", 696997, "neque", 778696, 847276);            

            DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse res = sdk.productOptionValues.deleteProductsIdOptionsOptionIdValuesValueIdJson(req);

            if (res.deleteProductsIdOptionsOptionIdValuesValueIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsOptionIdValuesJson

Retrieve all Product Option Values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsOptionIdValuesJsonRequest req = new GetProductsIdOptionsOptionIdValuesJsonRequest("quo", 681359, "eius", 178367);            

            GetProductsIdOptionsOptionIdValuesJsonResponse res = sdk.productOptionValues.getProductsIdOptionsOptionIdValuesJson(req);

            if (res.productOptionValues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsOptionIdValuesCountJson

Count all Product Option Values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsOptionIdValuesCountJsonRequest req = new GetProductsIdOptionsOptionIdValuesCountJsonRequest("voluptas", 69859, "cupiditate", 9688);            

            GetProductsIdOptionsOptionIdValuesCountJsonResponse res = sdk.productOptionValues.getProductsIdOptionsOptionIdValuesCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdOptionsOptionIdValuesValueIdJson

Retrieve a single Product Option Value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesValueIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdOptionsOptionIdValuesValueIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdOptionsOptionIdValuesValueIdJsonRequest req = new GetProductsIdOptionsOptionIdValuesValueIdJsonRequest("tempora", 892050, "ipsam", 133465, 197054);            

            GetProductsIdOptionsOptionIdValuesValueIdJsonResponse res = sdk.productOptionValues.getProductsIdOptionsOptionIdValuesValueIdJson(req);

            if (res.productOptionValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdOptionsOptionIdValuesJson

Create a new Product Option Value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdOptionsOptionIdValuesJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdOptionsOptionIdValuesJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionValueEdit;
import org.openapis.openapi.models.shared.ProductOptionValueEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdOptionsOptionIdValuesJsonRequest req = new PostProductsIdOptionsOptionIdValuesJsonRequest(                new ProductOptionValueEdit() {{
                                value = new ProductOptionValueEditFields() {{
                                    name = "Miss Claude Walsh";
                                    position = 490819;
                                }};;
                            }};, "inventore", 469498, "totam", 882710);            

            PostProductsIdOptionsOptionIdValuesJsonResponse res = sdk.productOptionValues.postProductsIdOptionsOptionIdValuesJson(req);

            if (res.productOptionValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProductsIdOptionsOptionIdValuesValueIdJson

Modify an existing Product Option Value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProductsIdOptionsOptionIdValuesValueIdJsonRequest;
import org.openapis.openapi.models.operations.PutProductsIdOptionsOptionIdValuesValueIdJsonResponse;
import org.openapis.openapi.models.shared.ProductOptionValueEdit;
import org.openapis.openapi.models.shared.ProductOptionValueEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProductsIdOptionsOptionIdValuesValueIdJsonRequest req = new PutProductsIdOptionsOptionIdValuesValueIdJsonRequest(                new ProductOptionValueEdit() {{
                                value = new ProductOptionValueEditFields() {{
                                    name = "Courtney Mayert";
                                    position = 174112;
                                }};;
                            }};, "deserunt", 475289, "accusantium", 783648, 430402);            

            PutProductsIdOptionsOptionIdValuesValueIdJsonResponse res = sdk.productOptionValues.putProductsIdOptionsOptionIdValuesValueIdJson(req);

            if (res.productOptionValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
