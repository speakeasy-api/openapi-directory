# discounts

### Available Operations

* [createDiscount](#creatediscount) - Create a discount
* [deleteDiscount](#deletediscount) - Delete a single discount 
* [getAllDiscounts](#getalldiscounts) - Retrieve all discounts
* [getDiscount](#getdiscount) - Retrieve a single discount
* [updateDiscount](#updatediscount) - Update a single discount

## createDiscount

Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiscountRequest;
import org.openapis.openapi.models.operations.CreateDiscountResponse;
import org.openapis.openapi.models.operations.CreateDiscountSecurity;
import org.openapis.openapi.models.shared.DiscountRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceCurrencyIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDiscountRequest req = new CreateDiscountRequest("70c68828-2aa4-4825-a2f2-22e9817ee17c") {{
                discountRequest = new DiscountRequest("be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87") {{
                    amount = new Price(97468L, PriceCurrencyIdEnum.XPD);;
                    description = "error";
                    externalReference = "sint";
                    imageLookupKeys = new String[]{{
                        add("possimus"),
                        add("quia"),
                        add("eveniet"),
                        add("asperiores"),
                    }};
                    name = "Miss Peter Cronin";
                    percentage = 3984.34;
                }};;
            }};            

            CreateDiscountResponse res = sdk.discounts.createDiscount(req, new CreateDiscountSecurity("tenetur") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDiscount

Delete a single discount 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDiscountRequest;
import org.openapis.openapi.models.operations.DeleteDiscountResponse;
import org.openapis.openapi.models.operations.DeleteDiscountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDiscountRequest req = new DeleteDiscountRequest("1e674bdb-04f1-4575-a082-d68ea19f1d17", "051339d0-8086-4a18-8039-4c26071f93f5");            

            DeleteDiscountResponse res = sdk.discounts.deleteDiscount(req, new DeleteDiscountSecurity("asperiores") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllDiscounts

Retrieve all discounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllDiscountsRequest;
import org.openapis.openapi.models.operations.GetAllDiscountsResponse;
import org.openapis.openapi.models.operations.GetAllDiscountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllDiscountsRequest req = new GetAllDiscountsRequest("0642dac7-af51-45cc-813a-a63aae8d6786");            

            GetAllDiscountsResponse res = sdk.discounts.getAllDiscounts(req, new GetAllDiscountsSecurity("labore") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.discountResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscount

Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscountRequest;
import org.openapis.openapi.models.operations.GetDiscountResponse;
import org.openapis.openapi.models.operations.GetDiscountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscountRequest req = new GetDiscountRequest("dbb675fd-5e60-4b37-9ed4-f6fbee41f333", "17fe35b6-0eb1-4ea4-a655-5ba3c28744ed") {{
                ifNoneMatch = "ullam";
            }};            

            GetDiscountResponse res = sdk.discounts.getDiscount(req, new GetDiscountSecurity("adipisci") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.discountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDiscount

Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDiscountRequest;
import org.openapis.openapi.models.operations.UpdateDiscountResponse;
import org.openapis.openapi.models.operations.UpdateDiscountSecurity;
import org.openapis.openapi.models.shared.DiscountRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceCurrencyIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDiscountRequest req = new UpdateDiscountRequest(                new DiscountRequest("b88f3a8d-8f5c-40b2-b2fb-7b194a276b26") {{
                                amount = new Price(604118L, PriceCurrencyIdEnum.BMD);;
                                description = "suscipit";
                                externalReference = "sapiente";
                                imageLookupKeys = new String[]{{
                                    add("illo"),
                                    add("reiciendis"),
                                    add("perferendis"),
                                    add("corrupti"),
                                }};
                                name = "Troy Cormier";
                                percentage = 8967.62;
                            }};, "3698f447-f603-4e8b-845e-80ca55efd20e", "457e1858-b6a8-49fb-a3a5-aa8e4824d0ab") {{
                ifMatch = "magnam";
            }};            

            UpdateDiscountResponse res = sdk.discounts.updateDiscount(req, new UpdateDiscountSecurity("consequatur") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
