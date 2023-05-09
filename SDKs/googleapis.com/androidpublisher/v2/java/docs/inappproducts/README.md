# inappproducts

### Available Operations

* [androidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Delete an in-app product for an app.
* [androidpublisherInappproductsGet](#androidpublisherinappproductsget) - Returns information about the in-app product specified.
* [androidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates a new in-app product for an app.
* [androidpublisherInappproductsList](#androidpublisherinappproductslist) - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* [androidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Updates the details of an in-app product. This method supports patch semantics.
* [androidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates the details of an in-app product.

## androidpublisherInappproductsDelete

Delete an in-app product for an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsDeleteRequest req = new AndroidpublisherInappproductsDeleteRequest("facilis", "cupiditate") {{
                alt = AltEnum.JSON;
                fields = "qui";
                key = "quae";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "odio";
                userIp = "occaecati";
            }};            

            AndroidpublisherInappproductsDeleteResponse res = sdk.inappproducts.androidpublisherInappproductsDelete(req, new AndroidpublisherInappproductsDeleteSecurity("voluptatibus", "quisquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherInappproductsGet

Returns information about the in-app product specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsGetRequest req = new AndroidpublisherInappproductsGetRequest("vero", "omnis") {{
                alt = AltEnum.JSON;
                fields = "quis";
                key = "ipsum";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "voluptate";
                userIp = "consectetur";
            }};            

            AndroidpublisherInappproductsGetResponse res = sdk.inappproducts.androidpublisherInappproductsGet(req, new AndroidpublisherInappproductsGetSecurity("vero", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsInsert

Creates a new in-app product for an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.Price;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsInsertRequest req = new AndroidpublisherInappproductsInsertRequest("dignissimos") {{
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "hic";
                    defaultPrice = new Price() {{
                        currency = "distinctio";
                        priceMicros = "quod";
                    }};;
                    gracePeriod = "odio";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("facilis", new InAppProductListing() {{
                            description = "vero";
                            title = "Ms.";
                        }});
                        put("dolore", new InAppProductListing() {{
                            description = "quibusdam";
                            title = "Dr.";
                        }});
                        put("sequi", new InAppProductListing() {{
                            description = "natus";
                            title = "Miss";
                        }});
                    }};
                    packageName = "aut";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("exercitationem", new Price() {{
                            currency = "nulla";
                            priceMicros = "fugit";
                        }});
                        put("porro", new Price() {{
                            currency = "maiores";
                            priceMicros = "doloribus";
                        }});
                        put("iusto", new Price() {{
                            currency = "eligendi";
                            priceMicros = "ducimus";
                        }});
                        put("alias", new Price() {{
                            currency = "officia";
                            priceMicros = "tempora";
                        }});
                    }};
                    purchaseType = "ipsam";
                    sku = "ea";
                    status = "aspernatur";
                    subscriptionPeriod = "vel";
                    trialPeriod = "possimus";
                }};;
                alt = AltEnum.JSON;
                autoConvertMissingPrices = false;
                fields = "magnam";
                key = "ratione";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "laudantium";
                userIp = "dicta";
            }};            

            AndroidpublisherInappproductsInsertResponse res = sdk.inappproducts.androidpublisherInappproductsInsert(req, new AndroidpublisherInappproductsInsertSecurity("dolor", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsList

List all the in-app products for an Android app, both subscriptions and managed in-app products..

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsListRequest req = new AndroidpublisherInappproductsListRequest("quasi") {{
                alt = AltEnum.JSON;
                fields = "ex";
                key = "nulla";
                maxResults = 569211L;
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                startIndex = 960835L;
                token = "quisquam";
                userIp = "saepe";
            }};            

            AndroidpublisherInappproductsListResponse res = sdk.inappproducts.androidpublisherInappproductsList(req, new AndroidpublisherInappproductsListSecurity("ea", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsPatch

Updates the details of an in-app product. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.Price;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsPatchRequest req = new AndroidpublisherInappproductsPatchRequest("corporis", "veniam") {{
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "aliquid";
                    defaultPrice = new Price() {{
                        currency = "inventore";
                        priceMicros = "magnam";
                    }};;
                    gracePeriod = "ea";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("consectetur", new InAppProductListing() {{
                            description = "recusandae";
                            title = "Mr.";
                        }});
                        put("minima", new InAppProductListing() {{
                            description = "eaque";
                            title = "Dr.";
                        }});
                        put("libero", new InAppProductListing() {{
                            description = "aut";
                            title = "Mr.";
                        }});
                        put("deleniti", new InAppProductListing() {{
                            description = "impedit";
                            title = "Mrs.";
                        }});
                    }};
                    packageName = "fugit";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("inventore", new Price() {{
                            currency = "non";
                            priceMicros = "et";
                        }});
                        put("dolorum", new Price() {{
                            currency = "laborum";
                            priceMicros = "placeat";
                        }});
                        put("velit", new Price() {{
                            currency = "eum";
                            priceMicros = "autem";
                        }});
                        put("nobis", new Price() {{
                            currency = "quas";
                            priceMicros = "assumenda";
                        }});
                    }};
                    purchaseType = "nulla";
                    sku = "voluptas";
                    status = "libero";
                    subscriptionPeriod = "quasi";
                    trialPeriod = "tempora";
                }};;
                alt = AltEnum.JSON;
                autoConvertMissingPrices = false;
                fields = "numquam";
                key = "explicabo";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "ipsa";
                userIp = "molestiae";
            }};            

            AndroidpublisherInappproductsPatchResponse res = sdk.inappproducts.androidpublisherInappproductsPatch(req, new AndroidpublisherInappproductsPatchSecurity("magnam", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsUpdate

Updates the details of an in-app product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.Price;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsUpdateRequest req = new AndroidpublisherInappproductsUpdateRequest("eius", "esse") {{
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "esse";
                    defaultPrice = new Price() {{
                        currency = "rem";
                        priceMicros = "fuga";
                    }};;
                    gracePeriod = "reprehenderit";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("fugiat", new InAppProductListing() {{
                            description = "ut";
                            title = "Ms.";
                        }});
                        put("suscipit", new InAppProductListing() {{
                            description = "assumenda";
                            title = "Mr.";
                        }});
                        put("praesentium", new InAppProductListing() {{
                            description = "quisquam";
                            title = "Mr.";
                        }});
                    }};
                    packageName = "ipsa";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("quidem", new Price() {{
                            currency = "neque";
                            priceMicros = "quo";
                        }});
                        put("illum", new Price() {{
                            currency = "quo";
                            priceMicros = "fuga";
                        }});
                        put("eius", new Price() {{
                            currency = "eos";
                            priceMicros = "voluptas";
                        }});
                    }};
                    purchaseType = "ab";
                    sku = "cupiditate";
                    status = "consequatur";
                    subscriptionPeriod = "tempora";
                    trialPeriod = "debitis";
                }};;
                alt = AltEnum.JSON;
                autoConvertMissingPrices = false;
                fields = "ipsam";
                key = "aspernatur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "quo";
                userIp = "esse";
            }};            

            AndroidpublisherInappproductsUpdateResponse res = sdk.inappproducts.androidpublisherInappproductsUpdate(req, new AndroidpublisherInappproductsUpdateSecurity("recusandae", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
