# products

### Available Operations

* [contentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

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
import org.openapis.openapi.models.shared.CustomGroup;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.Installment;
import org.openapis.openapi.models.shared.LoyaltyPoints;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.ProductAspect;
import org.openapis.openapi.models.shared.ProductDestination;
import org.openapis.openapi.models.shared.ProductShipping;
import org.openapis.openapi.models.shared.ProductShippingDimension;
import org.openapis.openapi.models.shared.ProductShippingWeight;
import org.openapis.openapi.models.shared.ProductTax;
import org.openapis.openapi.models.shared.ProductUnitPricingBaseMeasure;
import org.openapis.openapi.models.shared.ProductUnitPricingMeasure;
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
                            batchId = 219279L;
                            merchantId = "accusamus";
                            method = "quisquam";
                            product = new Product() {{
                                additionalImageLinks = new String[]{{
                                    add("fugit"),
                                }};
                                additionalProductTypes = new String[]{{
                                    add("temporibus"),
                                    add("mollitia"),
                                    add("id"),
                                    add("quibusdam"),
                                }};
                                adult = false;
                                adwordsGrouping = "ipsa";
                                adwordsLabels = new String[]{{
                                    add("placeat"),
                                    add("quam"),
                                    add("similique"),
                                    add("delectus"),
                                }};
                                adwordsRedirect = "saepe";
                                ageGroup = "facere";
                                aspects = new org.openapis.openapi.models.shared.ProductAspect[]{{
                                    add(new ProductAspect() {{
                                        aspectName = "at";
                                        destinationName = "molestias";
                                        intention = "aut";
                                    }}),
                                    add(new ProductAspect() {{
                                        aspectName = "temporibus";
                                        destinationName = "tenetur";
                                        intention = "incidunt";
                                    }}),
                                    add(new ProductAspect() {{
                                        aspectName = "numquam";
                                        destinationName = "corrupti";
                                        intention = "similique";
                                    }}),
                                }};
                                availability = "dolore";
                                availabilityDate = "esse";
                                brand = "reiciendis";
                                canonicalLink = "iste";
                                channel = "amet";
                                color = "occaecati";
                                condition = "aut";
                                contentLanguage = "impedit";
                                costOfGoodsSold = new Price() {{
                                    currency = "minima";
                                    value = "quos";
                                }};
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        name = "Donald McLaughlin";
                                        type = "vero";
                                        unit = "fuga";
                                        value = "facilis";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Evan Walter";
                                        type = "sapiente";
                                        unit = "voluptatibus";
                                        value = "assumenda";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Arturo Wisoky";
                                        type = "aut";
                                        unit = "quam";
                                        value = "omnis";
                                    }}),
                                }};
                                customGroups = new org.openapis.openapi.models.shared.CustomGroup[]{{
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Muriel Durgan";
                                                type = "sed";
                                                unit = "non";
                                                value = "porro";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Gerardo Beer";
                                                type = "vero";
                                                unit = "eos";
                                                value = "quas";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Alice Langosh";
                                                type = "enim";
                                                unit = "iure";
                                                value = "laudantium";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Megan Tillman";
                                                type = "quibusdam";
                                                unit = "praesentium";
                                                value = "enim";
                                            }}),
                                        }};
                                        name = "Wade Berge";
                                    }}),
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Norma Lakin";
                                                type = "reiciendis";
                                                unit = "placeat";
                                                value = "dolores";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Peggy Crist";
                                                type = "quo";
                                                unit = "laudantium";
                                                value = "dignissimos";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Alejandro Considine";
                                                type = "molestiae";
                                                unit = "debitis";
                                                value = "vitae";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Geraldine Lindgren";
                                                type = "reprehenderit";
                                                unit = "deserunt";
                                                value = "itaque";
                                            }}),
                                        }};
                                        name = "Lois Rutherford";
                                    }}),
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Essie Larkin";
                                                type = "repudiandae";
                                                unit = "dicta";
                                                value = "inventore";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Heidi Bode";
                                                type = "dolorem";
                                                unit = "eaque";
                                                value = "exercitationem";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Allison Kling";
                                                type = "a";
                                                unit = "fuga";
                                                value = "totam";
                                            }}),
                                        }};
                                        name = "Wilfred Yost";
                                    }}),
                                }};
                                customLabel0 = "exercitationem";
                                customLabel1 = "voluptates";
                                customLabel2 = "sequi";
                                customLabel3 = "quis";
                                customLabel4 = "commodi";
                                description = "vel";
                                destinations = new org.openapis.openapi.models.shared.ProductDestination[]{{
                                    add(new ProductDestination() {{
                                        destinationName = "aliquid";
                                        intention = "aperiam";
                                    }}),
                                    add(new ProductDestination() {{
                                        destinationName = "perspiciatis";
                                        intention = "fugit";
                                    }}),
                                    add(new ProductDestination() {{
                                        destinationName = "itaque";
                                        intention = "unde";
                                    }}),
                                }};
                                displayAdsId = "cumque";
                                displayAdsLink = "dolor";
                                displayAdsSimilarIds = new String[]{{
                                    add("temporibus"),
                                    add("minus"),
                                    add("minima"),
                                    add("a"),
                                }};
                                displayAdsTitle = "beatae";
                                displayAdsValue = 1142.12;
                                energyEfficiencyClass = "veritatis";
                                expirationDate = "facere";
                                gender = "male";
                                googleProductCategory = "laborum";
                                gtin = "dicta";
                                id = "026d541a-4d19-40fe-b217-80bccc0dbbdd";
                                identifierExists = false;
                                imageLink = "soluta";
                                installment = new Installment() {{
                                    amount = new Price() {{
                                        currency = "magnam";
                                        value = "laudantium";
                                    }};
                                    months = "tempora";
                                }};
                                isBundle = false;
                                itemGroupId = "esse";
                                kind = "doloremque";
                                link = "corrupti";
                                loyaltyPoints = new LoyaltyPoints() {{
                                    name = "Cesar Haag";
                                    pointsValue = "natus";
                                    ratio = 682.53;
                                }};
                                material = "officiis";
                                maxEnergyEfficiencyClass = "eum";
                                maxHandlingTime = "rerum";
                                minEnergyEfficiencyClass = "placeat";
                                minHandlingTime = "ab";
                                mobileLink = "ad";
                                mpn = "blanditiis";
                                multipack = "porro";
                                offerId = "labore";
                                onlineOnly = false;
                                pattern = "impedit";
                                price = new Price() {{
                                    currency = "ut";
                                    value = "earum";
                                }};
                                productType = "ullam";
                                promotionIds = new String[]{{
                                    add("enim"),
                                    add("cupiditate"),
                                }};
                                salePrice = new Price() {{
                                    currency = "occaecati";
                                    value = "itaque";
                                }};
                                salePriceEffectiveDate = "fuga";
                                sellOnGoogleQuantity = "consectetur";
                                shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                                    add(new ProductShipping() {{
                                        country = "Bulgaria";
                                        locationGroupName = "explicabo";
                                        locationId = "suscipit";
                                        postalCode = "95710";
                                        price = new Price() {{
                                            currency = "consequatur";
                                            value = "impedit";
                                        }};
                                        region = "recusandae";
                                        service = "voluptate";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Maldives";
                                        locationGroupName = "est";
                                        locationId = "et";
                                        postalCode = "85964-6061";
                                        price = new Price() {{
                                            currency = "architecto";
                                            value = "suscipit";
                                        }};
                                        region = "eligendi";
                                        service = "officiis";
                                    }}),
                                }};
                                shippingHeight = new ProductShippingDimension() {{
                                    unit = "dignissimos";
                                    value = 1480.38;
                                }};
                                shippingLabel = "ratione";
                                shippingLength = new ProductShippingDimension() {{
                                    unit = "possimus";
                                    value = 3115.48;
                                }};
                                shippingWeight = new ProductShippingWeight() {{
                                    unit = "aut";
                                    value = 6205.34;
                                }};
                                shippingWidth = new ProductShippingDimension() {{
                                    unit = "esse";
                                    value = 9639.08;
                                }};
                                sizeSystem = "deserunt";
                                sizeType = "ratione";
                                sizes = new String[]{{
                                    add("debitis"),
                                }};
                                source = "iste";
                                targetCountry = "deserunt";
                                taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                                    add(new ProductTax() {{
                                        country = "Liberia";
                                        locationId = "consequuntur";
                                        postalCode = "71611";
                                        rate = 1309.34;
                                        region = "consequatur";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Czech Republic";
                                        locationId = "consequatur";
                                        postalCode = "52936-9744";
                                        rate = 5920.88;
                                        region = "occaecati";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "South Georgia and the South Sandwich Islands";
                                        locationId = "sunt";
                                        postalCode = "85709";
                                        rate = 5427.83;
                                        region = "magnam";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Montserrat";
                                        locationId = "amet";
                                        postalCode = "13987-3175";
                                        rate = 4484.82;
                                        region = "commodi";
                                        taxShip = false;
                                    }}),
                                }};
                                title = "Dr.";
                                unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                                    unit = "sed";
                                    value = "minus";
                                }};
                                unitPricingMeasure = new ProductUnitPricingMeasure() {{
                                    unit = "consequuntur";
                                    value = 8209;
                                }};
                                validatedDestinations = new String[]{{
                                    add("harum"),
                                    add("aliquam"),
                                    add("eligendi"),
                                    add("hic"),
                                }};
                                warnings = new org.openapis.openapi.models.shared.Error[]{{
                                    add(new Error() {{
                                        domain = "illo";
                                        message = "nobis";
                                        reason = "esse";
                                    }}),
                                    add(new Error() {{
                                        domain = "nisi";
                                        message = "explicabo";
                                        reason = "sequi";
                                    }}),
                                    add(new Error() {{
                                        domain = "alias";
                                        message = "reiciendis";
                                        reason = "quos";
                                    }}),
                                    add(new Error() {{
                                        domain = "numquam";
                                        message = "vitae";
                                        reason = "maiores";
                                    }}),
                                }};
                            }};
                            productId = "nam";
                        }}),
                        add(new ProductsCustomBatchRequestEntry() {{
                            batchId = 102184L;
                            merchantId = "rerum";
                            method = "assumenda";
                            product = new Product() {{
                                additionalImageLinks = new String[]{{
                                    add("dolorem"),
                                }};
                                additionalProductTypes = new String[]{{
                                    add("repellendus"),
                                    add("nam"),
                                    add("ab"),
                                    add("magnam"),
                                }};
                                adult = false;
                                adwordsGrouping = "pariatur";
                                adwordsLabels = new String[]{{
                                    add("autem"),
                                    add("tempore"),
                                    add("recusandae"),
                                }};
                                adwordsRedirect = "nostrum";
                                ageGroup = "officia";
                                aspects = new org.openapis.openapi.models.shared.ProductAspect[]{{
                                    add(new ProductAspect() {{
                                        aspectName = "laudantium";
                                        destinationName = "corporis";
                                        intention = "excepturi";
                                    }}),
                                    add(new ProductAspect() {{
                                        aspectName = "natus";
                                        destinationName = "deleniti";
                                        intention = "necessitatibus";
                                    }}),
                                }};
                                availability = "aspernatur";
                                availabilityDate = "dolores";
                                brand = "laborum";
                                canonicalLink = "vero";
                                channel = "eos";
                                color = "voluptatem";
                                condition = "temporibus";
                                contentLanguage = "id";
                                costOfGoodsSold = new Price() {{
                                    currency = "quae";
                                    value = "commodi";
                                }};
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        name = "Louis Reichert";
                                        type = "ab";
                                        unit = "deserunt";
                                        value = "sed";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Perry Schroeder";
                                        type = "itaque";
                                        unit = "rem";
                                        value = "nemo";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Mrs. Kate Moen";
                                        type = "occaecati";
                                        unit = "quibusdam";
                                        value = "magni";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Marilyn Gibson";
                                        type = "vel";
                                        unit = "cupiditate";
                                        value = "modi";
                                    }}),
                                }};
                                customGroups = new org.openapis.openapi.models.shared.CustomGroup[]{{
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Ms. Sharon Kuhlman";
                                                type = "delectus";
                                                unit = "quam";
                                                value = "dolorum";
                                            }}),
                                        }};
                                        name = "Johnny Krajcik";
                                    }}),
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Irene Davis";
                                                type = "vitae";
                                                unit = "occaecati";
                                                value = "labore";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Willis Heller";
                                                type = "quasi";
                                                unit = "quae";
                                                value = "similique";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Garrett Hoeger";
                                                type = "est";
                                                unit = "doloribus";
                                                value = "provident";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Sandy Considine";
                                                type = "molestiae";
                                                unit = "maxime";
                                                value = "facere";
                                            }}),
                                        }};
                                        name = "Dr. Terrance Lind III";
                                    }}),
                                }};
                                customLabel0 = "laudantium";
                                customLabel1 = "unde";
                                customLabel2 = "corrupti";
                                customLabel3 = "quae";
                                customLabel4 = "facere";
                                description = "ea";
                                destinations = new org.openapis.openapi.models.shared.ProductDestination[]{{
                                    add(new ProductDestination() {{
                                        destinationName = "nam";
                                        intention = "amet";
                                    }}),
                                    add(new ProductDestination() {{
                                        destinationName = "adipisci";
                                        intention = "minus";
                                    }}),
                                    add(new ProductDestination() {{
                                        destinationName = "hic";
                                        intention = "similique";
                                    }}),
                                }};
                                displayAdsId = "fuga";
                                displayAdsLink = "consectetur";
                                displayAdsSimilarIds = new String[]{{
                                    add("laudantium"),
                                    add("cumque"),
                                }};
                                displayAdsTitle = "adipisci";
                                displayAdsValue = 831.64;
                                energyEfficiencyClass = "nam";
                                expirationDate = "voluptatibus";
                                gender = "female";
                                googleProductCategory = "aperiam";
                                gtin = "ducimus";
                                id = "ee4fcf0c-42b7-48f1-9626-398a0dc76632";
                                identifierExists = false;
                                imageLink = "dolore";
                                installment = new Installment() {{
                                    amount = new Price() {{
                                        currency = "maxime";
                                        value = "maxime";
                                    }};
                                    months = "expedita";
                                }};
                                isBundle = false;
                                itemGroupId = "accusantium";
                                kind = "ea";
                                link = "impedit";
                                loyaltyPoints = new LoyaltyPoints() {{
                                    name = "Mr. Benny O'Reilly";
                                    pointsValue = "sit";
                                    ratio = 1720.42;
                                }};
                                material = "enim";
                                maxEnergyEfficiencyClass = "aspernatur";
                                maxHandlingTime = "perspiciatis";
                                minEnergyEfficiencyClass = "magni";
                                minHandlingTime = "odio";
                                mobileLink = "alias";
                                mpn = "quidem";
                                multipack = "deleniti";
                                offerId = "possimus";
                                onlineOnly = false;
                                pattern = "ipsam";
                                price = new Price() {{
                                    currency = "odio";
                                    value = "fugit";
                                }};
                                productType = "aspernatur";
                                promotionIds = new String[]{{
                                    add("illum"),
                                    add("praesentium"),
                                    add("sint"),
                                    add("exercitationem"),
                                }};
                                salePrice = new Price() {{
                                    currency = "cum";
                                    value = "voluptatum";
                                }};
                                salePriceEffectiveDate = "facilis";
                                sellOnGoogleQuantity = "placeat";
                                shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                                    add(new ProductShipping() {{
                                        country = "Chad";
                                        locationGroupName = "dolore";
                                        locationId = "pariatur";
                                        postalCode = "53635-2231";
                                        price = new Price() {{
                                            currency = "tenetur";
                                            value = "molestiae";
                                        }};
                                        region = "dolore";
                                        service = "ullam";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Ecuador";
                                        locationGroupName = "adipisci";
                                        locationId = "cupiditate";
                                        postalCode = "28458-9274";
                                        price = new Price() {{
                                            currency = "necessitatibus";
                                            value = "iste";
                                        }};
                                        region = "nesciunt";
                                        service = "corrupti";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Mongolia";
                                        locationGroupName = "voluptatibus";
                                        locationId = "ullam";
                                        postalCode = "77494-4133";
                                        price = new Price() {{
                                            currency = "doloremque";
                                            value = "est";
                                        }};
                                        region = "qui";
                                        service = "praesentium";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Djibouti";
                                        locationGroupName = "totam";
                                        locationId = "qui";
                                        postalCode = "72526-9812";
                                        price = new Price() {{
                                            currency = "inventore";
                                            value = "minima";
                                        }};
                                        region = "facilis";
                                        service = "facilis";
                                    }}),
                                }};
                                shippingHeight = new ProductShippingDimension() {{
                                    unit = "deserunt";
                                    value = 3927.59;
                                }};
                                shippingLabel = "ipsam";
                                shippingLength = new ProductShippingDimension() {{
                                    unit = "voluptatem";
                                    value = 767.86;
                                }};
                                shippingWeight = new ProductShippingWeight() {{
                                    unit = "iure";
                                    value = 2795.3;
                                }};
                                shippingWidth = new ProductShippingDimension() {{
                                    unit = "eveniet";
                                    value = 622.24;
                                }};
                                sizeSystem = "ea";
                                sizeType = "asperiores";
                                sizes = new String[]{{
                                    add("quidem"),
                                    add("asperiores"),
                                }};
                                source = "eum";
                                targetCountry = "deserunt";
                                taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                                    add(new ProductTax() {{
                                        country = "Guinea-Bissau";
                                        locationId = "molestias";
                                        postalCode = "77578";
                                        rate = 9219.16;
                                        region = "maiores";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Cuba";
                                        locationId = "commodi";
                                        postalCode = "17427";
                                        rate = 1761.04;
                                        region = "alias";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Germany";
                                        locationId = "a";
                                        postalCode = "65304-4264";
                                        rate = 5383.68;
                                        region = "officia";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Mexico";
                                        locationId = "laborum";
                                        postalCode = "38053";
                                        rate = 7132.46;
                                        region = "voluptas";
                                        taxShip = false;
                                    }}),
                                }};
                                title = "Dr.";
                                unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                                    unit = "ea";
                                    value = "vel";
                                }};
                                unitPricingMeasure = new ProductUnitPricingMeasure() {{
                                    unit = "delectus";
                                    value = 8810.67;
                                }};
                                validatedDestinations = new String[]{{
                                    add("consequatur"),
                                    add("sed"),
                                    add("accusantium"),
                                    add("voluptates"),
                                }};
                                warnings = new org.openapis.openapi.models.shared.Error[]{{
                                    add(new Error() {{
                                        domain = "maiores";
                                        message = "quaerat";
                                        reason = "numquam";
                                    }}),
                                    add(new Error() {{
                                        domain = "non";
                                        message = "cum";
                                        reason = "incidunt";
                                    }}),
                                    add(new Error() {{
                                        domain = "dolores";
                                        message = "enim";
                                        reason = "nihil";
                                    }}),
                                }};
                            }};
                            productId = "libero";
                        }}),
                        add(new ProductsCustomBatchRequestEntry() {{
                            batchId = 607205L;
                            merchantId = "excepturi";
                            method = "eos";
                            product = new Product() {{
                                additionalImageLinks = new String[]{{
                                    add("corrupti"),
                                    add("repellendus"),
                                    add("cum"),
                                    add("quibusdam"),
                                }};
                                additionalProductTypes = new String[]{{
                                    add("commodi"),
                                    add("similique"),
                                    add("autem"),
                                }};
                                adult = false;
                                adwordsGrouping = "dicta";
                                adwordsLabels = new String[]{{
                                    add("sapiente"),
                                    add("id"),
                                    add("odit"),
                                    add("inventore"),
                                }};
                                adwordsRedirect = "iste";
                                ageGroup = "atque";
                                aspects = new org.openapis.openapi.models.shared.ProductAspect[]{{
                                    add(new ProductAspect() {{
                                        aspectName = "ullam";
                                        destinationName = "atque";
                                        intention = "doloribus";
                                    }}),
                                }};
                                availability = "pariatur";
                                availabilityDate = "aut";
                                brand = "similique";
                                canonicalLink = "iste";
                                channel = "eveniet";
                                color = "nam";
                                condition = "animi";
                                contentLanguage = "labore";
                                costOfGoodsSold = new Price() {{
                                    currency = "voluptate";
                                    value = "voluptatibus";
                                }};
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        name = "Stanley Von II";
                                        type = "excepturi";
                                        unit = "aliquid";
                                        value = "dolore";
                                    }}),
                                    add(new CustomAttribute() {{
                                        name = "Desiree Howell IV";
                                        type = "ratione";
                                        unit = "vitae";
                                        value = "quisquam";
                                    }}),
                                }};
                                customGroups = new org.openapis.openapi.models.shared.CustomGroup[]{{
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Jake Will";
                                                type = "suscipit";
                                                unit = "reiciendis";
                                                value = "repellendus";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Stephen O'Conner";
                                                type = "neque";
                                                unit = "quam";
                                                value = "animi";
                                            }}),
                                        }};
                                        name = "Jaime Barrows DDS";
                                    }}),
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Guillermo McClure";
                                                type = "officia";
                                                unit = "iste";
                                                value = "unde";
                                            }}),
                                        }};
                                        name = "Rick Kuphal";
                                    }}),
                                    add(new CustomGroup() {{
                                        attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{
                                                name = "Darla Kertzmann";
                                                type = "iste";
                                                unit = "cupiditate";
                                                value = "ab";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Randal Fadel";
                                                type = "quod";
                                                unit = "repudiandae";
                                                value = "eaque";
                                            }}),
                                            add(new CustomAttribute() {{
                                                name = "Stacey Brown";
                                                type = "modi";
                                                unit = "quos";
                                                value = "minus";
                                            }}),
                                        }};
                                        name = "Sabrina Kiehn";
                                    }}),
                                }};
                                customLabel0 = "consequatur";
                                customLabel1 = "voluptates";
                                customLabel2 = "delectus";
                                customLabel3 = "qui";
                                customLabel4 = "delectus";
                                description = "exercitationem";
                                destinations = new org.openapis.openapi.models.shared.ProductDestination[]{{
                                    add(new ProductDestination() {{
                                        destinationName = "laboriosam";
                                        intention = "doloremque";
                                    }}),
                                }};
                                displayAdsId = "sed";
                                displayAdsLink = "voluptatum";
                                displayAdsSimilarIds = new String[]{{
                                    add("a"),
                                    add("itaque"),
                                    add("eveniet"),
                                    add("repellat"),
                                }};
                                displayAdsTitle = "cupiditate";
                                displayAdsValue = 2372.08;
                                energyEfficiencyClass = "aliquam";
                                expirationDate = "illo";
                                gender = "female";
                                googleProductCategory = "sed";
                                gtin = "necessitatibus";
                                id = "d7e253f4-c157-4dea-a717-0f445accf667";
                                identifierExists = false;
                                imageLink = "fuga";
                                installment = new Installment() {{
                                    amount = new Price() {{
                                        currency = "officia";
                                        value = "repellat";
                                    }};
                                    months = "cupiditate";
                                }};
                                isBundle = false;
                                itemGroupId = "soluta";
                                kind = "tempore";
                                link = "culpa";
                                loyaltyPoints = new LoyaltyPoints() {{
                                    name = "Dennis Littel";
                                    pointsValue = "voluptates";
                                    ratio = 2811.35;
                                }};
                                material = "nesciunt";
                                maxEnergyEfficiencyClass = "ab";
                                maxHandlingTime = "quibusdam";
                                minEnergyEfficiencyClass = "suscipit";
                                minHandlingTime = "quidem";
                                mobileLink = "delectus";
                                mpn = "nemo";
                                multipack = "cumque";
                                offerId = "voluptatum";
                                onlineOnly = false;
                                pattern = "sequi";
                                price = new Price() {{
                                    currency = "atque";
                                    value = "maiores";
                                }};
                                productType = "expedita";
                                promotionIds = new String[]{{
                                    add("totam"),
                                    add("quod"),
                                    add("aspernatur"),
                                }};
                                salePrice = new Price() {{
                                    currency = "eaque";
                                    value = "impedit";
                                }};
                                salePriceEffectiveDate = "nam";
                                sellOnGoogleQuantity = "ex";
                                shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                                    add(new ProductShipping() {{
                                        country = "Vanuatu";
                                        locationGroupName = "minus";
                                        locationId = "ut";
                                        postalCode = "21395-5831";
                                        price = new Price() {{
                                            currency = "amet";
                                            value = "incidunt";
                                        }};
                                        region = "porro";
                                        service = "occaecati";
                                    }}),
                                    add(new ProductShipping() {{
                                        country = "Vietnam";
                                        locationGroupName = "voluptate";
                                        locationId = "tempore";
                                        postalCode = "68997";
                                        price = new Price() {{
                                            currency = "iusto";
                                            value = "esse";
                                        }};
                                        region = "harum";
                                        service = "ad";
                                    }}),
                                }};
                                shippingHeight = new ProductShippingDimension() {{
                                    unit = "quod";
                                    value = 1887.05;
                                }};
                                shippingLabel = "totam";
                                shippingLength = new ProductShippingDimension() {{
                                    unit = "vero";
                                    value = 2943.16;
                                }};
                                shippingWeight = new ProductShippingWeight() {{
                                    unit = "nam";
                                    value = 6380.85;
                                }};
                                shippingWidth = new ProductShippingDimension() {{
                                    unit = "maiores";
                                    value = 5851.09;
                                }};
                                sizeSystem = "illo";
                                sizeType = "saepe";
                                sizes = new String[]{{
                                    add("eaque"),
                                    add("ex"),
                                }};
                                source = "eveniet";
                                targetCountry = "delectus";
                                taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                                    add(new ProductTax() {{
                                        country = "Montenegro";
                                        locationId = "aut";
                                        postalCode = "32724-3904";
                                        rate = 9395.16;
                                        region = "minima";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "India";
                                        locationId = "possimus";
                                        postalCode = "53618";
                                        rate = 2558.39;
                                        region = "laborum";
                                        taxShip = false;
                                    }}),
                                    add(new ProductTax() {{
                                        country = "Saint Lucia";
                                        locationId = "autem";
                                        postalCode = "16558";
                                        rate = 1450.83;
                                        region = "autem";
                                        taxShip = false;
                                    }}),
                                }};
                                title = "Miss";
                                unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                                    unit = "eveniet";
                                    value = "fugiat";
                                }};
                                unitPricingMeasure = new ProductUnitPricingMeasure() {{
                                    unit = "blanditiis";
                                    value = 9559.88;
                                }};
                                validatedDestinations = new String[]{{
                                    add("sapiente"),
                                    add("repellendus"),
                                    add("facilis"),
                                }};
                                warnings = new org.openapis.openapi.models.shared.Error[]{{
                                    add(new Error() {{
                                        domain = "dolore";
                                        message = "et";
                                        reason = "accusantium";
                                    }}),
                                    add(new Error() {{
                                        domain = "maiores";
                                        message = "nisi";
                                        reason = "velit";
                                    }}),
                                    add(new Error() {{
                                        domain = "tempore";
                                        message = "expedita";
                                        reason = "hic";
                                    }}),
                                }};
                            }};
                            productId = "blanditiis";
                        }}),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "atque";
                dryRun = false;
                fields = "velit";
                key = "molestiae";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "vitae";
                uploadProtocol = "mollitia";
            }};            

            ContentProductsCustombatchResponse res = sdk.products.contentProductsCustombatch(req, new ContentProductsCustombatchSecurity("asperiores", "at") {{
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

            ContentProductsDeleteRequest req = new ContentProductsDeleteRequest("quibusdam", "quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "eos";
                dryRun = false;
                fields = "labore";
                key = "sunt";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "accusamus";
                uploadProtocol = "distinctio";
            }};            

            ContentProductsDeleteResponse res = sdk.products.contentProductsDelete(req, new ContentProductsDeleteSecurity("incidunt", "labore") {{
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

            ContentProductsGetRequest req = new ContentProductsGetRequest("blanditiis", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ratione";
                key = "consectetur";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "sint";
                uploadProtocol = "possimus";
            }};            

            ContentProductsGetResponse res = sdk.products.contentProductsGet(req, new ContentProductsGetSecurity("tempore", "asperiores") {{
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
import org.openapis.openapi.models.shared.CustomGroup;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.Installment;
import org.openapis.openapi.models.shared.LoyaltyPoints;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.ProductAspect;
import org.openapis.openapi.models.shared.ProductDestination;
import org.openapis.openapi.models.shared.ProductShipping;
import org.openapis.openapi.models.shared.ProductShippingDimension;
import org.openapis.openapi.models.shared.ProductShippingWeight;
import org.openapis.openapi.models.shared.ProductTax;
import org.openapis.openapi.models.shared.ProductUnitPricingBaseMeasure;
import org.openapis.openapi.models.shared.ProductUnitPricingMeasure;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductsInsertRequest req = new ContentProductsInsertRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                product = new Product() {{
                    additionalImageLinks = new String[]{{
                        add("nobis"),
                        add("debitis"),
                    }};
                    additionalProductTypes = new String[]{{
                        add("veritatis"),
                        add("minima"),
                    }};
                    adult = false;
                    adwordsGrouping = "magni";
                    adwordsLabels = new String[]{{
                        add("error"),
                        add("expedita"),
                        add("error"),
                        add("placeat"),
                    }};
                    adwordsRedirect = "temporibus";
                    ageGroup = "voluptate";
                    aspects = new org.openapis.openapi.models.shared.ProductAspect[]{{
                        add(new ProductAspect() {{
                            aspectName = "minima";
                            destinationName = "odit";
                            intention = "odit";
                        }}),
                        add(new ProductAspect() {{
                            aspectName = "eius";
                            destinationName = "error";
                            intention = "vel";
                        }}),
                        add(new ProductAspect() {{
                            aspectName = "dolorum";
                            destinationName = "alias";
                            intention = "itaque";
                        }}),
                        add(new ProductAspect() {{
                            aspectName = "ab";
                            destinationName = "sunt";
                            intention = "amet";
                        }}),
                    }};
                    availability = "cum";
                    availabilityDate = "iusto";
                    brand = "corrupti";
                    canonicalLink = "non";
                    channel = "esse";
                    color = "vero";
                    condition = "eligendi";
                    contentLanguage = "minima";
                    costOfGoodsSold = new Price() {{
                        currency = "omnis";
                        value = "recusandae";
                    }};;
                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                        add(new CustomAttribute() {{
                            name = "Milton Kirlin";
                            type = "cumque";
                            unit = "dolore";
                            value = "optio";
                        }}),
                    }};
                    customGroups = new org.openapis.openapi.models.shared.CustomGroup[]{{
                        add(new CustomGroup() {{
                            attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    name = "Pam Homenick";
                                    type = "aliquid";
                                    unit = "sint";
                                    value = "aliquid";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Timmy Feeney";
                                    type = "nihil";
                                    unit = "eius";
                                    value = "dignissimos";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Margaret Bradtke";
                                    type = "nihil";
                                    unit = "officiis";
                                    value = "dolore";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Dr. Elisa Hilpert";
                                    type = "libero";
                                    unit = "consequatur";
                                    value = "totam";
                                }}),
                            }};
                            name = "Miss Roxanne Fahey";
                        }}),
                        add(new CustomGroup() {{
                            attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    name = "Sonia Feest";
                                    type = "incidunt";
                                    unit = "corporis";
                                    value = "quaerat";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Jo White";
                                    type = "corrupti";
                                    unit = "nihil";
                                    value = "eius";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Billy Schultz";
                                    type = "porro";
                                    unit = "labore";
                                    value = "perspiciatis";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Lois Dibbert";
                                    type = "saepe";
                                    unit = "iure";
                                    value = "aliquid";
                                }}),
                            }};
                            name = "Nicolas Legros";
                        }}),
                        add(new CustomGroup() {{
                            attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    name = "Richard Bartell";
                                    type = "odio";
                                    unit = "omnis";
                                    value = "officiis";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Martin Bahringer";
                                    type = "nihil";
                                    unit = "neque";
                                    value = "aspernatur";
                                }}),
                            }};
                            name = "Miss Ana McGlynn";
                        }}),
                        add(new CustomGroup() {{
                            attributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    name = "Sandra Mertz";
                                    type = "aperiam";
                                    unit = "voluptatem";
                                    value = "non";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Annie Price";
                                    type = "quis";
                                    unit = "eaque";
                                    value = "incidunt";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Lucia Jacobi";
                                    type = "debitis";
                                    unit = "reprehenderit";
                                    value = "eos";
                                }}),
                                add(new CustomAttribute() {{
                                    name = "Ms. Benny Goyette";
                                    type = "assumenda";
                                    unit = "consequatur";
                                    value = "cumque";
                                }}),
                            }};
                            name = "Jeff Wiegand V";
                        }}),
                    }};
                    customLabel0 = "itaque";
                    customLabel1 = "earum";
                    customLabel2 = "impedit";
                    customLabel3 = "dicta";
                    customLabel4 = "corporis";
                    description = "impedit";
                    destinations = new org.openapis.openapi.models.shared.ProductDestination[]{{
                        add(new ProductDestination() {{
                            destinationName = "cum";
                            intention = "dolore";
                        }}),
                        add(new ProductDestination() {{
                            destinationName = "illum";
                            intention = "ea";
                        }}),
                        add(new ProductDestination() {{
                            destinationName = "officiis";
                            intention = "quasi";
                        }}),
                        add(new ProductDestination() {{
                            destinationName = "accusamus";
                            intention = "animi";
                        }}),
                    }};
                    displayAdsId = "necessitatibus";
                    displayAdsLink = "voluptatem";
                    displayAdsSimilarIds = new String[]{{
                        add("odio"),
                        add("veniam"),
                        add("fuga"),
                        add("itaque"),
                    }};
                    displayAdsTitle = "possimus";
                    displayAdsValue = 9475.61;
                    energyEfficiencyClass = "sed";
                    expirationDate = "deserunt";
                    gender = "male";
                    googleProductCategory = "id";
                    gtin = "distinctio";
                    id = "58b991c9-26dd-4b58-9461-e7421cbe6d95";
                    identifierExists = false;
                    imageLink = "sit";
                    installment = new Installment() {{
                        amount = new Price() {{
                            currency = "fugit";
                            value = "a";
                        }};;
                        months = "consequatur";
                    }};;
                    isBundle = false;
                    itemGroupId = "vero";
                    kind = "id";
                    link = "error";
                    loyaltyPoints = new LoyaltyPoints() {{
                        name = "Margaret Rau";
                        pointsValue = "maiores";
                        ratio = 4700.17;
                    }};;
                    material = "fuga";
                    maxEnergyEfficiencyClass = "cumque";
                    maxHandlingTime = "consequuntur";
                    minEnergyEfficiencyClass = "maiores";
                    minHandlingTime = "esse";
                    mobileLink = "explicabo";
                    mpn = "delectus";
                    multipack = "quos";
                    offerId = "deleniti";
                    onlineOnly = false;
                    pattern = "enim";
                    price = new Price() {{
                        currency = "sit";
                        value = "voluptatem";
                    }};;
                    productType = "natus";
                    promotionIds = new String[]{{
                        add("tempora"),
                    }};
                    salePrice = new Price() {{
                        currency = "occaecati";
                        value = "quasi";
                    }};;
                    salePriceEffectiveDate = "veritatis";
                    sellOnGoogleQuantity = "ex";
                    shipping = new org.openapis.openapi.models.shared.ProductShipping[]{{
                        add(new ProductShipping() {{
                            country = "Mauritania";
                            locationGroupName = "dolores";
                            locationId = "perferendis";
                            postalCode = "55597";
                            price = new Price() {{
                                currency = "autem";
                                value = "vel";
                            }};
                            region = "beatae";
                            service = "quos";
                        }}),
                    }};
                    shippingHeight = new ProductShippingDimension() {{
                        unit = "consectetur";
                        value = 7420.1;
                    }};;
                    shippingLabel = "tenetur";
                    shippingLength = new ProductShippingDimension() {{
                        unit = "necessitatibus";
                        value = 5951.52;
                    }};;
                    shippingWeight = new ProductShippingWeight() {{
                        unit = "suscipit";
                        value = 3553.42;
                    }};;
                    shippingWidth = new ProductShippingDimension() {{
                        unit = "unde";
                        value = 8927.12;
                    }};;
                    sizeSystem = "quidem";
                    sizeType = "magnam";
                    sizes = new String[]{{
                        add("accusamus"),
                    }};
                    source = "quod";
                    targetCountry = "sunt";
                    taxes = new org.openapis.openapi.models.shared.ProductTax[]{{
                        add(new ProductTax() {{
                            country = "United Arab Emirates";
                            locationId = "est";
                            postalCode = "43707-3116";
                            rate = 2660.67;
                            region = "illum";
                            taxShip = false;
                        }}),
                        add(new ProductTax() {{
                            country = "Netherlands Antilles";
                            locationId = "consectetur";
                            postalCode = "77669";
                            rate = 3005.57;
                            region = "eius";
                            taxShip = false;
                        }}),
                    }};
                    title = "Mrs.";
                    unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure() {{
                        unit = "quia";
                        value = "quod";
                    }};;
                    unitPricingMeasure = new ProductUnitPricingMeasure() {{
                        unit = "quaerat";
                        value = 5321.63;
                    }};;
                    validatedDestinations = new String[]{{
                        add("explicabo"),
                        add("eligendi"),
                    }};
                    warnings = new org.openapis.openapi.models.shared.Error[]{{
                        add(new Error() {{
                            domain = "tempore";
                            message = "odit";
                            reason = "est";
                        }}),
                        add(new Error() {{
                            domain = "at";
                            message = "ipsum";
                            reason = "explicabo";
                        }}),
                        add(new Error() {{
                            domain = "nulla";
                            message = "est";
                            reason = "sapiente";
                        }}),
                    }};
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                dryRun = false;
                fields = "mollitia";
                key = "voluptatum";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "ut";
                uploadProtocol = "incidunt";
            }};            

            ContentProductsInsertResponse res = sdk.products.contentProductsInsert(req, new ContentProductsInsertSecurity("labore", "ut") {{
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

            ContentProductsListRequest req = new ContentProductsListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "quod";
                includeInvalidInsertedItems = false;
                key = "nulla";
                maxResults = 271185L;
                oauthToken = "quam";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "nesciunt";
                uploadProtocol = "earum";
            }};            

            ContentProductsListResponse res = sdk.products.contentProductsList(req, new ContentProductsListSecurity("eum", "dolor") {{
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
