# products

### Available Operations

* [contentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* [contentProductsUpdate](#contentproductsupdate) - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

## contentProductsCustombatch

Retrieves, inserts, and deletes multiple products in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsCustombatchRequest;
import org.openapis.openapi.models.operations.ContentProductsCustombatchResponse;
import org.openapis.openapi.models.operations.ContentProductsCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Installment;
import org.openapis.openapi.models.shared.LoyaltyPoints;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.ProductDimension;
import org.openapis.openapi.models.shared.ProductProductDetail;
import org.openapis.openapi.models.shared.ProductShipping;
import org.openapis.openapi.models.shared.ProductShippingDimension;
import org.openapis.openapi.models.shared.ProductShippingWeight;
import org.openapis.openapi.models.shared.ProductSubscriptionCost;
import org.openapis.openapi.models.shared.ProductTax;
import org.openapis.openapi.models.shared.ProductUnitPricingBaseMeasure;
import org.openapis.openapi.models.shared.ProductUnitPricingMeasure;
import org.openapis.openapi.models.shared.ProductWeight;
import org.openapis.openapi.models.shared.ProductsCustomBatchRequest;
import org.openapis.openapi.models.shared.ProductsCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsCustombatchRequest req = new ContentProductsCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                productsCustomBatchRequest = new ProductsCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.ProductsCustomBatchRequestEntry[]{{
                        add(new ProductsCustomBatchRequestEntry() {{
                            batchId = 29270L;
                            feedId = "illo";
                            merchantId = "iure";
                            method = "incidunt";
                            product = new Product() {{
                                additionalImageLinks = new String[]{{
                                    add("quae"),
                                    add("ea"),
                                    add("asperiores"),
                                    add("veniam"),
                                }};
                                additionalSizeType = "quidem";
                                adsGrouping = "asperiores";
                                adsLabels = new String[]{{
                                    add("deserunt"),
                                    add("repudiandae"),
                                }};
                                adsRedirect = "nemo";
                                adult = false;
                                ageGroup = "molestias";
                                availability = "architecto";
                                availabilityDate = "expedita";
                                brand = "quisquam";
                                canonicalLink = "praesentium";
                                channel = "facilis";
                                color = "assumenda";
                                condition = "repudiandae";
                                contentLanguage = "maiores";
                                costOfGoodsSold = new Price() {{
                                    currency = "ipsum";
                                    value = "commodi";
                                }};
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Marc Doyle";
                                        value = "alias";
                                    }}),
                                }};
                                customLabel0 = "ad";
                                customLabel1 = "a";
                                customLabel2 = "facere";
                                customLabel3 = "id";
                                customLabel4 = "atque";
                                description = "quaerat";
                                disclosureDate = "aperiam";
                                displayAdsId = "dignissimos";
                                displayAdsLink = "quam";
                                displayAdsSimilarIds = new String[]{{
                                    add("fuga"),
                                    add("iure"),
                                }};
                                displayAdsTitle = "deleniti";
                                displayAdsValue = 6382.19;
                                energyEfficiencyClass = "sint";
                                excludedDestinations = new String[]{{
                                    add("dolor"),
                                    add("ad"),
                                    add("illum"),
                                }};
                                expirationDate = "sit";
                                externalSellerId = "molestias";
                                feedLabel = "voluptas";
                                gender = "male";
                                googleProductCategory = "voluptas";
                                gtin = "maiores";
                                id = "66fef020-e9f4-443b-8257-b992c8dbda6a";
                                identifierExists = false;
                                imageLink = "autem";
                                includedDestinations = new String[]{{
                                    add("recusandae"),
                                }};
                                installment = new Installment() {{
                                    amount = new Price() {{
                                        currency = "sapiente";
                                        value = "id";
                                    }};
                                    months = "odit";
                                }};
                                isBundle = false;
                                itemGroupId = "inventore";
                                kind = "iste";
                                lifestyleImageLinks = new String[]{{
                                    add("explicabo"),
                                    add("ullam"),
                                    add("atque"),
                                }};
                                link = "doloribus";
                                linkTemplate = "pariatur";
                                loyaltyPoints = new LoyaltyPoints() {{
                                    name = "Harriet Moore";
                                    pointsValue = "animi";
                                    ratio = 2889.07;
                                }};
                                material = "voluptate";
                                maxEnergyEfficiencyClass = "voluptatibus";
                                maxHandlingTime = "quam";
                                minEnergyEfficiencyClass = "nulla";
                                minHandlingTime = "dolorem";
                                mobileLink = "voluptates";
                                mobileLinkTemplate = "a";
                                mpn = "perferendis";
                                multipack = "quaerat";
                                offerId = "excepturi";
                                pattern = "aliquid";
                                pause = "dolore";
                                pickupMethod = "voluptatem";
                                pickupSla = "illum";
                                price = new Price() {{
                                    currency = "laboriosam";
                                    value = "culpa";
                                }};
                                productDetails = new org.openapis.openapi.models.shared.ProductProductDetail[]{{
                                    add(new ProductProductDetail() {{
                                        attributeName = "atque";
                                        attributeValue = "ratione";
                                        sectionName = "vitae";
                                    }}),
                                }};
                                productHeight = new ProductDimension() {{
                                    unit = "quisquam";
                                    value = 5402.23;
                                }};
                                productHighlights = new String[]{{
                                    add("culpa"),
                                    add("temporibus"),
                                }};
                                productLength = new ProductDimension() {{
                                    unit = "a";
                                    value = 3228.49;
                                }};
                                productTypes = new String[]{{
                                    add("suscipit"),
                                    add("reiciendis"),
                                    add("repellendus"),
                                }};
                                productWeight = new ProductWeight() {{
                                    unit = "delectus";
                                    value = 676.31;
                                }};
                                productWidth = new ProductDimension() {{
                                    unit = "mollitia";
                                    value = 8204.23;
                                }};
                                promotionIds = new String[]{{
                                    add("neque"),
                                    add("quam"),
                                    add("animi"),
                                }};
                                salePrice = new Price() {{
                                    currency = "debitis";
                                    value = "voluptatum";
                                }};
                                salePriceEffectiveDate = "voluptatem";
                                sellOnGoogleQuantity = "quisquam";
                                shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                                    add(new ProductShipping() {{
                                        country = "Saint Vincent and the Grenadines";
                                        locationGroupName = "architecto";
                                        locationId = "sint";
                                        maxHandlingTime = "eligendi";
                                        maxTransitTime = "occaecati";
                                        minHandlingTime = "quis";
                                        minTransitTime = "tempore";
                                        postalCode = "66534-5962";
                                        price = new Price() {{
                                            currency = "hic";
                                            value = "iure";
                                        }};
                                        region = "sint";
                                        service = "autem";
                                    }}),
                                }};
                                shippingHeight = new ProductShippingDimension() {{
                                    unit = "iste";
                                    value = 5865.56;
                                }};
                                shippingLabel = "ab";
                                shippingLength = new ProductShippingDimension() {{
                                    unit = "fuga";
                                    value = 9522.16;
                                }};
                                shippingWeight = new ProductShippingWeight() {{
                                    unit = "dolor";
                                    value = 5280.82;
                                }};
                                shippingWidth = new ProductShippingDimension() {{
                                    unit = "molestias";
                                    value = 8012.74;
                                }};
                                shoppingAdsExcludedCountries = new String[]{{
                                    add("eaque"),
                                    add("consectetur"),
                                    add("autem"),
                                    add("vitae"),
                                }};
                                sizeSystem = "numquam";
                                sizeType = "incidunt";
                                sizes = new String[]{{
                                    add("quos"),
                                    add("minus"),
                                }};
                                source = "voluptate";
                                subscriptionCost = new ProductSubscriptionCost() {{
                                    amount = new Price() {{
                                        currency = "error";
                                        value = "reprehenderit";
                                    }};
                                    period = "reprehenderit";
                                    periodLength = "animi";
                                }};
                                targetCountry = "consequatur";
                                taxCategory = "voluptates";
                                taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                                    add(new ProductTax() {{
                                        country = "Cocos (Keeling) Islands";
                                        locationId = "delectus";
                                        postalCode = "23015";
                                        rate = 8905.05;
                                        region = "a";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Ukraine";
                                        locationId = "eveniet";
                                        postalCode = "52303-1884";
                                        rate = 9296.79;
                                        region = "explicabo";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Guatemala";
                                        locationId = "non";
                                        postalCode = "27134-8966";
                                        rate = 4464.84;
                                        region = "illo";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Kazakhstan";
                                        locationId = "consequatur";
                                        postalCode = "22367-8933";
                                        rate = 4642.9;
                                        region = "fuga";
                                        taxShip = false;
                                    }}),
                                }};
                                title = "Miss";
                                transitTimeLabel = "repellat";
                                unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                                    unit = "cupiditate";
                                    value = "soluta";
                                }};
                                unitPricingMeasure = new ProductUnitPricingMeasure() {{
                                    unit = "tempore";
                                    value = 6361.9;
                                }};
                            }};
                            productId = "fugiat";
                            updateMask = "inventore";
                        }}),
                        add(new ProductsCustomBatchRequestEntry() {{
                            batchId = 541743L;
                            feedId = "ad";
                            merchantId = "sapiente";
                            method = "voluptates";
                            product = new Product() {{
                                additionalImageLinks = new String[]{{
                                    add("nesciunt"),
                                    add("ab"),
                                }};
                                additionalSizeType = "quibusdam";
                                adsGrouping = "suscipit";
                                adsLabels = new String[]{{
                                    add("delectus"),
                                    add("nemo"),
                                    add("cumque"),
                                }};
                                adsRedirect = "voluptatum";
                                adult = false;
                                ageGroup = "sequi";
                                availability = "atque";
                                availabilityDate = "maiores";
                                brand = "expedita";
                                canonicalLink = "rerum";
                                channel = "totam";
                                color = "quod";
                                condition = "aspernatur";
                                contentLanguage = "eaque";
                                costOfGoodsSold = new Price() {{
                                    currency = "impedit";
                                    value = "nam";
                                }};
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Roosevelt Graham";
                                        value = "eos";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Perry Mayert";
                                        value = "eos";
                                    }}),
                                }};
                                customLabel0 = "amet";
                                customLabel1 = "incidunt";
                                customLabel2 = "porro";
                                customLabel3 = "occaecati";
                                customLabel4 = "reiciendis";
                                description = "voluptate";
                                disclosureDate = "tempore";
                                displayAdsId = "in";
                                displayAdsLink = "omnis";
                                displayAdsSimilarIds = new String[]{{
                                    add("tenetur"),
                                    add("recusandae"),
                                    add("expedita"),
                                    add("iusto"),
                                }};
                                displayAdsTitle = "esse";
                                displayAdsValue = 6873.52;
                                energyEfficiencyClass = "ad";
                                excludedDestinations = new String[]{{
                                    add("ratione"),
                                    add("totam"),
                                    add("vero"),
                                    add("dolore"),
                                }};
                                expirationDate = "nam";
                                externalSellerId = "officia";
                                feedLabel = "maiores";
                                gender = "male";
                                googleProductCategory = "illo";
                                gtin = "saepe";
                                id = "506ef890-a54b-4475-b16f-56d385a3c4ac";
                                identifierExists = false;
                                imageLink = "autem";
                                includedDestinations = new String[]{{
                                    add("sunt"),
                                }};
                                installment = new Installment() {{
                                    amount = new Price() {{
                                        currency = "rerum";
                                        value = "occaecati";
                                    }};
                                    months = "provident";
                                }};
                                isBundle = false;
                                itemGroupId = "necessitatibus";
                                kind = "fugit";
                                lifestyleImageLinks = new String[]{{
                                    add("optio"),
                                    add("eveniet"),
                                }};
                                link = "fugiat";
                                linkTemplate = "blanditiis";
                                loyaltyPoints = new LoyaltyPoints() {{
                                    name = "Jeremiah Williamson";
                                    pointsValue = "molestias";
                                    ratio = 2913.44;
                                }};
                                material = "et";
                                maxEnergyEfficiencyClass = "accusantium";
                                maxHandlingTime = "maiores";
                                minEnergyEfficiencyClass = "nisi";
                                minHandlingTime = "velit";
                                mobileLink = "tempore";
                                mobileLinkTemplate = "expedita";
                                mpn = "hic";
                                multipack = "blanditiis";
                                offerId = "vitae";
                                pattern = "iusto";
                                pause = "atque";
                                pickupMethod = "velit";
                                pickupSla = "molestiae";
                                price = new Price() {{
                                    currency = "nam";
                                    value = "aperiam";
                                }};
                                productDetails = new org.openapis.openapi.models.shared.ProductProductDetail[]{{
                                    add(new ProductProductDetail() {{
                                        attributeName = "mollitia";
                                        attributeValue = "asperiores";
                                        sectionName = "at";
                                    }}),
                                }};
                                productHeight = new ProductDimension() {{
                                    unit = "quibusdam";
                                    value = 4618.53;
                                }};
                                productHighlights = new String[]{{
                                    add("rem"),
                                    add("vel"),
                                    add("eos"),
                                }};
                                productLength = new ProductDimension() {{
                                    unit = "labore";
                                    value = 1211.18;
                                }};
                                productTypes = new String[]{{
                                    add("iste"),
                                    add("accusamus"),
                                    add("distinctio"),
                                }};
                                productWeight = new ProductWeight() {{
                                    unit = "incidunt";
                                    value = 2875.03;
                                }};
                                productWidth = new ProductDimension() {{
                                    unit = "blanditiis";
                                    value = 4994.51;
                                }};
                                promotionIds = new String[]{{
                                    add("sapiente"),
                                }};
                                salePrice = new Price() {{
                                    currency = "quis";
                                    value = "accusantium";
                                }};
                                salePriceEffectiveDate = "ratione";
                                sellOnGoogleQuantity = "consectetur";
                                shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                                    add(new ProductShipping() {{
                                        country = "Bolivia";
                                        locationGroupName = "sint";
                                        locationId = "possimus";
                                        maxHandlingTime = "tempore";
                                        maxTransitTime = "asperiores";
                                        minHandlingTime = "quasi";
                                        minTransitTime = "consequuntur";
                                        postalCode = "78203";
                                        price = new Price() {{
                                            currency = "magni";
                                            value = "itaque";
                                        }};
                                        region = "error";
                                        service = "expedita";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Nepal";
                                        locationGroupName = "placeat";
                                        locationId = "temporibus";
                                        maxHandlingTime = "voluptate";
                                        maxTransitTime = "earum";
                                        minHandlingTime = "minima";
                                        minTransitTime = "odit";
                                        postalCode = "26460";
                                        price = new Price() {{
                                            currency = "itaque";
                                            value = "ab";
                                        }};
                                        region = "sunt";
                                        service = "amet";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Russian Federation";
                                        locationGroupName = "iusto";
                                        locationId = "corrupti";
                                        maxHandlingTime = "non";
                                        maxTransitTime = "esse";
                                        minHandlingTime = "vero";
                                        minTransitTime = "eligendi";
                                        postalCode = "69194";
                                        price = new Price() {{
                                            currency = "in";
                                            value = "repellat";
                                        }};
                                        region = "amet";
                                        service = "cumque";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "France";
                                        locationGroupName = "optio";
                                        locationId = "quo";
                                        maxHandlingTime = "repudiandae";
                                        maxTransitTime = "tempora";
                                        minHandlingTime = "libero";
                                        minTransitTime = "suscipit";
                                        postalCode = "44549-9273";
                                        price = new Price() {{
                                            currency = "nihil";
                                            value = "eius";
                                        }};
                                        region = "dignissimos";
                                        service = "corporis";
                                    }}),
                                }};
                                shippingHeight = new ProductShippingDimension() {{
                                    unit = "perferendis";
                                    value = 1008.04;
                                }};
                                shippingLabel = "amet";
                                shippingLength = new ProductShippingDimension() {{
                                    unit = "corporis";
                                    value = 4713.02;
                                }};
                                shippingWeight = new ProductShippingWeight() {{
                                    unit = "officiis";
                                    value = 2937.99;
                                }};
                                shippingWidth = new ProductShippingDimension() {{
                                    unit = "magnam";
                                    value = 9818.17;
                                }};
                                shoppingAdsExcludedCountries = new String[]{{
                                    add("dicta"),
                                    add("hic"),
                                }};
                                sizeSystem = "praesentium";
                                sizeType = "libero";
                                sizes = new String[]{{
                                    add("totam"),
                                }};
                                source = "tempora";
                                subscriptionCost = new ProductSubscriptionCost() {{
                                    amount = new Price() {{
                                        currency = "quo";
                                        value = "dolor";
                                    }};
                                    period = "sunt";
                                    periodLength = "omnis";
                                }};
                                targetCountry = "quam";
                                taxCategory = "officiis";
                                taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                                    add(new ProductTax() {{
                                        country = "Mayotte";
                                        locationId = "consectetur";
                                        postalCode = "12333-4952";
                                        rate = 5463.29;
                                        region = "nihil";
                                        taxShip = false;
                                    }}),
                                }};
                                title = "Mrs.";
                                transitTimeLabel = "placeat";
                                unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                                    unit = "fugit";
                                    value = "facere";
                                }};
                                unitPricingMeasure = new ProductUnitPricingMeasure() {{
                                    unit = "ipsam";
                                    value = 7503.43;
                                }};
                            }};
                            productId = "porro";
                            updateMask = "labore";
                        }}),
                    }};
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "qui";
                key = "consectetur";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "iure";
                uploadProtocol = "aliquid";
            }};            

            ContentProductsCustombatchResponse res = sdk.products.contentProductsCustombatch(req, new ContentProductsCustombatchSecurity("cum", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productsCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductsDelete

Deletes a product from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsDeleteRequest;
import org.openapis.openapi.models.operations.ContentProductsDeleteResponse;
import org.openapis.openapi.models.operations.ContentProductsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsDeleteRequest req = new ContentProductsDeleteRequest("rem", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "aut";
                feedId = "voluptatem";
                fields = "libero";
                key = "excepturi";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "officiis";
                uploadProtocol = "delectus";
            }};            

            ContentProductsDeleteResponse res = sdk.products.contentProductsDelete(req, new ContentProductsDeleteSecurity("magni", "sit") {{
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

## contentProductsGet

Retrieves a product from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsGetRequest;
import org.openapis.openapi.models.operations.ContentProductsGetResponse;
import org.openapis.openapi.models.operations.ContentProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsGetRequest req = new ContentProductsGetRequest("velit", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "corporis";
                key = "cupiditate";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "quod";
                uploadProtocol = "quo";
            }};            

            ContentProductsGetResponse res = sdk.products.contentProductsGet(req, new ContentProductsGetSecurity("architecto", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductsInsert

Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsInsertRequest;
import org.openapis.openapi.models.operations.ContentProductsInsertResponse;
import org.openapis.openapi.models.operations.ContentProductsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Installment;
import org.openapis.openapi.models.shared.LoyaltyPoints;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.ProductDimension;
import org.openapis.openapi.models.shared.ProductProductDetail;
import org.openapis.openapi.models.shared.ProductShipping;
import org.openapis.openapi.models.shared.ProductShippingDimension;
import org.openapis.openapi.models.shared.ProductShippingWeight;
import org.openapis.openapi.models.shared.ProductSubscriptionCost;
import org.openapis.openapi.models.shared.ProductTax;
import org.openapis.openapi.models.shared.ProductUnitPricingBaseMeasure;
import org.openapis.openapi.models.shared.ProductUnitPricingMeasure;
import org.openapis.openapi.models.shared.ProductWeight;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsInsertRequest req = new ContentProductsInsertRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                product = new Product() {{
                    additionalImageLinks = new String[]{{
                        add("aperiam"),
                        add("voluptatem"),
                    }};
                    additionalSizeType = "non";
                    adsGrouping = "beatae";
                    adsLabels = new String[]{{
                        add("rerum"),
                    }};
                    adsRedirect = "ipsum";
                    adult = false;
                    ageGroup = "debitis";
                    availability = "quis";
                    availabilityDate = "eaque";
                    brand = "incidunt";
                    canonicalLink = "ut";
                    channel = "delectus";
                    color = "aliquid";
                    condition = "ullam";
                    contentLanguage = "maiores";
                    costOfGoodsSold = new Price() {{
                        currency = "debitis";
                        value = "reprehenderit";
                    }};;
                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Alexander Berge";
                            value = "assumenda";
                        }}),
                    }};
                    customLabel0 = "consequatur";
                    customLabel1 = "cumque";
                    customLabel2 = "placeat";
                    customLabel3 = "adipisci";
                    customLabel4 = "tenetur";
                    description = "non";
                    disclosureDate = "accusantium";
                    displayAdsId = "corrupti";
                    displayAdsLink = "itaque";
                    displayAdsSimilarIds = new String[]{{
                        add("impedit"),
                        add("dicta"),
                        add("corporis"),
                        add("impedit"),
                    }};
                    displayAdsTitle = "eveniet";
                    displayAdsValue = 7376.01;
                    energyEfficiencyClass = "dolore";
                    excludedDestinations = new String[]{{
                        add("ea"),
                        add("officiis"),
                        add("quasi"),
                        add("accusamus"),
                    }};
                    expirationDate = "animi";
                    externalSellerId = "necessitatibus";
                    feedLabel = "voluptatem";
                    gender = "male";
                    googleProductCategory = "odio";
                    gtin = "veniam";
                    id = "aedf2aca-b58b-4991-8926-ddb589461e74";
                    identifierExists = false;
                    imageLink = "fugit";
                    includedDestinations = new String[]{{
                        add("optio"),
                    }};
                    installment = new Installment() {{
                        amount = new Price() {{
                            currency = "nobis";
                            value = "recusandae";
                        }};;
                        months = "commodi";
                    }};;
                    isBundle = false;
                    itemGroupId = "possimus";
                    kind = "provident";
                    lifestyleImageLinks = new String[]{{
                        add("sit"),
                        add("fugit"),
                    }};
                    link = "a";
                    linkTemplate = "consequatur";
                    loyaltyPoints = new LoyaltyPoints() {{
                        name = "Orlando Muller MD";
                        pointsValue = "voluptas";
                        ratio = 5754.33;
                    }};;
                    material = "maiores";
                    maxEnergyEfficiencyClass = "nihil";
                    maxHandlingTime = "fuga";
                    minEnergyEfficiencyClass = "cumque";
                    minHandlingTime = "consequuntur";
                    mobileLink = "maiores";
                    mobileLinkTemplate = "esse";
                    mpn = "explicabo";
                    multipack = "delectus";
                    offerId = "quos";
                    pattern = "deleniti";
                    pause = "enim";
                    pickupMethod = "sit";
                    pickupSla = "voluptatem";
                    price = new Price() {{
                        currency = "natus";
                        value = "voluptatem";
                    }};;
                    productDetails = new org.openapis.openapi.models.shared.ProductProductDetail[]{{
                        add(new ProductProductDetail() {{
                            attributeName = "occaecati";
                            attributeValue = "quasi";
                            sectionName = "veritatis";
                        }}),
                        add(new ProductProductDetail() {{
                            attributeName = "ex";
                            attributeValue = "doloremque";
                            sectionName = "quas";
                        }}),
                    }};
                    productHeight = new ProductDimension() {{
                        unit = "dolores";
                        value = 170.4;
                    }};;
                    productHighlights = new String[]{{
                        add("quas"),
                        add("blanditiis"),
                    }};
                    productLength = new ProductDimension() {{
                        unit = "laudantium";
                        value = 9152.67;
                    }};;
                    productTypes = new String[]{{
                        add("autem"),
                        add("vel"),
                        add("beatae"),
                        add("quos"),
                    }};
                    productWeight = new ProductWeight() {{
                        unit = "consectetur";
                        value = 7420.1;
                    }};;
                    productWidth = new ProductDimension() {{
                        unit = "tenetur";
                        value = 8971.46;
                    }};;
                    promotionIds = new String[]{{
                        add("suscipit"),
                        add("ullam"),
                        add("unde"),
                    }};
                    salePrice = new Price() {{
                        currency = "debitis";
                        value = "quidem";
                    }};;
                    salePriceEffectiveDate = "magnam";
                    sellOnGoogleQuantity = "doloremque";
                    shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                        add(new ProductShipping() {{
                            country = "Sierra Leone";
                            locationGroupName = "sunt";
                            locationId = "voluptas";
                            maxHandlingTime = "earum";
                            maxTransitTime = "est";
                            minHandlingTime = "earum";
                            minTransitTime = "nihil";
                            postalCode = "70731";
                            price = new Price() {{
                                currency = "eos";
                                value = "id";
                            }};
                            region = "modi";
                            service = "illum";
                        }}),
                        add(new ProductShipping() {{
                            country = "Netherlands Antilles";
                            locationGroupName = "consectetur";
                            locationId = "reprehenderit";
                            maxHandlingTime = "eligendi";
                            maxTransitTime = "cum";
                            minHandlingTime = "culpa";
                            minTransitTime = "culpa";
                            postalCode = "32317-3521";
                            price = new Price() {{
                                currency = "eligendi";
                                value = "cupiditate";
                            }};
                            region = "tempore";
                            service = "odit";
                        }}),
                        add(new ProductShipping() {{
                            country = "Oman";
                            locationGroupName = "at";
                            locationId = "ipsum";
                            maxHandlingTime = "explicabo";
                            maxTransitTime = "nulla";
                            minHandlingTime = "est";
                            minTransitTime = "sapiente";
                            postalCode = "50655-9222";
                            price = new Price() {{
                                currency = "ut";
                                value = "enim";
                            }};
                            region = "nihil";
                            service = "ratione";
                        }}),
                        add(new ProductShipping() {{
                            country = "United States Minor Outlying Islands";
                            locationGroupName = "saepe";
                            locationId = "quod";
                            maxHandlingTime = "nulla";
                            maxTransitTime = "tempora";
                            minHandlingTime = "quam";
                            minTransitTime = "consectetur";
                            postalCode = "19428";
                            price = new Price() {{
                                currency = "quos";
                                value = "sed";
                            }};
                            region = "eaque";
                            service = "natus";
                        }}),
                    }};
                    shippingHeight = new ProductShippingDimension() {{
                        unit = "ratione";
                        value = 4722.9;
                    }};;
                    shippingLabel = "unde";
                    shippingLength = new ProductShippingDimension() {{
                        unit = "deserunt";
                        value = 6621.84;
                    }};;
                    shippingWeight = new ProductShippingWeight() {{
                        unit = "ex";
                        value = 5809.96;
                    }};;
                    shippingWidth = new ProductShippingDimension() {{
                        unit = "optio";
                        value = 8696.02;
                    }};;
                    shoppingAdsExcludedCountries = new String[]{{
                        add("asperiores"),
                        add("nam"),
                    }};
                    sizeSystem = "cumque";
                    sizeType = "sapiente";
                    sizes = new String[]{{
                        add("occaecati"),
                        add("repellendus"),
                    }};
                    source = "culpa";
                    subscriptionCost = new ProductSubscriptionCost() {{
                        amount = new Price() {{
                            currency = "dicta";
                            value = "rem";
                        }};;
                        period = "fuga";
                        periodLength = "odio";
                    }};;
                    targetCountry = "totam";
                    taxCategory = "magni";
                    taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                        add(new ProductTax() {{
                            country = "Panama";
                            locationId = "voluptatibus";
                            postalCode = "35638-3541";
                            rate = 6574.85;
                            region = "possimus";
                            taxShip = false;
                        }}),
                    }};
                    title = "Miss";
                    transitTimeLabel = "ullam";
                    unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                        unit = "quaerat";
                        value = "maiores";
                    }};;
                    unitPricingMeasure = new ProductUnitPricingMeasure() {{
                        unit = "iste";
                        value = 8838.26;
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "odio";
                feedId = "ullam";
                fields = "inventore";
                key = "eligendi";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "necessitatibus";
                uploadProtocol = "rem";
            }};            

            ContentProductsInsertResponse res = sdk.products.contentProductsInsert(req, new ContentProductsInsertSecurity("a", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductsList

Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsListRequest;
import org.openapis.openapi.models.operations.ContentProductsListResponse;
import org.openapis.openapi.models.operations.ContentProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsListRequest req = new ContentProductsListRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "nulla";
                key = "quod";
                maxResults = 247457L;
                oauthToken = "dolore";
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "blanditiis";
                uploadProtocol = "modi";
            }};            

            ContentProductsListResponse res = sdk.products.contentProductsList(req, new ContentProductsListSecurity("illo", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductsUpdate

Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductsUpdateRequest;
import org.openapis.openapi.models.operations.ContentProductsUpdateResponse;
import org.openapis.openapi.models.operations.ContentProductsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Installment;
import org.openapis.openapi.models.shared.LoyaltyPoints;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.ProductDimension;
import org.openapis.openapi.models.shared.ProductProductDetail;
import org.openapis.openapi.models.shared.ProductShipping;
import org.openapis.openapi.models.shared.ProductShippingDimension;
import org.openapis.openapi.models.shared.ProductShippingWeight;
import org.openapis.openapi.models.shared.ProductSubscriptionCost;
import org.openapis.openapi.models.shared.ProductTax;
import org.openapis.openapi.models.shared.ProductUnitPricingBaseMeasure;
import org.openapis.openapi.models.shared.ProductUnitPricingMeasure;
import org.openapis.openapi.models.shared.ProductWeight;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsUpdateRequest req = new ContentProductsUpdateRequest("et", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                product = new Product() {{
                    additionalImageLinks = new String[]{{
                        add("eius"),
                        add("nostrum"),
                    }};
                    additionalSizeType = "ex";
                    adsGrouping = "amet";
                    adsLabels = new String[]{{
                        add("molestias"),
                        add("voluptatibus"),
                    }};
                    adsRedirect = "ipsum";
                    adult = false;
                    ageGroup = "hic";
                    availability = "quidem";
                    availabilityDate = "odit";
                    brand = "molestiae";
                    canonicalLink = "accusamus";
                    channel = "quia";
                    color = "inventore";
                    condition = "doloribus";
                    contentLanguage = "praesentium";
                    costOfGoodsSold = new Price() {{
                        currency = "aliquid";
                        value = "consequuntur";
                    }};;
                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Latoya Emmerich";
                            value = "maxime";
                        }}),
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Terrance Weissnat";
                            value = "iusto";
                        }}),
                    }};
                    customLabel0 = "quod";
                    customLabel1 = "saepe";
                    customLabel2 = "ad";
                    customLabel3 = "magni";
                    customLabel4 = "nostrum";
                    description = "minus";
                    disclosureDate = "aliquid";
                    displayAdsId = "quam";
                    displayAdsLink = "ea";
                    displayAdsSimilarIds = new String[]{{
                        add("architecto"),
                        add("fuga"),
                    }};
                    displayAdsTitle = "totam";
                    displayAdsValue = 2443.32;
                    energyEfficiencyClass = "quasi";
                    excludedDestinations = new String[]{{
                        add("officiis"),
                    }};
                    expirationDate = "veniam";
                    externalSellerId = "quae";
                    feedLabel = "dolore";
                    gender = "female";
                    googleProductCategory = "libero";
                    gtin = "ut";
                    id = "c21ccb42-3abc-4dc9-9faa-bdd88e71f6c4";
                    identifierExists = false;
                    imageLink = "quas";
                    includedDestinations = new String[]{{
                        add("veniam"),
                    }};
                    installment = new Installment() {{
                        amount = new Price() {{
                            currency = "sed";
                            value = "quibusdam";
                        }};;
                        months = "reprehenderit";
                    }};;
                    isBundle = false;
                    itemGroupId = "voluptate";
                    kind = "reprehenderit";
                    lifestyleImageLinks = new String[]{{
                        add("eveniet"),
                    }};
                    link = "voluptate";
                    linkTemplate = "hic";
                    loyaltyPoints = new LoyaltyPoints() {{
                        name = "Thomas Kirlin Jr.";
                        pointsValue = "iste";
                        ratio = 8814.13;
                    }};;
                    material = "repellat";
                    maxEnergyEfficiencyClass = "voluptatum";
                    maxHandlingTime = "facere";
                    minEnergyEfficiencyClass = "consequuntur";
                    minHandlingTime = "natus";
                    mobileLink = "repellendus";
                    mobileLinkTemplate = "voluptates";
                    mpn = "illo";
                    multipack = "facere";
                    offerId = "fugiat";
                    pattern = "ducimus";
                    pause = "aut";
                    pickupMethod = "provident";
                    pickupSla = "voluptate";
                    price = new Price() {{
                        currency = "tempore";
                        value = "ullam";
                    }};;
                    productDetails = new org.openapis.openapi.models.shared.ProductProductDetail[]{{
                        add(new ProductProductDetail() {{
                            attributeName = "mollitia";
                            attributeValue = "ipsa";
                            sectionName = "quos";
                        }}),
                        add(new ProductProductDetail() {{
                            attributeName = "quo";
                            attributeValue = "ullam";
                            sectionName = "in";
                        }}),
                        add(new ProductProductDetail() {{
                            attributeName = "doloribus";
                            attributeValue = "id";
                            sectionName = "eum";
                        }}),
                        add(new ProductProductDetail() {{
                            attributeName = "cumque";
                            attributeValue = "odio";
                            sectionName = "atque";
                        }}),
                    }};
                    productHeight = new ProductDimension() {{
                        unit = "similique";
                        value = 1585.15;
                    }};;
                    productHighlights = new String[]{{
                        add("ea"),
                    }};
                    productLength = new ProductDimension() {{
                        unit = "accusamus";
                        value = 768.73;
                    }};;
                    productTypes = new String[]{{
                        add("harum"),
                        add("laborum"),
                        add("a"),
                    }};
                    productWeight = new ProductWeight() {{
                        unit = "repudiandae";
                        value = 7952.53;
                    }};;
                    productWidth = new ProductDimension() {{
                        unit = "officia";
                        value = 3897.86;
                    }};;
                    promotionIds = new String[]{{
                        add("cupiditate"),
                    }};
                    salePrice = new Price() {{
                        currency = "veritatis";
                        value = "aliquam";
                    }};;
                    salePriceEffectiveDate = "excepturi";
                    sellOnGoogleQuantity = "atque";
                    shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                        add(new ProductShipping() {{
                            country = "French Polynesia";
                            locationGroupName = "doloremque";
                            locationId = "cum";
                            maxHandlingTime = "suscipit";
                            maxTransitTime = "eius";
                            minHandlingTime = "maiores";
                            minTransitTime = "delectus";
                            postalCode = "68040-9902";
                            price = new Price() {{
                                currency = "distinctio";
                                value = "quaerat";
                            }};
                            region = "a";
                            service = "neque";
                        }}),
                    }};
                    shippingHeight = new ProductShippingDimension() {{
                        unit = "nihil";
                        value = 9281.02;
                    }};;
                    shippingLabel = "numquam";
                    shippingLength = new ProductShippingDimension() {{
                        unit = "mollitia";
                        value = 6515.04;
                    }};;
                    shippingWeight = new ProductShippingWeight() {{
                        unit = "blanditiis";
                        value = 3819.74;
                    }};;
                    shippingWidth = new ProductShippingDimension() {{
                        unit = "quas";
                        value = 3385.42;
                    }};;
                    shoppingAdsExcludedCountries = new String[]{{
                        add("corporis"),
                        add("iste"),
                    }};
                    sizeSystem = "ea";
                    sizeType = "autem";
                    sizes = new String[]{{
                        add("nesciunt"),
                        add("magni"),
                    }};
                    source = "animi";
                    subscriptionCost = new ProductSubscriptionCost() {{
                        amount = new Price() {{
                            currency = "dolorum";
                            value = "voluptas";
                        }};;
                        period = "temporibus";
                        periodLength = "porro";
                    }};;
                    targetCountry = "tempore";
                    taxCategory = "commodi";
                    taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                        add(new ProductTax() {{
                            country = "Lithuania";
                            locationId = "magni";
                            postalCode = "74095-7983";
                            rate = 9539.21;
                            region = "tempore";
                            taxShip = false;
                        }}),
                        add(new ProductTax() {{
                            country = "Honduras";
                            locationId = "earum";
                            postalCode = "16665-9425";
                            rate = 2913.61;
                            region = "aliquid";
                            taxShip = false;
                        }}),
                    }};
                    title = "Dr.";
                    transitTimeLabel = "aspernatur";
                    unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                        unit = "quod";
                        value = "dolorem";
                    }};;
                    unitPricingMeasure = new ProductUnitPricingMeasure() {{
                        unit = "neque";
                        value = 563.71;
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "aut";
                key = "ullam";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "iure";
                updateMask = "quibusdam";
                uploadType = "sint";
                uploadProtocol = "voluptates";
            }};            

            ContentProductsUpdateResponse res = sdk.products.contentProductsUpdate(req, new ContentProductsUpdateSecurity("nihil", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
