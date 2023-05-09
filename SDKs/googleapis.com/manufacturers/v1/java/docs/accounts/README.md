# accounts

### Available Operations

* [manufacturersAccountsLanguagesProductCertificationsDelete](#manufacturersaccountslanguagesproductcertificationsdelete) - Deletes a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsGet](#manufacturersaccountslanguagesproductcertificationsget) - Gets a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsList](#manufacturersaccountslanguagesproductcertificationslist) - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsPatch](#manufacturersaccountslanguagesproductcertificationspatch) - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* [manufacturersAccountsProductsDelete](#manufacturersaccountsproductsdelete) - Deletes the product from a Manufacturer Center account.
* [manufacturersAccountsProductsGet](#manufacturersaccountsproductsget) - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* [manufacturersAccountsProductsList](#manufacturersaccountsproductslist) - Lists all the products in a Manufacturer Center account.
* [manufacturersAccountsProductsUpdate](#manufacturersaccountsproductsupdate) - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

## manufacturersAccountsLanguagesProductCertificationsDelete

Deletes a product certification by its name. This method can only be called by certification bodies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsDeleteRequest req = new ManufacturersAccountsLanguagesProductCertificationsDeleteRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ManufacturersAccountsLanguagesProductCertificationsDeleteResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsDelete(req, new ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsLanguagesProductCertificationsGet

Gets a product certification by its name. This method can only be called by certification bodies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsGetRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsGetResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsGetRequest req = new ManufacturersAccountsLanguagesProductCertificationsGetRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            ManufacturersAccountsLanguagesProductCertificationsGetResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsGet(req, new ManufacturersAccountsLanguagesProductCertificationsGetSecurity("odit", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productCertification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsLanguagesProductCertificationsList

Lists product certifications from a specified certification body. This method can only be called by certification bodies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsListRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsListResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsListRequest req = new ManufacturersAccountsLanguagesProductCertificationsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                pageSize = 678880L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            ManufacturersAccountsLanguagesProductCertificationsListResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsList(req, new ManufacturersAccountsLanguagesProductCertificationsListSecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProductCertificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsLanguagesProductCertificationsPatch

Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsPatchRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsPatchResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Certification;
import org.openapis.openapi.models.shared.ProductCertificationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsPatchRequest req = new ManufacturersAccountsLanguagesProductCertificationsPatchRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                productCertificationInput = new ProductCertificationInput() {{
                    brand = "totam";
                    certification = new org.openapis.openapi.models.shared.Certification[]{{
                        add(new Certification() {{
                            authority = "commodi";
                            link = "molestiae";
                            logo = "modi";
                            name = "Krista Rippin";
                            validUntil = "excepturi";
                            value = "aspernatur";
                        }}),
                    }};
                    countryCode = new String[]{{
                        add("ad"),
                    }};
                    mpn = new String[]{{
                        add("sed"),
                        add("iste"),
                        add("dolor"),
                    }};
                    name = "Lester Welch";
                    productCode = new String[]{{
                        add("corporis"),
                        add("iste"),
                    }};
                    productType = new String[]{{
                        add("saepe"),
                        add("quidem"),
                    }};
                    title = "Mr.";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                updateMask = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            ManufacturersAccountsLanguagesProductCertificationsPatchResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsPatch(req, new ManufacturersAccountsLanguagesProductCertificationsPatchSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productCertification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsProductsDelete

Deletes the product from a Manufacturer Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsDeleteRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsDeleteResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsProductsDeleteRequest req = new ManufacturersAccountsProductsDeleteRequest("nemo", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            ManufacturersAccountsProductsDeleteResponse res = sdk.accounts.manufacturersAccountsProductsDelete(req, new ManufacturersAccountsProductsDeleteSecurity("consequuntur", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsProductsGet

Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsGetIncludeEnum;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsGetRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsGetResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsProductsGetRequest req = new ManufacturersAccountsProductsGetRequest("mollitia", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "velit";
                include = new org.openapis.openapi.models.operations.ManufacturersAccountsProductsGetIncludeEnum[]{{
                    add(ManufacturersAccountsProductsGetIncludeEnum.UNKNOWN),
                    add(ManufacturersAccountsProductsGetIncludeEnum.ATTRIBUTES),
                    add(ManufacturersAccountsProductsGetIncludeEnum.UNKNOWN),
                }};
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            ManufacturersAccountsProductsGetResponse res = sdk.accounts.manufacturersAccountsProductsGet(req, new ManufacturersAccountsProductsGetSecurity("sequi", "tenetur") {{
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

## manufacturersAccountsProductsList

Lists all the products in a Manufacturer Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsListIncludeEnum;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsListRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsListResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsProductsListRequest req = new ManufacturersAccountsProductsListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                include = new org.openapis.openapi.models.operations.ManufacturersAccountsProductsListIncludeEnum[]{{
                    add(ManufacturersAccountsProductsListIncludeEnum.ISSUES),
                    add(ManufacturersAccountsProductsListIncludeEnum.UNKNOWN),
                    add(ManufacturersAccountsProductsListIncludeEnum.DESTINATION_STATUSES),
                    add(ManufacturersAccountsProductsListIncludeEnum.DESTINATION_STATUSES),
                }};
                key = "vero";
                oauthToken = "nihil";
                pageSize = 509624L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            ManufacturersAccountsProductsListResponse res = sdk.accounts.manufacturersAccountsProductsList(req, new ManufacturersAccountsProductsListSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manufacturersAccountsProductsUpdate

Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsUpdateRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsUpdateResponse;
import org.openapis.openapi.models.operations.ManufacturersAccountsProductsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.Capacity;
import org.openapis.openapi.models.shared.Count;
import org.openapis.openapi.models.shared.FeatureDescription;
import org.openapis.openapi.models.shared.FloatUnit;
import org.openapis.openapi.models.shared.Grocery;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageStatusEnum;
import org.openapis.openapi.models.shared.ImageTypeEnum;
import org.openapis.openapi.models.shared.Nutrition;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.ProductDetail;
import org.openapis.openapi.models.shared.VoluntaryNutritionFact;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsProductsUpdateRequest req = new ManufacturersAccountsProductsUpdateRequest("doloremque", "reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                attributes = new Attributes() {{
                    additionalImageLink = new org.openapis.openapi.models.shared.Image[]{{
                        add(new Image() {{
                            imageUrl = "dicta";
                            status = ImageStatusEnum.ROBOTED;
                            type = ImageTypeEnum.TYPE_UNSPECIFIED;
                        }}),
                        add(new Image() {{
                            imageUrl = "iusto";
                            status = ImageStatusEnum.PENDING_PROCESSING;
                            type = ImageTypeEnum.UPLOADED;
                        }}),
                        add(new Image() {{
                            imageUrl = "enim";
                            status = ImageStatusEnum.HOSTLOADED;
                            type = ImageTypeEnum.CRAWLED;
                        }}),
                        add(new Image() {{
                            imageUrl = "repudiandae";
                            status = ImageStatusEnum.STATUS_UNSPECIFIED;
                            type = ImageTypeEnum.TYPE_UNSPECIFIED;
                        }}),
                    }};
                    ageGroup = "quidem";
                    brand = "molestias";
                    capacity = new Capacity() {{
                        unit = "excepturi";
                        value = "pariatur";
                    }};;
                    color = "modi";
                    count = new Count() {{
                        unit = "praesentium";
                        value = "rem";
                    }};;
                    description = "voluptates";
                    disclosureDate = "quasi";
                    excludedDestination = new String[]{{
                        add("sint"),
                        add("veritatis"),
                        add("itaque"),
                        add("incidunt"),
                    }};
                    featureDescription = new org.openapis.openapi.models.shared.FeatureDescription[]{{
                        add(new FeatureDescription() {{
                            headline = "consequatur";
                            image = new Image() {{
                                imageUrl = "est";
                                status = ImageStatusEnum.CRAWL_SKIPPED;
                                type = ImageTypeEnum.TYPE_UNSPECIFIED;
                            }};
                            text = "deserunt";
                        }}),
                        add(new FeatureDescription() {{
                            headline = "distinctio";
                            image = new Image() {{
                                imageUrl = "quibusdam";
                                status = ImageStatusEnum.OK;
                                type = ImageTypeEnum.TYPE_UNSPECIFIED;
                            }};
                            text = "qui";
                        }}),
                    }};
                    flavor = "aliquid";
                    format = "cupiditate";
                    gender = "male";
                    grocery = new Grocery() {{
                        activeIngredients = "perferendis";
                        alcoholByVolume = 1649.4;
                        allergens = "assumenda";
                        derivedNutritionClaim = new String[]{{
                            add("alias"),
                            add("fugit"),
                        }};
                        directions = "dolorum";
                        indications = "excepturi";
                        ingredients = "tempora";
                        nutritionClaim = new String[]{{
                            add("tempore"),
                            add("labore"),
                            add("delectus"),
                        }};
                        storageInstructions = "eum";
                    }};;
                    gtin = new String[]{{
                        add("eligendi"),
                    }};
                    imageLink = new Image() {{
                        imageUrl = "sint";
                        status = ImageStatusEnum.XROBOTED;
                        type = ImageTypeEnum.CRAWLED;
                    }};;
                    includedDestination = new String[]{{
                        add("sint"),
                        add("officia"),
                        add("dolor"),
                        add("debitis"),
                    }};
                    itemGroupId = "a";
                    material = "dolorum";
                    mpn = "in";
                    nutrition = new Nutrition() {{
                        addedSugars = new FloatUnit() {{
                            amount = 4491.98;
                            unit = "illum";
                        }};;
                        addedSugarsDailyPercentage = 9785.71;
                        calcium = new FloatUnit() {{
                            amount = 6994.79;
                            unit = "dicta";
                        }};;
                        calciumDailyPercentage = 2974.37;
                        cholesterol = new FloatUnit() {{
                            amount = 7670.24;
                            unit = "facere";
                        }};;
                        cholesterolDailyPercentage = 4118.2;
                        dietaryFiber = new FloatUnit() {{
                            amount = 3965.06;
                            unit = "laborum";
                        }};;
                        dietaryFiberDailyPercentage = 8811.04;
                        energy = new FloatUnit() {{
                            amount = 2497.96;
                            unit = "occaecati";
                        }};;
                        energyFromFat = new FloatUnit() {{
                            amount = 3132.18;
                            unit = "accusamus";
                        }};;
                        folateDailyPercentage = 9654.17;
                        folateFolicAcid = new FloatUnit() {{
                            amount = 6925.32;
                            unit = "provident";
                        }};;
                        folateMcgDfe = 7252.55;
                        iron = new FloatUnit() {{
                            amount = 6596.69;
                            unit = "blanditiis";
                        }};;
                        ironDailyPercentage = 5332.06;
                        monounsaturatedFat = new FloatUnit() {{
                            amount = 9560.84;
                            unit = "amet";
                        }};;
                        nutritionFactMeasure = "deserunt";
                        polyols = new FloatUnit() {{
                            amount = 3948.69;
                            unit = "vel";
                        }};;
                        polyunsaturatedFat = new FloatUnit() {{
                            amount = 6188.09;
                            unit = "omnis";
                        }};;
                        potassium = new FloatUnit() {{
                            amount = 4748.67;
                            unit = "perferendis";
                        }};;
                        potassiumDailyPercentage = 4701.32;
                        preparedSizeDescription = "magnam";
                        protein = new FloatUnit() {{
                            amount = 7160.75;
                            unit = "id";
                        }};;
                        proteinDailyPercentage = 2879.91;
                        saturatedFat = new FloatUnit() {{
                            amount = 2900.77;
                            unit = "suscipit";
                        }};;
                        saturatedFatDailyPercentage = 6180.16;
                        servingSizeDescription = "nobis";
                        servingSizeMeasure = new FloatUnit() {{
                            amount = 4287.69;
                            unit = "vero";
                        }};;
                        servingsPerContainer = "aspernatur";
                        sodium = new FloatUnit() {{
                            amount = 1028.63;
                            unit = "magnam";
                        }};;
                        sodiumDailyPercentage = 923.73;
                        starch = new FloatUnit() {{
                            amount = 5699.65;
                            unit = "ullam";
                        }};;
                        totalCarbohydrate = new FloatUnit() {{
                            amount = 5908.73;
                            unit = "quos";
                        }};;
                        totalCarbohydrateDailyPercentage = 5743.25;
                        totalFat = new FloatUnit() {{
                            amount = 336.25;
                            unit = "mollitia";
                        }};;
                        totalFatDailyPercentage = 9689.62;
                        totalSugars = new FloatUnit() {{
                            amount = 6521.03;
                            unit = "ad";
                        }};;
                        totalSugarsDailyPercentage = 4314.18;
                        transFat = new FloatUnit() {{
                            amount = 2212.62;
                            unit = "necessitatibus";
                        }};;
                        transFatDailyPercentage = 1412.64;
                        vitaminD = new FloatUnit() {{
                            amount = 3675.62;
                            unit = "quasi";
                        }};;
                        vitaminDDailyPercentage = 4358.65;
                        voluntaryNutritionFact = new org.openapis.openapi.models.shared.VoluntaryNutritionFact[]{{
                            add(new VoluntaryNutritionFact() {{
                                dailyPercentage = 8919.24;
                                name = "Jasmine Lind";
                                value = new FloatUnit() {{
                                    amount = 1002.26;
                                    unit = "architecto";
                                }};
                            }}),
                            add(new VoluntaryNutritionFact() {{
                                dailyPercentage = 9194.83;
                                name = "Lola Koss";
                                value = new FloatUnit() {{
                                    amount = 1494.48;
                                    unit = "saepe";
                                }};
                            }}),
                            add(new VoluntaryNutritionFact() {{
                                dailyPercentage = 8681.26;
                                name = "Kathryn Lang";
                                value = new FloatUnit() {{
                                    amount = 1238.2;
                                    unit = "quo";
                                }};
                            }}),
                            add(new VoluntaryNutritionFact() {{
                                dailyPercentage = 8480.09;
                                name = "Simon Jenkins";
                                value = new FloatUnit() {{
                                    amount = 4071.83;
                                    unit = "accusantium";
                                }};
                            }}),
                        }};
                    }};;
                    pattern = "ab";
                    productDetail = new org.openapis.openapi.models.shared.ProductDetail[]{{
                        add(new ProductDetail() {{
                            attributeName = "quidem";
                            attributeValue = "ipsam";
                            sectionName = "voluptate";
                        }}),
                        add(new ProductDetail() {{
                            attributeName = "autem";
                            attributeValue = "nam";
                            sectionName = "eaque";
                        }}),
                        add(new ProductDetail() {{
                            attributeName = "pariatur";
                            attributeValue = "nemo";
                            sectionName = "voluptatibus";
                        }}),
                        add(new ProductDetail() {{
                            attributeName = "perferendis";
                            attributeValue = "fugiat";
                            sectionName = "amet";
                        }}),
                    }};
                    productHighlight = new String[]{{
                        add("cumque"),
                    }};
                    productLine = "corporis";
                    productName = "hic";
                    productPageUrl = "libero";
                    productType = new String[]{{
                        add("dolores"),
                        add("quis"),
                        add("totam"),
                    }};
                    releaseDate = "dignissimos";
                    richProductContent = new String[]{{
                        add("quis"),
                    }};
                    scent = "nesciunt";
                    size = "eos";
                    sizeSystem = "perferendis";
                    sizeType = new String[]{{
                        add("minus"),
                    }};
                    suggestedRetailPrice = new Price() {{
                        amount = "quam";
                        currency = "dolor";
                    }};;
                    targetClientId = "vero";
                    theme = "nostrum";
                    title = "Dr.";
                    videoLink = new String[]{{
                        add("omnis"),
                        add("facilis"),
                        add("perspiciatis"),
                        add("voluptatem"),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "error";
                key = "eaque";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "adipisci";
                uploadProtocol = "asperiores";
            }};            

            ManufacturersAccountsProductsUpdateResponse res = sdk.accounts.manufacturersAccountsProductsUpdate(req, new ManufacturersAccountsProductsUpdateSecurity("earum", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
