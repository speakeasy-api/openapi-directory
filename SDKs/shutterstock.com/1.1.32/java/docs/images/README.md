# images

### Available Operations

* [addImageCollectionItems](#addimagecollectionitems) - Add images to collections
* [bulkSearchImages](#bulksearchimages) - Run multiple image searches
* [createImageCollection](#createimagecollection) - Create image collections
* [deleteImageCollection](#deleteimagecollection) - Delete image collections
* [deleteImageCollectionItems](#deleteimagecollectionitems) - Remove images from collections
* [downloadImage](#downloadimage) - Download images
* [getFeaturedImageCollection](#getfeaturedimagecollection) - Get the details of featured image collections
* [getFeaturedImageCollectionItems](#getfeaturedimagecollectionitems) - Get the contents of featured image collections
* [getFeaturedImageCollectionList](#getfeaturedimagecollectionlist) - List featured image collections
* [getImage](#getimage) - Get details about images
* [getImageCollection](#getimagecollection) - Get the details of image collections
* [getImageCollectionItems](#getimagecollectionitems) - Get the contents of image collections
* [getImageCollectionList](#getimagecollectionlist) - List image collections
* [getImageKeywordSuggestions](#getimagekeywordsuggestions) - Get keywords from text
* [getImageLicenseList](#getimagelicenselist) - List image licenses
* [getImageList](#getimagelist) - List images
* [getImageRecommendations](#getimagerecommendations) - List recommended images
* [getImageSuggestions](#getimagesuggestions) - Get suggestions for a search term
* [getUpdatedImages](#getupdatedimages) - List updated images
* [licenseImages](#licenseimages) - License images
* [listImageCategories](#listimagecategories) - List image categories
* [listSimilarImages](#listsimilarimages) - List similar images
* [renameImageCollection](#renameimagecollection) - Rename image collections
* [searchImages](#searchimages) - Search for images

## addImageCollectionItems

This endpoint adds one or more images to a collection by image IDs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddImageCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddImageCollectionItemsResponse;
import org.openapis.openapi.models.operations.AddImageCollectionItemsSecurity;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.CollectionItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddImageCollectionItemsRequest req = new AddImageCollectionItemsRequest(                new CollectionItemRequest(                new org.openapis.openapi.models.shared.CollectionItem[]{{
                                                add(new CollectionItem("minus") {{
                                                    addedTime = OffsetDateTime.parse("2022-09-01T10:17:19.810Z");
                                                    id = "b197cd44-e2f5-42d8-ad35-13bb6f48b656";
                                                    mediaType = "libero";
                                                }}),
                                            }});, "facere");            

            AddImageCollectionItemsResponse res = sdk.images.addImageCollectionItems(req, new AddImageCollectionItemsSecurity("facilis") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## bulkSearchImages

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkSearchImagesImageTypeEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesLicenseEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesOrientationEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesPeopleAgeEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesPeopleEthnicityEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesPeopleGenderEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesRequest;
import org.openapis.openapi.models.operations.BulkSearchImagesResponse;
import org.openapis.openapi.models.operations.BulkSearchImagesSecurity;
import org.openapis.openapi.models.operations.BulkSearchImagesSortEnum;
import org.openapis.openapi.models.operations.BulkSearchImagesViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;
import org.openapis.openapi.models.shared.SearchImage;
import org.openapis.openapi.models.shared.SearchImageImageTypeEnum;
import org.openapis.openapi.models.shared.SearchImageLicenseEnum;
import org.openapis.openapi.models.shared.SearchImageOrientationEnum;
import org.openapis.openapi.models.shared.SearchImagePeopleAgeEnum;
import org.openapis.openapi.models.shared.SearchImagePeopleEthnicityEnum;
import org.openapis.openapi.models.shared.SearchImagePeopleGenderEnum;
import org.openapis.openapi.models.shared.SearchImageSortEnum;
import org.openapis.openapi.models.shared.SearchImageViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkSearchImagesRequest req = new BulkSearchImagesRequest(                new org.openapis.openapi.models.shared.SearchImage[]{{
                                add(new SearchImage() {{
                                    addedDate = LocalDate.parse("2022-01-10");
                                    addedDateEnd = LocalDate.parse("2022-07-07");
                                    addedDateStart = LocalDate.parse("2022-02-16");
                                    aspectRatio = 7009.28;
                                    aspectRatioMax = 1797.95;
                                    aspectRatioMin = 4407.77;
                                    authentic = false;
                                    category = "nostrum";
                                    color = "neque";
                                    contributor = new String[]{{
                                        add("est"),
                                        add("rem"),
                                    }};
                                    contributorCountry = new String[]{{
                                        add("unde"),
                                        add("officiis"),
                                        add("ducimus"),
                                        add("dolor"),
                                    }};
                                    fields = "dicta";
                                    height = 622894L;
                                    heightFrom = 784731L;
                                    heightTo = 111496L;
                                    imageType = new org.openapis.openapi.models.shared.SearchImageImageTypeEnum[]{{
                                        add(SearchImageImageTypeEnum.ILLUSTRATION),
                                        add(SearchImageImageTypeEnum.VECTOR),
                                    }};
                                    keywordSafeSearch = false;
                                    language = LanguageEnum.CS;
                                    license = new org.openapis.openapi.models.shared.SearchImageLicenseEnum[]{{
                                        add(SearchImageLicenseEnum.COMMERCIAL),
                                        add(SearchImageLicenseEnum.COMMERCIAL),
                                    }};
                                    model = new String[]{{
                                        add("iusto"),
                                        add("dignissimos"),
                                        add("libero"),
                                        add("illo"),
                                    }};
                                    orientation = SearchImageOrientationEnum.HORIZONTAL;
                                    page = 280114L;
                                    peopleAge = SearchImagePeopleAgeEnum.SIXTYS;
                                    peopleEthnicity = new org.openapis.openapi.models.shared.SearchImagePeopleEthnicityEnum[]{{
                                        add(SearchImagePeopleEthnicityEnum.NOT_HISPANIC),
                                        add(SearchImagePeopleEthnicityEnum.NATIVE_AMERICAN),
                                        add(SearchImagePeopleEthnicityEnum.CAUCASIAN),
                                        add(SearchImagePeopleEthnicityEnum.NOT_OTHER),
                                    }};
                                    peopleGender = SearchImagePeopleGenderEnum.BOTH;
                                    peopleModelReleased = false;
                                    peopleNumber = 444121L;
                                    perPage = 506312L;
                                    query = "nemo";
                                    region = "202.50.119.136";
                                    safe = false;
                                    sort = SearchImageSortEnum.NEWEST;
                                    spellcheckQuery = false;
                                    view = SearchImageViewEnum.MINIMAL;
                                    width = 828841L;
                                    widthFrom = 304173L;
                                    widthTo = 790463L;
                                }}),
                            }}) {{
                addedDate = LocalDate.parse("2021-12-21");
                addedDateEnd = LocalDate.parse("2022-12-21");
                addedDateStart = LocalDate.parse("2022-08-04");
                aspectRatio = 7239.42;
                aspectRatioMax = 7119.91;
                aspectRatioMin = 5591.74;
                category = "provident";
                color = "repudiandae";
                contributor = new String[]{{
                    add("dignissimos"),
                    add("corporis"),
                    add("vero"),
                }};
                contributorCountry = new String[]{{
                    add("iure"),
                    add("dolorem"),
                    add("commodi"),
                    add("impedit"),
                }};
                fields = "commodi";
                height = 12171L;
                heightFrom = 32055L;
                heightTo = 322829L;
                imageType = new org.openapis.openapi.models.operations.BulkSearchImagesImageTypeEnum[]{{
                    add(BulkSearchImagesImageTypeEnum.PHOTO),
                }};
                keywordSafeSearch = false;
                language = LanguageEnum.CS;
                license = new org.openapis.openapi.models.operations.BulkSearchImagesLicenseEnum[]{{
                    add(BulkSearchImagesLicenseEnum.EDITORIAL),
                    add(BulkSearchImagesLicenseEnum.ENHANCED),
                    add(BulkSearchImagesLicenseEnum.ENHANCED),
                    add(BulkSearchImagesLicenseEnum.COMMERCIAL),
                }};
                model = new String[]{{
                    add("dicta"),
                }};
                orientation = BulkSearchImagesOrientationEnum.VERTICAL;
                page = 40710L;
                peopleAge = BulkSearchImagesPeopleAgeEnum.OLDER;
                peopleEthnicity = new org.openapis.openapi.models.operations.BulkSearchImagesPeopleEthnicityEnum[]{{
                    add(BulkSearchImagesPeopleEthnicityEnum.EAST_ASIAN),
                    add(BulkSearchImagesPeopleEthnicityEnum.NOT_BLACK),
                }};
                peopleGender = BulkSearchImagesPeopleGenderEnum.BOTH;
                peopleModelReleased = false;
                peopleNumber = 897956L;
                perPage = 592880L;
                region = "2.93.121.238";
                safe = false;
                sort = BulkSearchImagesSortEnum.RELEVANCE;
                spellcheckQuery = false;
                view = BulkSearchImagesViewEnum.FULL;
                width = 43975L;
                widthFrom = 574092L;
                widthTo = 879522L;
            }};            

            BulkSearchImagesResponse res = sdk.images.bulkSearchImages(req, new BulkSearchImagesSecurity() {{
                basic = new SchemeBasic("eos", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.bulkImageSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageCollection

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageCollectionResponse;
import org.openapis.openapi.models.operations.CreateImageCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollectionCreateRequest req = new CollectionCreateRequest("dicta");            

            CreateImageCollectionResponse res = sdk.images.createImageCollection(req, new CreateImageCollectionSecurity("voluptatem") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImageCollection

This endpoint deletes an image collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageCollectionRequest;
import org.openapis.openapi.models.operations.DeleteImageCollectionResponse;
import org.openapis.openapi.models.operations.DeleteImageCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImageCollectionRequest req = new DeleteImageCollectionRequest("velit");            

            DeleteImageCollectionResponse res = sdk.images.deleteImageCollection(req, new DeleteImageCollectionSecurity("dolor") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteImageCollectionItems

This endpoint removes one or more images from a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageCollectionItemsRequest;
import org.openapis.openapi.models.operations.DeleteImageCollectionItemsResponse;
import org.openapis.openapi.models.operations.DeleteImageCollectionItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImageCollectionItemsRequest req = new DeleteImageCollectionItemsRequest("sunt") {{
                itemId = new String[]{{
                    add("dolor"),
                    add("occaecati"),
                    add("atque"),
                    add("beatae"),
                }};
            }};            

            DeleteImageCollectionItemsResponse res = sdk.images.deleteImageCollectionItems(req, new DeleteImageCollectionItemsSecurity("at") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## downloadImage

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadImageRequest;
import org.openapis.openapi.models.operations.DownloadImageResponse;
import org.openapis.openapi.models.operations.DownloadImageSecurity;
import org.openapis.openapi.models.shared.Cookie;
import org.openapis.openapi.models.shared.RedownloadImage;
import org.openapis.openapi.models.shared.RedownloadImageSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadImageRequest req = new DownloadImageRequest(                new RedownloadImage() {{
                                authCookie = new Cookie("labore", "minus");;
                                showModal = false;
                                size = RedownloadImageSizeEnum.HUGE;
                                verificationCode = "voluptatem";
                            }};, "perferendis");            

            DownloadImageResponse res = sdk.images.downloadImage(req, new DownloadImageSecurity("rerum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.url != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedImageCollection

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionAssetHintEnum;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionEmbedEnum;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionRequest;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionResponse;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedImageCollectionRequest req = new GetFeaturedImageCollectionRequest("ea") {{
                assetHint = GetFeaturedImageCollectionAssetHintEnum.ONEX;
                embed = GetFeaturedImageCollectionEmbedEnum.SHARE_URL;
            }};            

            GetFeaturedImageCollectionResponse res = sdk.images.getFeaturedImageCollection(req, new GetFeaturedImageCollectionSecurity() {{
                basic = new SchemeBasic("dignissimos", "repellat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.featuredCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedImageCollectionItems

This endpoint lists the IDs of images in a featured collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionItemsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedImageCollectionItemsRequest req = new GetFeaturedImageCollectionItemsRequest("velit") {{
                page = 784115L;
                perPage = 588639L;
            }};            

            GetFeaturedImageCollectionItemsResponse res = sdk.images.getFeaturedImageCollectionItems(req, new GetFeaturedImageCollectionItemsSecurity() {{
                basic = new SchemeBasic("consectetur", "eligendi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.collectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedImageCollectionList

This endpoint lists featured collections of specific types and a name and cover image for each collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListAssetHintEnum;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListEmbedEnum;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListRequest;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListResponse;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListSecurity;
import org.openapis.openapi.models.operations.GetFeaturedImageCollectionListTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedImageCollectionListRequest req = new GetFeaturedImageCollectionListRequest() {{
                assetHint = GetFeaturedImageCollectionListAssetHintEnum.ONEX;
                embed = GetFeaturedImageCollectionListEmbedEnum.SHARE_URL;
                type = new org.openapis.openapi.models.operations.GetFeaturedImageCollectionListTypeEnum[]{{
                    add(GetFeaturedImageCollectionListTypeEnum.VECTOR),
                }};
            }};            

            GetFeaturedImageCollectionListResponse res = sdk.images.getFeaturedImageCollectionList(req, new GetFeaturedImageCollectionListSecurity() {{
                basic = new SchemeBasic("natus", "temporibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.featuredCollectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImage

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRequest;
import org.openapis.openapi.models.operations.GetImageResponse;
import org.openapis.openapi.models.operations.GetImageSecurity;
import org.openapis.openapi.models.operations.GetImageViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageRequest req = new GetImageRequest("officia") {{
                language = LanguageEnum.CS;
                searchId = "amet";
                view = GetImageViewEnum.FULL;
            }};            

            GetImageResponse res = sdk.images.getImage(req, new GetImageSecurity() {{
                basic = new SchemeBasic("aspernatur", "quo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.image != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageCollection

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageCollectionEmbedEnum;
import org.openapis.openapi.models.operations.GetImageCollectionRequest;
import org.openapis.openapi.models.operations.GetImageCollectionResponse;
import org.openapis.openapi.models.operations.GetImageCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageCollectionRequest req = new GetImageCollectionRequest("itaque") {{
                embed = new org.openapis.openapi.models.operations.GetImageCollectionEmbedEnum[]{{
                    add(GetImageCollectionEmbedEnum.SHARE_URL),
                    add(GetImageCollectionEmbedEnum.SHARE_CODE),
                    add(GetImageCollectionEmbedEnum.SHARE_URL),
                    add(GetImageCollectionEmbedEnum.SHARE_CODE),
                }};
                shareCode = "consectetur";
            }};            

            GetImageCollectionResponse res = sdk.images.getImageCollection(req, new GetImageCollectionSecurity("repellat") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageCollectionItems

This endpoint lists the IDs of images in a collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetImageCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetImageCollectionItemsSecurity;
import org.openapis.openapi.models.operations.GetImageCollectionItemsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageCollectionItemsRequest req = new GetImageCollectionItemsRequest("explicabo") {{
                page = 129355L;
                perPage = 350325L;
                shareCode = "nihil";
                sort = GetImageCollectionItemsSortEnum.NEWEST;
            }};            

            GetImageCollectionItemsResponse res = sdk.images.getImageCollectionItems(req, new GetImageCollectionItemsSecurity("ab") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageCollectionList

This endpoint lists your collections of images and their basic attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageCollectionListEmbedEnum;
import org.openapis.openapi.models.operations.GetImageCollectionListRequest;
import org.openapis.openapi.models.operations.GetImageCollectionListResponse;
import org.openapis.openapi.models.operations.GetImageCollectionListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageCollectionListRequest req = new GetImageCollectionListRequest() {{
                embed = new org.openapis.openapi.models.operations.GetImageCollectionListEmbedEnum[]{{
                    add(GetImageCollectionListEmbedEnum.SHARE_URL),
                }};
                page = 644479L;
                perPage = 964925L;
            }};            

            GetImageCollectionListResponse res = sdk.images.getImageCollectionList(req, new GetImageCollectionListSecurity("non") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageKeywordSuggestions

This endpoint returns up to 10 important keywords from a block of plain text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageKeywordSuggestionsResponse;
import org.openapis.openapi.models.operations.GetImageKeywordSuggestionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;
import org.openapis.openapi.models.shared.SearchEntitiesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchEntitiesRequest req = new SearchEntitiesRequest("distinctio");            

            GetImageKeywordSuggestionsResponse res = sdk.images.getImageKeywordSuggestions(req, new GetImageKeywordSuggestionsSecurity() {{
                basic = new SchemeBasic("in", "exercitationem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.searchEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageLicenseList

This endpoint lists existing licenses.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetImageLicenseListRequest;
import org.openapis.openapi.models.operations.GetImageLicenseListResponse;
import org.openapis.openapi.models.operations.GetImageLicenseListSecurity;
import org.openapis.openapi.models.operations.GetImageLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageLicenseListRequest req = new GetImageLicenseListRequest() {{
                downloadAvailability = GetImageLicenseListDownloadAvailabilityEnum.ALL;
                endDate = OffsetDateTime.parse("2022-01-29T18:21:22.366Z");
                imageId = "modi";
                license = "in";
                page = 127294L;
                perPage = 879857L;
                sort = GetImageLicenseListSortEnum.OLDEST;
                startDate = OffsetDateTime.parse("2022-11-10T05:40:49.537Z");
                teamHistory = false;
                username = "Kailey_Halvorson";
            }};            

            GetImageLicenseListResponse res = sdk.images.getImageLicenseList(req, new GetImageLicenseListSecurity("minima") {{
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

## getImageList

This endpoint lists information about one or more images, including the available sizes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageListRequest;
import org.openapis.openapi.models.operations.GetImageListResponse;
import org.openapis.openapi.models.operations.GetImageListSecurity;
import org.openapis.openapi.models.operations.GetImageListViewEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageListRequest req = new GetImageListRequest(                new String[]{{
                                add("magnam"),
                                add("sit"),
                                add("modi"),
                            }}) {{
                searchId = "eum";
                view = GetImageListViewEnum.MINIMAL;
            }};            

            GetImageListResponse res = sdk.images.getImageList(req, new GetImageListSecurity() {{
                basic = new SchemeBasic("mollitia", "dignissimos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.imageDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageRecommendations

This endpoint returns images that customers put in the same collection as the specified image IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRecommendationsRequest;
import org.openapis.openapi.models.operations.GetImageRecommendationsResponse;
import org.openapis.openapi.models.operations.GetImageRecommendationsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageRecommendationsRequest req = new GetImageRecommendationsRequest(                new String[]{{
                                add("nostrum"),
                                add("molestiae"),
                                add("veniam"),
                                add("reiciendis"),
                            }}) {{
                maxItems = 66207L;
                safe = false;
            }};            

            GetImageRecommendationsResponse res = sdk.images.getImageRecommendations(req, new GetImageRecommendationsSecurity() {{
                basic = new SchemeBasic("modi", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.recommendationDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageSuggestions

This endpoint provides autocomplete suggestions for partial search terms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageSuggestionsRequest;
import org.openapis.openapi.models.operations.GetImageSuggestionsResponse;
import org.openapis.openapi.models.operations.GetImageSuggestionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageSuggestionsRequest req = new GetImageSuggestionsRequest("aut") {{
                limit = 911657L;
            }};            

            GetImageSuggestionsResponse res = sdk.images.getImageSuggestions(req, new GetImageSuggestionsSecurity() {{
                basic = new SchemeBasic("odio", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.suggestions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdatedImages

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpdatedImagesRequest;
import org.openapis.openapi.models.operations.GetUpdatedImagesResponse;
import org.openapis.openapi.models.operations.GetUpdatedImagesSecurity;
import org.openapis.openapi.models.operations.GetUpdatedImagesSortEnum;
import org.openapis.openapi.models.operations.GetUpdatedImagesTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpdatedImagesRequest req = new GetUpdatedImagesRequest() {{
                endDate = LocalDate.parse("2022-04-28");
                interval = "possimus";
                page = 452399L;
                perPage = 232772L;
                sort = GetUpdatedImagesSortEnum.NEWEST;
                startDate = LocalDate.parse("2022-01-26");
                type = new org.openapis.openapi.models.operations.GetUpdatedImagesTypeEnum[]{{
                    add(GetUpdatedImagesTypeEnum.ADDITION),
                    add(GetUpdatedImagesTypeEnum.EDIT),
                    add(GetUpdatedImagesTypeEnum.DELETION),
                    add(GetUpdatedImagesTypeEnum.DELETION),
                }};
            }};            

            GetUpdatedImagesResponse res = sdk.images.getUpdatedImages(req, new GetUpdatedImagesSecurity() {{
                basic = new SchemeBasic("et", "facilis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.updatedMediaDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licenseImages

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseImagesFormatEnum;
import org.openapis.openapi.models.operations.LicenseImagesRequest;
import org.openapis.openapi.models.operations.LicenseImagesResponse;
import org.openapis.openapi.models.operations.LicenseImagesSecurity;
import org.openapis.openapi.models.operations.LicenseImagesSizeEnum;
import org.openapis.openapi.models.shared.Cookie;
import org.openapis.openapi.models.shared.CustomSizeDimensions;
import org.openapis.openapi.models.shared.LicenseImage;
import org.openapis.openapi.models.shared.LicenseImageFormatEnum;
import org.openapis.openapi.models.shared.LicenseImageRequest;
import org.openapis.openapi.models.shared.LicenseImageSizeEnum;
import org.openapis.openapi.models.shared.LicenseImageVector;
import org.openapis.openapi.models.shared.LicenseImageVectorFormatEnum;
import org.openapis.openapi.models.shared.LicenseImageVectorSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicenseImagesRequest req = new LicenseImagesRequest(                new LicenseImageRequest(                new Object[]{{
                                                add(new LicenseImage("necessitatibus") {{
                                                    authCookie = new Cookie("veritatis", "quae") {{
                                                        name = "Ms. Robert Leffler";
                                                        value = "repellendus";
                                                    }};
                                                    customDimensions = new CustomSizeDimensions() {{
                                                        height = 51075L;
                                                        width = 904827L;
                                                    }};
                                                    editorialAcknowledgement = false;
                                                    format = LicenseImageFormatEnum.JPG;
                                                    imageId = "delectus";
                                                    metadata = new java.util.HashMap<String, Object>() {{
                                                        put("nulla", "officia");
                                                        put("sed", "voluptatem");
                                                        put("alias", "eveniet");
                                                    }};
                                                    price = 9416.68;
                                                    searchId = "voluptatem";
                                                    showModal = false;
                                                    size = LicenseImageSizeEnum.MEDIUM;
                                                    subscriptionId = "qui";
                                                    verificationCode = "qui";
                                                }}),
                                            }});) {{
                format = LicenseImagesFormatEnum.JPG;
                searchId = "explicabo";
                size = LicenseImagesSizeEnum.SMALL;
                subscriptionId = "aliquid";
            }};            

            LicenseImagesResponse res = sdk.images.licenseImages(req, new LicenseImagesSecurity("modi") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseImageResultDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImageCategories

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImageCategoriesRequest;
import org.openapis.openapi.models.operations.ListImageCategoriesResponse;
import org.openapis.openapi.models.operations.ListImageCategoriesSecurity;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListImageCategoriesRequest req = new ListImageCategoriesRequest() {{
                language = LanguageEnum.CS;
            }};            

            ListImageCategoriesResponse res = sdk.images.listImageCategories(req, new ListImageCategoriesSecurity() {{
                basic = new SchemeBasic("optio", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.categoryDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSimilarImages

This endpoint returns images that are visually similar to an image that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimilarImagesRequest;
import org.openapis.openapi.models.operations.ListSimilarImagesResponse;
import org.openapis.openapi.models.operations.ListSimilarImagesSecurity;
import org.openapis.openapi.models.operations.ListSimilarImagesViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSimilarImagesRequest req = new ListSimilarImagesRequest("molestias") {{
                language = LanguageEnum.CS;
                page = 639463L;
                perPage = 730478L;
                view = ListSimilarImagesViewEnum.FULL;
            }};            

            ListSimilarImagesResponse res = sdk.images.listSimilarImages(req, new ListSimilarImagesSecurity() {{
                basic = new SchemeBasic("sequi", "aliquid") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.imageSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameImageCollection

This endpoint sets a new name for an image collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameImageCollectionRequest;
import org.openapis.openapi.models.operations.RenameImageCollectionResponse;
import org.openapis.openapi.models.operations.RenameImageCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenameImageCollectionRequest req = new RenameImageCollectionRequest(                new CollectionUpdateRequest("ea");, "impedit");            

            RenameImageCollectionResponse res = sdk.images.renameImageCollection(req, new RenameImageCollectionSecurity("ducimus") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## searchImages

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchImagesAiIndustryEnum;
import org.openapis.openapi.models.operations.SearchImagesAiObjectiveEnum;
import org.openapis.openapi.models.operations.SearchImagesImageTypeEnum;
import org.openapis.openapi.models.operations.SearchImagesLicenseEnum;
import org.openapis.openapi.models.operations.SearchImagesOrientationEnum;
import org.openapis.openapi.models.operations.SearchImagesPeopleAgeEnum;
import org.openapis.openapi.models.operations.SearchImagesPeopleEthnicityEnum;
import org.openapis.openapi.models.operations.SearchImagesPeopleGenderEnum;
import org.openapis.openapi.models.operations.SearchImagesRequest;
import org.openapis.openapi.models.operations.SearchImagesResponse;
import org.openapis.openapi.models.operations.SearchImagesSecurity;
import org.openapis.openapi.models.operations.SearchImagesSortEnum;
import org.openapis.openapi.models.operations.SearchImagesViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchImagesRequest req = new SearchImagesRequest() {{
                addedDate = LocalDate.parse("2022-10-04");
                addedDateEnd = LocalDate.parse("2020-01-04");
                addedDateStart = LocalDate.parse("2020-12-27");
                aiIndustry = SearchImagesAiIndustryEnum.HEALTHCARE;
                aiLabelsLimit = 883780L;
                aiObjective = SearchImagesAiObjectiveEnum.AWARENESS;
                aiSearch = false;
                aspectRatio = 3929.67;
                aspectRatioMax = 7008.56;
                aspectRatioMin = 9248.4;
                category = "voluptates";
                color = "non";
                contributor = new String[]{{
                    add("quia"),
                    add("ullam"),
                    add("quisquam"),
                }};
                contributorCountry = new String[]{{
                    add("eligendi"),
                    add("quae"),
                    add("officiis"),
                    add("architecto"),
                }};
                fields = "architecto";
                height = 317898L;
                heightFrom = 758985L;
                heightTo = 525951L;
                imageType = new org.openapis.openapi.models.operations.SearchImagesImageTypeEnum[]{{
                    add(SearchImagesImageTypeEnum.VECTOR),
                }};
                keywordSafeSearch = false;
                language = LanguageEnum.CS;
                license = new org.openapis.openapi.models.operations.SearchImagesLicenseEnum[]{{
                    add(SearchImagesLicenseEnum.ENHANCED),
                    add(SearchImagesLicenseEnum.EDITORIAL),
                    add(SearchImagesLicenseEnum.COMMERCIAL),
                    add(SearchImagesLicenseEnum.EDITORIAL),
                }};
                model = new String[]{{
                    add("dolore"),
                    add("modi"),
                }};
                orientation = SearchImagesOrientationEnum.VERTICAL;
                page = 807419L;
                peopleAge = SearchImagesPeopleAgeEnum.TEENAGERS;
                peopleEthnicity = new org.openapis.openapi.models.operations.SearchImagesPeopleEthnicityEnum[]{{
                    add(SearchImagesPeopleEthnicityEnum.NOT_MIDDLE_EASTERN),
                }};
                peopleGender = SearchImagesPeopleGenderEnum.BOTH;
                peopleModelReleased = false;
                peopleNumber = 985109L;
                perPage = 773711L;
                query = "porro";
                region = "132.248.16.146";
                safe = false;
                sort = SearchImagesSortEnum.POPULAR;
                spellcheckQuery = false;
                view = SearchImagesViewEnum.MINIMAL;
                width = 438256L;
                widthFrom = 485031L;
                widthTo = 202796L;
            }};            

            SearchImagesResponse res = sdk.images.searchImages(req, new SearchImagesSecurity() {{
                basic = new SchemeBasic("debitis", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.imageSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
