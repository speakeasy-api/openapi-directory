# article

### Available Operations

* [articleAddMeasureUnit](#articleaddmeasureunit) - Add measure unit
* [articleDelete](#articledelete) - Delete article from the system
            
* [articleGetAddons](#articlegetaddons)
* [articleGetMeasureUnits](#articlegetmeasureunits) - Get mesure units
* [articleGetRevenueAccounts](#articlegetrevenueaccounts) - Get Revenue Accounts 
* [articleGymArticleDetails](#articlegymarticledetails) - Get Gym specific properties for article
            
* [articlePost](#articlepost) - Add new article
            
* [articlePut](#articleput) - update existing article
            
* [articleSearch](#articlesearch) - Search articles
It will only return basic information of article
            
* [articleUpdateArticleGymDetails](#articleupdatearticlegymdetails) - Add article details that associate with a Gym
            
* [articleUpdateStatus](#articleupdatestatus) - Deactivate existing article 
* [articleGet](#articleget) - Get article details
This will return all properties related to article entity
            

## articleAddMeasureUnit

Add measure unit

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleAddMeasureUnitResponse;
import org.openapis.openapi.models.shared.MeasureUnitDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.MeasureUnitDTO[]{{
                add(new MeasureUnitDTO() {{
                    id = 392785;
                    name = "Jake Bernier MD";
                    type = "perferendis";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 368241;
                    name = "Timmy Satterfield";
                    type = "at";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 978619;
                    name = "Bernadette Schmidt";
                    type = "porro";
                }}),
            }}            

            ArticleAddMeasureUnitResponse res = sdk.article.articleAddMeasureUnit(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleDelete

Delete article from the system
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleDeleteRequest;
import org.openapis.openapi.models.operations.ArticleDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleDeleteRequest req = new ArticleDeleteRequest() {{
                articleId = 118274;
            }};            

            ArticleDeleteResponse res = sdk.article.articleDelete(req);

            if (res.defaultResponseDTOOfInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetAddons

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetAddonsRequest;
import org.openapis.openapi.models.operations.ArticleGetAddonsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleGetAddonsRequest req = new ArticleGetAddonsRequest() {{
                gymIds = "officia";
                limit = 582020;
                offset = 143353;
                searchText = "deleniti";
                type = "hic";
            }};            

            ArticleGetAddonsResponse res = sdk.article.articleGetAddons(req);

            if (res.defaultResponseDTOOfListOfArticleSearchDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetMeasureUnits

Get mesure units

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetMeasureUnitsRequest;
import org.openapis.openapi.models.operations.ArticleGetMeasureUnitsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleGetMeasureUnitsRequest req = new ArticleGetMeasureUnitsRequest() {{
                type = "totam";
            }};            

            ArticleGetMeasureUnitsResponse res = sdk.article.articleGetMeasureUnits(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetRevenueAccounts

Get Revenue Accounts 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetRevenueAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleGetRevenueAccountsResponse res = sdk.article.articleGetRevenueAccounts();

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGymArticleDetails

Get Gym specific properties for article
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGymArticleDetailsRequest;
import org.openapis.openapi.models.operations.ArticleGymArticleDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleGymArticleDetailsRequest req = new ArticleGymArticleDetailsRequest(473600, 264555);            

            ArticleGymArticleDetailsResponse res = sdk.article.articleGymArticleDetails(req);

            if (res.gymArticleDetailsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePost

Add new article
            

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePostResponse;
import org.openapis.openapi.models.shared.ArticleDTO;
import org.openapis.openapi.models.shared.GymArticleDetailsDTO;
import org.openapis.openapi.models.shared.GymDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ArticleDTO req = new ArticleDTO(                new org.openapis.openapi.models.shared.GymDTO[]{{
                                add(new GymDTO() {{
                                    externalGymNumber = 736918;
                                    gymId = 456150;
                                    gymName = "ipsum";
                                    location = "excepturi";
                                }}),
                                add(new GymDTO() {{
                                    externalGymNumber = 135218;
                                    gymId = 18789;
                                    gymName = "ad";
                                    location = "natus";
                                }}),
                                add(new GymDTO() {{
                                    externalGymNumber = 149675;
                                    gymId = 612096;
                                    gymName = "dolor";
                                    location = "natus";
                                }}),
                                add(new GymDTO() {{
                                    externalGymNumber = 386489;
                                    gymId = 943749;
                                    gymName = "saepe";
                                    location = "fuga";
                                }}),
                            }}, "in", "corporis", 6130.64, "iure") {{
                activeStatus = false;
                applyForAllGyms = false;
                articleId = 902349;
                availableQty = 6976.31;
                barcode = "architecto";
                createdDate = OffsetDateTime.parse("2022-01-12T00:28:21.182Z");
                createdUser = "est";
                cronExpression = "mollitia";
                description = "laborum";
                discount = 1709.09;
                employeeDiscount = 2103.82;
                employeePrice = 3581.52;
                gymArticles = new org.openapis.openapi.models.shared.GymArticleDetailsDTO[]{{
                    add(new GymArticleDetailsDTO() {{
                        articleId = 750686;
                        availableQty = 3154.28;
                        createdUser = "omnis";
                        employeeDiscount = 3637.11;
                        employeePrice = 3250.47;
                        gymId = 570197;
                        gymIdList = "accusantium";
                        gymName = "iure";
                        id = 634274;
                        isDefault = false;
                        isInventoryItem = false;
                        isObsolete = false;
                        modifiedUser = "doloribus";
                        reorderLevel = 9589.5;
                        revenueAccountId = 102044;
                        sellingPrice = 6527.9;
                    }}),
                }};
                isAddOn = false;
                isInventoryItem = false;
                isObsolete = false;
                modifiedDate = OffsetDateTime.parse("2022-05-14T04:53:02.888Z");
                modifiedUser = "consequuntur";
                number = 995300;
                reorderLevel = 6531.08;
                revenueAccountId = 581850;
                sellingPrice = 2532.91;
                tags = "commodi";
                vat = 4663.11;
                vatApplicable = false;
            }};            

            ArticlePostResponse res = sdk.article.articlePost(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePut

update existing article
            

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePutResponse;
import org.openapis.openapi.models.shared.ArticleDTO;
import org.openapis.openapi.models.shared.GymArticleDetailsDTO;
import org.openapis.openapi.models.shared.GymDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ArticleDTO req = new ArticleDTO(                new org.openapis.openapi.models.shared.GymDTO[]{{
                                add(new GymDTO() {{
                                    externalGymNumber = 623510;
                                    gymId = 158969;
                                    gymName = "quis";
                                    location = "vitae";
                                }}),
                            }}, "laborum", "animi", 3172.02, "odit") {{
                activeStatus = false;
                applyForAllGyms = false;
                articleId = 778346;
                availableQty = 1965.82;
                barcode = "tenetur";
                createdDate = OffsetDateTime.parse("2022-05-04T04:15:52.352Z");
                createdUser = "possimus";
                cronExpression = "aut";
                description = "quasi";
                discount = 6228.46;
                employeeDiscount = 8379.45;
                employeePrice = 6736.6;
                gymArticles = new org.openapis.openapi.models.shared.GymArticleDetailsDTO[]{{
                    add(new GymArticleDetailsDTO() {{
                        articleId = 971945;
                        availableQty = 9764.6;
                        createdUser = "vero";
                        employeeDiscount = 4686.51;
                        employeePrice = 5096.24;
                        gymId = 976762;
                        gymIdList = "ipsa";
                        gymName = "omnis";
                        id = 451159;
                        isDefault = false;
                        isInventoryItem = false;
                        isObsolete = false;
                        modifiedUser = "cum";
                        reorderLevel = 199.87;
                        revenueAccountId = 39187;
                        sellingPrice = 4417.11;
                    }}),
                }};
                isAddOn = false;
                isInventoryItem = false;
                isObsolete = false;
                modifiedDate = OffsetDateTime.parse("2022-01-08T10:49:12.847Z");
                modifiedUser = "dicta";
                number = 359444;
                reorderLevel = 2961.4;
                revenueAccountId = 480894;
                sellingPrice = 1187.27;
                tags = "harum";
                vat = 3179.83;
                vatApplicable = false;
            }};            

            ArticlePutResponse res = sdk.article.articlePut(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleSearch

Search articles
It will only return basic information of article
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleSearchRequest;
import org.openapis.openapi.models.operations.ArticleSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleSearchRequest req = new ArticleSearchRequest() {{
                activeStatus = 414263;
                gymId = 918236;
                limit = 64147;
                offset = 216822;
                orderBy = "quidem";
                searchText = "molestias";
                type = "excepturi";
            }};            

            ArticleSearchResponse res = sdk.article.articleSearch(req);

            if (res.defaultResponseDTOOfListOfArticleSearchDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateArticleGymDetails

Add article details that associate with a Gym
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateArticleGymDetailsResponse;
import org.openapis.openapi.models.shared.GymArticleDetailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.GymArticleDetailsDTO[]{{
                add(new GymArticleDetailsDTO() {{
                    articleId = 508969;
                    availableQty = 5232.48;
                    createdUser = "voluptates";
                    employeeDiscount = 939.4;
                    employeePrice = 9211.58;
                    gymId = 575947;
                    gymIdList = "veritatis";
                    gymName = "itaque";
                    id = 277718;
                    isDefault = false;
                    isInventoryItem = false;
                    isObsolete = false;
                    modifiedUser = "enim";
                    reorderLevel = 93.56;
                    revenueAccountId = 667411;
                    sellingPrice = 8423.42;
                }}),
                add(new GymArticleDetailsDTO() {{
                    articleId = 131797;
                    availableQty = 6471.74;
                    createdUser = "distinctio";
                    employeeDiscount = 8413.86;
                    employeePrice = 2894.06;
                    gymId = 264730;
                    gymIdList = "qui";
                    gymName = "aliquid";
                    id = 586513;
                    isDefault = false;
                    isInventoryItem = false;
                    isObsolete = false;
                    modifiedUser = "quos";
                    reorderLevel = 201.07;
                    revenueAccountId = 164940;
                    sellingPrice = 8289.4;
                }}),
            }}            

            ArticleUpdateArticleGymDetailsResponse res = sdk.article.articleUpdateArticleGymDetails(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStatus

Deactivate existing article 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStatusRequest;
import org.openapis.openapi.models.operations.ArticleUpdateStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleUpdateStatusRequest req = new ArticleUpdateStatusRequest() {{
                articleId = 4695;
                status = 146441;
                userName = "Mariano70";
            }};            

            ArticleUpdateStatusResponse res = sdk.article.articleUpdateStatus(req);

            if (res.defaultResponseDTOOfInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGet

Get article details
This will return all properties related to article entity
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetRequest;
import org.openapis.openapi.models.operations.ArticleGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ArticleGetRequest req = new ArticleGetRequest(288476);            

            ArticleGetResponse res = sdk.article.articleGet(req);

            if (res.defaultResponseDTOOfArticleDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
