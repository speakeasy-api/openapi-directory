# editorialImages

### Available Operations

* [~~getEditorialCategories~~](#geteditorialcategories) - (Deprecated) List editorial categories :warning: **Deprecated**
* [getEditorialImage](#geteditorialimage) - Get editorial content details
* [getEditorialImageLicenseList](#geteditorialimagelicenselist) - List editorial image licenses
* [getEditorialImageLivefeed](#geteditorialimagelivefeed) - Get editorial livefeed
* [getEditorialImageLivefeedItems](#geteditorialimagelivefeeditems) - Get editorial livefeed items
* [getEditorialImageLivefeedList](#geteditorialimagelivefeedlist) - Get editorial livefeed list
* [~~getEditorialLivefeed~~](#geteditoriallivefeed) - (Deprecated) Get editorial livefeed :warning: **Deprecated**
* [~~getEditorialLivefeedItems~~](#geteditoriallivefeeditems) - (Deprecated) Get editorial livefeed items :warning: **Deprecated**
* [~~getEditorialLivefeedList~~](#geteditoriallivefeedlist) - (Deprecated) Get editorial livefeed list :warning: **Deprecated**
* [~~getUpdatedEditorialImage~~](#getupdatededitorialimage) - (Deprecated) List updated content :warning: **Deprecated**
* [getUpdatedEditorialImages](#getupdatededitorialimages) - List updated content
* [~~getV2EditorialId~~](#getv2editorialid) - (Deprecated) Get editorial content details :warning: **Deprecated**
* [~~licenseEditorialImage~~](#licenseeditorialimage) - (Deprecated) License editorial content :warning: **Deprecated**
* [licenseEditorialImages](#licenseeditorialimages) - License editorial content
* [listEditorialImageCategories](#listeditorialimagecategories) - List editorial categories
* [~~searchEditorial~~](#searcheditorial) - (Deprecated) Search editorial content :warning: **Deprecated**
* [searchEditorialImages](#searcheditorialimages) - Search editorial images

## ~~getEditorialCategories~~

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialCategoriesResponse;
import org.openapis.openapi.models.operations.GetEditorialCategoriesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialCategoriesResponse res = sdk.editorialImages.getEditorialCategories(new GetEditorialCategoriesSecurity() {{
                basic = new SchemeBasic("velit", "laborum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialCategoryResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialImage

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialImageRequest;
import org.openapis.openapi.models.operations.GetEditorialImageResponse;
import org.openapis.openapi.models.operations.GetEditorialImageSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialImageRequest req = new GetEditorialImageRequest("non", "dolor");            

            GetEditorialImageResponse res = sdk.editorialImages.getEditorialImage(req, new GetEditorialImageSecurity() {{
                basic = new SchemeBasic("iusto", "sit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialImageLicenseList

This endpoint lists existing editorial image licenses.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialImageLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetEditorialImageLicenseListRequest;
import org.openapis.openapi.models.operations.GetEditorialImageLicenseListResponse;
import org.openapis.openapi.models.operations.GetEditorialImageLicenseListSecurity;
import org.openapis.openapi.models.operations.GetEditorialImageLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialImageLicenseListRequest req = new GetEditorialImageLicenseListRequest() {{
                downloadAvailability = GetEditorialImageLicenseListDownloadAvailabilityEnum.ALL;
                endDate = OffsetDateTime.parse("2022-05-12T12:10:59.574Z");
                imageId = "recusandae";
                license = "ea";
                page = 693153L;
                perPage = 377406L;
                sort = GetEditorialImageLicenseListSortEnum.OLDEST;
                startDate = OffsetDateTime.parse("2021-03-19T07:24:43.140Z");
                teamHistory = false;
                username = "Melvin.Lind35";
            }};            

            GetEditorialImageLicenseListResponse res = sdk.editorialImages.getEditorialImageLicenseList(req, new GetEditorialImageLicenseListSecurity("unde") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.downloadHistoryDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialImageLivefeed

Get editorial livefeed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedRequest;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedResponse;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialImageLivefeedRequest req = new GetEditorialImageLivefeedRequest("necessitatibus", "animi");            

            GetEditorialImageLivefeedResponse res = sdk.editorialImages.getEditorialImageLivefeed(req, new GetEditorialImageLivefeedSecurity() {{
                basic = new SchemeBasic("impedit", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialImageLivefeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialImageLivefeedItems

Get editorial livefeed items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedItemsRequest;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedItemsResponse;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedItemsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialImageLivefeedItemsRequest req = new GetEditorialImageLivefeedItemsRequest("corporis", "est");            

            GetEditorialImageLivefeedItemsResponse res = sdk.editorialImages.getEditorialImageLivefeedItems(req, new GetEditorialImageLivefeedItemsSecurity() {{
                basic = new SchemeBasic("error", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialImageContentDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialImageLivefeedList

Get editorial livefeed list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedListRequest;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedListResponse;
import org.openapis.openapi.models.operations.GetEditorialImageLivefeedListSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialImageLivefeedListRequest req = new GetEditorialImageLivefeedListRequest("labore") {{
                page = 85066L;
                perPage = 874400L;
            }};            

            GetEditorialImageLivefeedListResponse res = sdk.editorialImages.getEditorialImageLivefeedList(req, new GetEditorialImageLivefeedListSecurity() {{
                basic = new SchemeBasic("consectetur", "vitae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialImageLivefeedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEditorialLivefeed~~

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialLivefeedRequest;
import org.openapis.openapi.models.operations.GetEditorialLivefeedResponse;
import org.openapis.openapi.models.operations.GetEditorialLivefeedSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialLivefeedRequest req = new GetEditorialLivefeedRequest("inventore", "dolorem");            

            GetEditorialLivefeedResponse res = sdk.editorialImages.getEditorialLivefeed(req, new GetEditorialLivefeedSecurity() {{
                basic = new SchemeBasic("ad", "qui") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialLivefeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEditorialLivefeedItems~~

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialLivefeedItemsRequest;
import org.openapis.openapi.models.operations.GetEditorialLivefeedItemsResponse;
import org.openapis.openapi.models.operations.GetEditorialLivefeedItemsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialLivefeedItemsRequest req = new GetEditorialLivefeedItemsRequest("iste", "ex");            

            GetEditorialLivefeedItemsResponse res = sdk.editorialImages.getEditorialLivefeedItems(req, new GetEditorialLivefeedItemsSecurity() {{
                basic = new SchemeBasic("nemo", "soluta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialContentDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEditorialLivefeedList~~

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialLivefeedListRequest;
import org.openapis.openapi.models.operations.GetEditorialLivefeedListResponse;
import org.openapis.openapi.models.operations.GetEditorialLivefeedListSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialLivefeedListRequest req = new GetEditorialLivefeedListRequest("libero") {{
                page = 526907L;
                perPage = 678060L;
            }};            

            GetEditorialLivefeedListResponse res = sdk.editorialImages.getEditorialLivefeedList(req, new GetEditorialLivefeedListSecurity() {{
                basic = new SchemeBasic("odio", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialLivefeedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getUpdatedEditorialImage~~

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImageRequest;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImageResponse;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImageSecurity;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImageSortEnum;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImageTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpdatedEditorialImageRequest req = new GetUpdatedEditorialImageRequest("alias", OffsetDateTime.parse("2022-07-29T17:28:50.439Z"), OffsetDateTime.parse("2022-12-08T19:16:07.063Z"), GetUpdatedEditorialImageTypeEnum.EDIT) {{
                cursor = "neque";
                dateTakenEnd = LocalDate.parse("2022-01-25");
                dateTakenStart = LocalDate.parse("2022-10-14");
                perPage = 602229L;
                sort = GetUpdatedEditorialImageSortEnum.OLDEST;
                supplierCode = new String[]{{
                    add("maxime"),
                    add("quia"),
                    add("quia"),
                }};
            }};            

            GetUpdatedEditorialImageResponse res = sdk.editorialImages.getUpdatedEditorialImage(req, new GetUpdatedEditorialImageSecurity() {{
                basic = new SchemeBasic("nostrum", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialUpdatedResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdatedEditorialImages

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImagesRequest;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImagesResponse;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImagesSecurity;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImagesSortEnum;
import org.openapis.openapi.models.operations.GetUpdatedEditorialImagesTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpdatedEditorialImagesRequest req = new GetUpdatedEditorialImagesRequest("libero", OffsetDateTime.parse("2022-05-03T21:20:05.777Z"), OffsetDateTime.parse("2021-04-17T05:51:37.071Z"), GetUpdatedEditorialImagesTypeEnum.ADDITION) {{
                cursor = "quos";
                dateTakenEnd = LocalDate.parse("2022-12-03");
                dateTakenStart = LocalDate.parse("2022-12-11");
                perPage = 914864L;
                sort = GetUpdatedEditorialImagesSortEnum.NEWEST;
                supplierCode = new String[]{{
                    add("totam"),
                }};
            }};            

            GetUpdatedEditorialImagesResponse res = sdk.editorialImages.getUpdatedEditorialImages(req, new GetUpdatedEditorialImagesSecurity() {{
                basic = new SchemeBasic("dolore", "eligendi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialUpdatedResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getV2EditorialId~~

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EditorialIdRequest;
import org.openapis.openapi.models.operations.GetV2EditorialIdResponse;
import org.openapis.openapi.models.operations.GetV2EditorialIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EditorialIdRequest req = new GetV2EditorialIdRequest("distinctio", "voluptatem") {{
                searchId = "autem";
            }};            

            GetV2EditorialIdResponse res = sdk.editorialImages.getV2EditorialId(req, new GetV2EditorialIdSecurity() {{
                basic = new SchemeBasic("esse", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~licenseEditorialImage~~

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseEditorialImageResponse;
import org.openapis.openapi.models.operations.LicenseEditorialImageSecurity;
import org.openapis.openapi.models.shared.LicenseEditorialContent;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequest;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequestCountry1Enum;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequestCountry2Enum;
import org.openapis.openapi.models.shared.LicenseEditorialContentSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LicenseEditorialContentRequest req = new LicenseEditorialContentRequest(LicenseEditorialContentRequestCountry2Enum.BO,                 new org.openapis.openapi.models.shared.LicenseEditorialContent[]{{
                                add(new LicenseEditorialContent("ea", "autem") {{
                                    editorialId = "facere";
                                    license = "corrupti";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("provident", "accusamus");
                                        put("necessitatibus", "tempore");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.MEDIUM;
                                }}),
                                add(new LicenseEditorialContent("quidem", "fuga") {{
                                    editorialId = "ipsam";
                                    license = "rerum";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("corporis", "officiis");
                                        put("voluptatibus", "cum");
                                        put("at", "alias");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.SMALL;
                                }}),
                                add(new LicenseEditorialContent("corporis", "error") {{
                                    editorialId = "repudiandae";
                                    license = "accusantium";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("officiis", "eos");
                                        put("quibusdam", "odio");
                                        put("praesentium", "odit");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.SMALL;
                                }}),
                            }});            

            LicenseEditorialImageResponse res = sdk.editorialImages.licenseEditorialImage(req, new LicenseEditorialImageSecurity("earum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseEditorialContentResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licenseEditorialImages

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseEditorialImagesResponse;
import org.openapis.openapi.models.operations.LicenseEditorialImagesSecurity;
import org.openapis.openapi.models.shared.LicenseEditorialContent;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequest;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequestCountry1Enum;
import org.openapis.openapi.models.shared.LicenseEditorialContentRequestCountry2Enum;
import org.openapis.openapi.models.shared.LicenseEditorialContentSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LicenseEditorialContentRequest req = new LicenseEditorialContentRequest(LicenseEditorialContentRequestCountry1Enum.USA,                 new org.openapis.openapi.models.shared.LicenseEditorialContent[]{{
                                add(new LicenseEditorialContent("numquam", "numquam") {{
                                    editorialId = "similique";
                                    license = "ut";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("quis", "beatae");
                                        put("unde", "molestiae");
                                        put("delectus", "cupiditate");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.SMALL;
                                }}),
                                add(new LicenseEditorialContent("cupiditate", "minima") {{
                                    editorialId = "nesciunt";
                                    license = "at";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("dignissimos", "optio");
                                        put("necessitatibus", "corporis");
                                        put("qui", "expedita");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.MEDIUM;
                                }}),
                                add(new LicenseEditorialContent("modi", "corporis") {{
                                    editorialId = "placeat";
                                    license = "enim";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("in", "minus");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.MEDIUM;
                                }}),
                                add(new LicenseEditorialContent("velit", "minus") {{
                                    editorialId = "magnam";
                                    license = "voluptates";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("tempore", "aperiam");
                                        put("libero", "ratione");
                                        put("labore", "totam");
                                        put("occaecati", "voluptas");
                                    }};
                                    size = LicenseEditorialContentSizeEnum.ORIGINAL;
                                }}),
                            }});            

            LicenseEditorialImagesResponse res = sdk.editorialImages.licenseEditorialImages(req, new LicenseEditorialImagesSecurity("fuga") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseEditorialContentResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEditorialImageCategories

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEditorialImageCategoriesResponse;
import org.openapis.openapi.models.operations.ListEditorialImageCategoriesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEditorialImageCategoriesResponse res = sdk.editorialImages.listEditorialImageCategories(new ListEditorialImageCategoriesSecurity() {{
                basic = new SchemeBasic("nostrum", "est") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialImageCategoryResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchEditorial~~

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEditorialRequest;
import org.openapis.openapi.models.operations.SearchEditorialResponse;
import org.openapis.openapi.models.operations.SearchEditorialSecurity;
import org.openapis.openapi.models.operations.SearchEditorialSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchEditorialRequest req = new SearchEditorialRequest("impedit") {{
                category = "delectus";
                cursor = "tempore";
                dateEnd = LocalDate.parse("2022-07-30");
                dateStart = LocalDate.parse("2020-05-27");
                perPage = 362888L;
                query = "reprehenderit";
                sort = SearchEditorialSortEnum.RELEVANT;
                supplierCode = new String[]{{
                    add("minima"),
                    add("in"),
                }};
            }};            

            SearchEditorialResponse res = sdk.editorialImages.searchEditorial(req, new SearchEditorialSecurity() {{
                basic = new SchemeBasic("ducimus", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchEditorialImages

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEditorialImagesRequest;
import org.openapis.openapi.models.operations.SearchEditorialImagesResponse;
import org.openapis.openapi.models.operations.SearchEditorialImagesSecurity;
import org.openapis.openapi.models.operations.SearchEditorialImagesSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchEditorialImagesRequest req = new SearchEditorialImagesRequest("dolores") {{
                category = "error";
                cursor = "veritatis";
                dateEnd = LocalDate.parse("2022-07-19");
                dateStart = LocalDate.parse("2020-03-15");
                perPage = 627735L;
                query = "optio";
                sort = SearchEditorialImagesSortEnum.NEWEST;
                supplierCode = new String[]{{
                    add("commodi"),
                    add("officiis"),
                }};
            }};            

            SearchEditorialImagesResponse res = sdk.editorialImages.searchEditorialImages(req, new SearchEditorialImagesSecurity() {{
                basic = new SchemeBasic("placeat", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
