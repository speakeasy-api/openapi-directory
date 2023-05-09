# promotions

### Available Operations

* [deletePromotionsIdJson](#deletepromotionsidjson) - Delete an existing Promotion.
* [getPromotionsJson](#getpromotionsjson) - Retrieve all Promotions.
* [getPromotionsIdJson](#getpromotionsidjson) - Retrieve a single Promotion.
* [postPromotionsJson](#postpromotionsjson) - Create a new Promotion.
* [putPromotionsIdJson](#putpromotionsidjson) - Update a Promotion.

## deletePromotionsIdJson

Delete an existing Promotion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePromotionsIdJsonRequest;
import org.openapis.openapi.models.operations.DeletePromotionsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePromotionsIdJsonRequest req = new DeletePromotionsIdJsonRequest("laboriosam", 58356, "voluptates");            

            DeletePromotionsIdJsonResponse res = sdk.promotions.deletePromotionsIdJson(req);

            if (res.deletePromotionsIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPromotionsJson

Retrieve all Promotions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPromotionsJsonRequest;
import org.openapis.openapi.models.operations.GetPromotionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPromotionsJsonRequest req = new GetPromotionsJsonRequest("libero", "vitae") {{
                limit = 881721L;
                page = 631126L;
            }};            

            GetPromotionsJsonResponse res = sdk.promotions.getPromotionsJson(req);

            if (res.promotions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPromotionsIdJson

Retrieve a single Promotion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPromotionsIdJsonRequest;
import org.openapis.openapi.models.operations.GetPromotionsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPromotionsIdJsonRequest req = new GetPromotionsIdJsonRequest("tempora", 132815, "voluptas");            

            GetPromotionsIdJsonResponse res = sdk.promotions.getPromotionsIdJson(req);

            if (res.promotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPromotionsJson

Create a new Promotion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPromotionsJsonRequest;
import org.openapis.openapi.models.operations.PostPromotionsJsonResponse;
import org.openapis.openapi.models.shared.Id;
import org.openapis.openapi.models.shared.PromotionEdit;
import org.openapis.openapi.models.shared.PromotionEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPromotionsJsonRequest req = new PostPromotionsJsonRequest(                new PromotionEdit() {{
                                promotion = new PromotionEditFields() {{
                                    beginsAt = "voluptas";
                                    buysAtLeast = "voluptas";
                                    categories = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 748789;
                                        }}),
                                        add(new Id() {{
                                            id = 680116;
                                        }}),
                                    }};
                                    code = "adipisci";
                                    conditionPrice = 7955.35;
                                    conditionQty = 171853;
                                    cumulative = false;
                                    customerCategories = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 449292;
                                        }}),
                                        add(new Id() {{
                                            id = 296242;
                                        }}),
                                        add(new Id() {{
                                            id = 304468;
                                        }}),
                                    }};
                                    customers = "officiis";
                                    discountAmountFix = 8391.89;
                                    discountAmountPercent = 3518.7;
                                    discountTarget = "adipisci";
                                    enabled = false;
                                    expiresAt = "cum";
                                    lasts = "blanditiis";
                                    maxTimesUsed = 555361;
                                    name = "Danny Nader";
                                    products = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 940210;
                                        }}),
                                        add(new Id() {{
                                            id = 348783;
                                        }}),
                                        add(new Id() {{
                                            id = 750765;
                                        }}),
                                    }};
                                    productsX = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 699575;
                                        }}),
                                    }};
                                    quantityX = 148829;
                                    type = "reiciendis";
                                }};;
                            }};, "explicabo", "asperiores");            

            PostPromotionsJsonResponse res = sdk.promotions.postPromotionsJson(req);

            if (res.promotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPromotionsIdJson

Update a Promotion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPromotionsIdJsonRequest;
import org.openapis.openapi.models.operations.PutPromotionsIdJsonResponse;
import org.openapis.openapi.models.shared.Id;
import org.openapis.openapi.models.shared.PromotionEdit;
import org.openapis.openapi.models.shared.PromotionEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPromotionsIdJsonRequest req = new PutPromotionsIdJsonRequest(                new PromotionEdit() {{
                                promotion = new PromotionEditFields() {{
                                    beginsAt = "facilis";
                                    buysAtLeast = "voluptate";
                                    categories = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 70869;
                                        }}),
                                        add(new Id() {{
                                            id = 611749;
                                        }}),
                                        add(new Id() {{
                                            id = 292794;
                                        }}),
                                    }};
                                    code = "laborum";
                                    conditionPrice = 1523.54;
                                    conditionQty = 447516;
                                    cumulative = false;
                                    customerCategories = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 696077;
                                        }}),
                                        add(new Id() {{
                                            id = 131289;
                                        }}),
                                    }};
                                    customers = "voluptas";
                                    discountAmountFix = 6041.18;
                                    discountAmountPercent = 1000.32;
                                    discountTarget = "suscipit";
                                    enabled = false;
                                    expiresAt = "sapiente";
                                    lasts = "debitis";
                                    maxTimesUsed = 72434;
                                    name = "Thomas Lockman";
                                    products = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 592231;
                                        }}),
                                    }};
                                    productsX = new org.openapis.openapi.models.shared.Id[]{{
                                        add(new Id() {{
                                            id = 896762;
                                        }}),
                                        add(new Id() {{
                                            id = 215529;
                                        }}),
                                    }};
                                    quantityX = 406733;
                                    type = "occaecati";
                                }};;
                            }};, "quos", 975752, "tempora");            

            PutPromotionsIdJsonResponse res = sdk.promotions.putPromotionsIdJson(req);

            if (res.promotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
