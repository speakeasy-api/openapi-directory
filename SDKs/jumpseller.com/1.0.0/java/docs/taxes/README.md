# taxes

### Available Operations

* [getTaxesJson](#gettaxesjson) - Retrieve all Taxes.
* [getTaxesIdJson](#gettaxesidjson) - Retrieve a single Tax information.
* [postTaxesJson](#posttaxesjson) - Create a new Tax.

## getTaxesJson

Retrieve all Taxes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxesJsonRequest;
import org.openapis.openapi.models.operations.GetTaxesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaxesJsonRequest req = new GetTaxesJsonRequest("ut", "fugiat");            

            GetTaxesJsonResponse res = sdk.taxes.getTaxesJson(req);

            if (res.taxes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaxesIdJson

Retrieve a single Tax information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxesIdJsonRequest;
import org.openapis.openapi.models.operations.GetTaxesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaxesIdJsonRequest req = new GetTaxesIdJsonRequest("voluptatem", 635057, "expedita");            

            GetTaxesIdJsonResponse res = sdk.taxes.getTaxesIdJson(req);

            if (res.tax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTaxesJson

Create a new Tax.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTaxesJsonRequest;
import org.openapis.openapi.models.operations.PostTaxesJsonResponse;
import org.openapis.openapi.models.shared.TaxEdit;
import org.openapis.openapi.models.shared.TaxEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTaxesJsonRequest req = new PostTaxesJsonRequest(                new TaxEdit() {{
                                tax = new TaxEditFields() {{
                                    categoryId = 299643;
                                    country = "Albania";
                                    fixed = false;
                                    name = "Brittany Bailey";
                                    region = "repudiandae";
                                    shipping = false;
                                    tax = 3611.51;
                                }};;
                            }};, "et", "blanditiis");            

            PostTaxesJsonResponse res = sdk.taxes.postTaxesJson(req);

            if (res.tax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
