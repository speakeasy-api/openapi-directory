# estimate

### Available Operations

* [getEstimate](#getestimate) - Get a specific estimate of project
* [getEstimateList](#getestimatelist) - List the Estimates
* [postEstimateJson](#postestimatejson) - Create a Estimate
* [postEstimateRaw](#postestimateraw) - Create a Estimate

## getEstimate

Get a specific estimate of project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEstimateRequest;
import org.openapis.openapi.models.operations.GetEstimateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEstimateRequest req = new GetEstimateRequest("corrupti", "illum", "vel");            

            GetEstimateResponse res = sdk.estimate.getEstimate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEstimateList

List the Estimates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEstimateListRequest;
import org.openapis.openapi.models.operations.GetEstimateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEstimateListRequest req = new GetEstimateListRequest("error", "deserunt");            

            GetEstimateListResponse res = sdk.estimate.getEstimateList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEstimateJson

Create a Estimate

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEstimateJsonRequest;
import org.openapis.openapi.models.operations.PostEstimateJsonResponse;
import org.openapis.openapi.models.shared.EstimateItemPO;
import org.openapis.openapi.models.shared.EstimatePO;
import org.openapis.openapi.models.shared.PaperItemPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEstimateJsonRequest req = new PostEstimateJsonRequest("suscipit", "iure") {{
                estimatePO = new EstimatePO() {{
                    comments = "sample comments";
                    description = "sample description";
                    estimateItems = new org.openapis.openapi.models.shared.EstimateItemPO[]{{
                        add(new EstimateItemPO() {{
                            paperItems = new org.openapis.openapi.models.shared.PaperItemPO[]{{
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "ipsa";
                                    price2 = "delectus";
                                    price3 = "tempora";
                                    price4 = "suscipit";
                                    price5 = "molestiae";
                                    pricePerTonne = "minus";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "placeat";
                                    unitPrice2 = "voluptatum";
                                    unitPrice3 = "iusto";
                                    unitPrice4 = "excepturi";
                                    unitPrice5 = "nisi";
                                }}),
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "recusandae";
                                    price2 = "temporibus";
                                    price3 = "ab";
                                    price4 = "quis";
                                    price5 = "veritatis";
                                    pricePerTonne = "deserunt";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "perferendis";
                                    unitPrice2 = "ipsam";
                                    unitPrice3 = "repellendus";
                                    unitPrice4 = "sapiente";
                                    unitPrice5 = "quo";
                                }}),
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "odit";
                                    price2 = "at";
                                    price3 = "at";
                                    price4 = "maiores";
                                    price5 = "molestiae";
                                    pricePerTonne = "quod";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "quod";
                                    unitPrice2 = "esse";
                                    unitPrice3 = "totam";
                                    unitPrice4 = "porro";
                                    unitPrice5 = "dolorum";
                                }}),
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "dicta";
                                    price2 = "nam";
                                    price3 = "officia";
                                    price4 = "occaecati";
                                    price5 = "fugit";
                                    pricePerTonne = "deleniti";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "hic";
                                    unitPrice2 = "optio";
                                    unitPrice3 = "totam";
                                    unitPrice4 = "beatae";
                                    unitPrice5 = "commodi";
                                }}),
                            }};
                            quantity1Price = "molestiae";
                            quantity1Shipping = "modi";
                            quantity1Tax = "qui";
                            quantity2Price = "impedit";
                            quantity2Shipping = "cum";
                            quantity2Tax = "esse";
                            quantity3Price = "ipsum";
                            quantity3Shipping = "excepturi";
                            quantity3Tax = "aspernatur";
                            quantity4Price = "perferendis";
                            quantity4Shipping = "ad";
                            quantity4Tax = "natus";
                            quantity5Price = "sed";
                            quantity5Shipping = "iste";
                            quantity5Tax = "dolor";
                            rfeItemId = 1L;
                        }}),
                        add(new EstimateItemPO() {{
                            paperItems = new org.openapis.openapi.models.shared.PaperItemPO[]{{
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "laboriosam";
                                    price2 = "hic";
                                    price3 = "saepe";
                                    price4 = "fuga";
                                    price5 = "in";
                                    pricePerTonne = "corporis";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "iste";
                                    unitPrice2 = "iure";
                                    unitPrice3 = "saepe";
                                    unitPrice4 = "quidem";
                                    unitPrice5 = "architecto";
                                }}),
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "ipsa";
                                    price2 = "reiciendis";
                                    price3 = "est";
                                    price4 = "mollitia";
                                    price5 = "laborum";
                                    pricePerTonne = "dolores";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "dolorem";
                                    unitPrice2 = "corporis";
                                    unitPrice3 = "explicabo";
                                    unitPrice4 = "nobis";
                                    unitPrice5 = "enim";
                                }}),
                                add(new PaperItemPO() {{
                                    minUomQty = 1L;
                                    paperId = 1L;
                                    price1 = "omnis";
                                    price2 = "nemo";
                                    price3 = "minima";
                                    price4 = "excepturi";
                                    price5 = "accusantium";
                                    pricePerTonne = "iure";
                                    qtyUom = "sample qty_uom";
                                    quantity1 = 1L;
                                    quantity2 = 1L;
                                    quantity3 = 1L;
                                    quantity4 = 1L;
                                    quantity5 = 1L;
                                    size = "sample size";
                                    sku = "sample sku";
                                    unitPrice1 = "culpa";
                                    unitPrice2 = "doloribus";
                                    unitPrice3 = "sapiente";
                                    unitPrice4 = "architecto";
                                    unitPrice5 = "mollitia";
                                }}),
                            }};
                            quantity1Price = "dolorem";
                            quantity1Shipping = "culpa";
                            quantity1Tax = "consequuntur";
                            quantity2Price = "repellat";
                            quantity2Shipping = "mollitia";
                            quantity2Tax = "occaecati";
                            quantity3Price = "numquam";
                            quantity3Shipping = "commodi";
                            quantity3Tax = "quam";
                            quantity4Price = "molestiae";
                            quantity4Shipping = "velit";
                            quantity4Tax = "error";
                            quantity5Price = "quia";
                            quantity5Shipping = "quis";
                            quantity5Tax = "vitae";
                            rfeItemId = 1L;
                        }}),
                    }};
                    estimateTitle = "sample estimate_title";
                    expirationDate = LocalDate.parse("2021-09-08");
                    ownerReference = "sample owner_reference";
                    rfeId = 1L;
                }};;
            }};            

            PostEstimateJsonResponse res = sdk.estimate.postEstimateJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEstimateRaw

Create a Estimate

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEstimateRawRequest;
import org.openapis.openapi.models.operations.PostEstimateRawResponse;
import org.openapis.openapi.models.shared.EstimateItemPO;
import org.openapis.openapi.models.shared.EstimatePO;
import org.openapis.openapi.models.shared.PaperItemPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEstimateRawRequest req = new PostEstimateRawRequest("enim", "odit") {{
                requestBody = "quo".getBytes();
            }};            

            PostEstimateRawResponse res = sdk.estimate.postEstimateRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
