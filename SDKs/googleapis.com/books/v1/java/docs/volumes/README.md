# volumes

### Available Operations

* [booksVolumesAssociatedList](#booksvolumesassociatedlist) - Return a list of associated books.
* [booksVolumesGet](#booksvolumesget) - Gets volume information for a single volume.
* [booksVolumesList](#booksvolumeslist) - Performs a book search.
* [booksVolumesMybooksList](#booksvolumesmybookslist) - Return a list of books in My Library.
* [booksVolumesRecommendedList](#booksvolumesrecommendedlist) - Return a list of recommended books for the current user.
* [booksVolumesRecommendedRate](#booksvolumesrecommendedrate) - Rate a recommended book for the current user.
* [booksVolumesUseruploadedList](#booksvolumesuseruploadedlist) - Return a list of books uploaded by the current user.

## booksVolumesAssociatedList

Return a list of associated books.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesAssociatedListAssociationEnum;
import org.openapis.openapi.models.operations.BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum;
import org.openapis.openapi.models.operations.BooksVolumesAssociatedListRequest;
import org.openapis.openapi.models.operations.BooksVolumesAssociatedListResponse;
import org.openapis.openapi.models.operations.BooksVolumesAssociatedListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesAssociatedListRequest req = new BooksVolumesAssociatedListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                association = BooksVolumesAssociatedListAssociationEnum.END_OF_SAMPLE;
                callback = "minima";
                fields = "nobis";
                key = "dolorum";
                locale = "adipisci";
                maxAllowedMaturityRating = BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum.NOT_MATURE;
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "blanditiis";
                source = "in";
                uploadType = "dolore";
                uploadProtocol = "aliquam";
            }};            

            BooksVolumesAssociatedListResponse res = sdk.volumes.booksVolumesAssociatedList(req, new BooksVolumesAssociatedListSecurity("officiis", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesGet

Gets volume information for a single volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesGetProjectionEnum;
import org.openapis.openapi.models.operations.BooksVolumesGetRequest;
import org.openapis.openapi.models.operations.BooksVolumesGetResponse;
import org.openapis.openapi.models.operations.BooksVolumesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesGetRequest req = new BooksVolumesGetRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "quas";
                country = "United Kingdom";
                fields = "nesciunt";
                includeNonComicsSeries = false;
                key = "culpa";
                oauthToken = "corrupti";
                partner = "pariatur";
                prettyPrint = false;
                projection = BooksVolumesGetProjectionEnum.FULL;
                quotaUser = "hic";
                source = "exercitationem";
                uploadType = "nobis";
                uploadProtocol = "sit";
                userLibraryConsistentRead = false;
            }};            

            BooksVolumesGetResponse res = sdk.volumes.booksVolumesGet(req, new BooksVolumesGetSecurity("rerum", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesList

Performs a book search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesListDownloadEnum;
import org.openapis.openapi.models.operations.BooksVolumesListFilterEnum;
import org.openapis.openapi.models.operations.BooksVolumesListLibraryRestrictEnum;
import org.openapis.openapi.models.operations.BooksVolumesListMaxAllowedMaturityRatingEnum;
import org.openapis.openapi.models.operations.BooksVolumesListOrderByEnum;
import org.openapis.openapi.models.operations.BooksVolumesListPrintTypeEnum;
import org.openapis.openapi.models.operations.BooksVolumesListProjectionEnum;
import org.openapis.openapi.models.operations.BooksVolumesListRequest;
import org.openapis.openapi.models.operations.BooksVolumesListResponse;
import org.openapis.openapi.models.operations.BooksVolumesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesListRequest req = new BooksVolumesListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                download = BooksVolumesListDownloadEnum.EPUB;
                fields = "ab";
                filter = BooksVolumesListFilterEnum.FULL;
                key = "dolore";
                langRestrict = "laborum";
                libraryRestrict = BooksVolumesListLibraryRestrictEnum.LIBRARY_RESTRICT_UNDEFINED;
                maxAllowedMaturityRating = BooksVolumesListMaxAllowedMaturityRatingEnum.MATURE;
                maxResults = 417486L;
                oauthToken = "quidem";
                orderBy = BooksVolumesListOrderByEnum.ORDER_BY_UNDEFINED;
                partner = "voluptas";
                prettyPrint = false;
                printType = BooksVolumesListPrintTypeEnum.BOOKS;
                projection = BooksVolumesListProjectionEnum.PROJECTION_UNDEFINED;
                quotaUser = "suscipit";
                showPreorders = false;
                source = "sapiente";
                startIndex = 895386L;
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            BooksVolumesListResponse res = sdk.volumes.booksVolumesList(req, new BooksVolumesListSecurity("perferendis", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesMybooksList

Return a list of books in My Library.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesMybooksListAcquireMethodEnum;
import org.openapis.openapi.models.operations.BooksVolumesMybooksListProcessingStateEnum;
import org.openapis.openapi.models.operations.BooksVolumesMybooksListRequest;
import org.openapis.openapi.models.operations.BooksVolumesMybooksListResponse;
import org.openapis.openapi.models.operations.BooksVolumesMybooksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesMybooksListRequest req = new BooksVolumesMybooksListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                acquireMethod = new org.openapis.openapi.models.operations.BooksVolumesMybooksListAcquireMethodEnum[]{{
                    add(BooksVolumesMybooksListAcquireMethodEnum.PURCHASED),
                }};
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                country = "Croatia";
                fields = "ea";
                key = "occaecati";
                locale = "quos";
                maxResults = 975752L;
                oauthToken = "tempora";
                prettyPrint = false;
                processingState = new org.openapis.openapi.models.operations.BooksVolumesMybooksListProcessingStateEnum[]{{
                    add(BooksVolumesMybooksListProcessingStateEnum.COMPLETED_FAILED),
                    add(BooksVolumesMybooksListProcessingStateEnum.RUNNING),
                }};
                quotaUser = "ex";
                source = "sit";
                startIndex = 248413L;
                uploadType = "officiis";
                uploadProtocol = "praesentium";
            }};            

            BooksVolumesMybooksListResponse res = sdk.volumes.booksVolumesMybooksList(req, new BooksVolumesMybooksListSecurity("facilis", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesRecommendedList

Return a list of recommended books for the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedListRequest;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedListResponse;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesRecommendedListRequest req = new BooksVolumesRecommendedListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "sit";
                key = "nobis";
                locale = "error";
                maxAllowedMaturityRating = BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum.MATURE;
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "recusandae";
                source = "reiciendis";
                uploadType = "nulla";
                uploadProtocol = "magni";
            }};            

            BooksVolumesRecommendedListResponse res = sdk.volumes.booksVolumesRecommendedList(req, new BooksVolumesRecommendedListSecurity("aperiam", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesRecommendedRate

Rate a recommended book for the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedRateRatingEnum;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedRateRequest;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedRateResponse;
import org.openapis.openapi.models.operations.BooksVolumesRecommendedRateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesRecommendedRateRequest req = new BooksVolumesRecommendedRateRequest(BooksVolumesRecommendedRateRatingEnum.RATING_UNDEFINED, "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "exercitationem";
                key = "praesentium";
                locale = "cum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "dolorum";
                source = "voluptatum";
                uploadType = "error";
                uploadProtocol = "hic";
            }};            

            BooksVolumesRecommendedRateResponse res = sdk.volumes.booksVolumesRecommendedRate(req, new BooksVolumesRecommendedRateSecurity("expedita", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.booksVolumesRecommendedRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksVolumesUseruploadedList

Return a list of books uploaded by the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksVolumesUseruploadedListProcessingStateEnum;
import org.openapis.openapi.models.operations.BooksVolumesUseruploadedListRequest;
import org.openapis.openapi.models.operations.BooksVolumesUseruploadedListResponse;
import org.openapis.openapi.models.operations.BooksVolumesUseruploadedListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksVolumesUseruploadedListRequest req = new BooksVolumesUseruploadedListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolorum";
                key = "corrupti";
                locale = "accusamus";
                maxResults = 272683L;
                oauthToken = "atque";
                prettyPrint = false;
                processingState = new org.openapis.openapi.models.operations.BooksVolumesUseruploadedListProcessingStateEnum[]{{
                    add(BooksVolumesUseruploadedListProcessingStateEnum.COMPLETED_FAILED),
                }};
                quotaUser = "fugiat";
                source = "voluptatem";
                startIndex = 635057L;
                uploadType = "expedita";
                uploadProtocol = "magnam";
                volumeId = new String[]{{
                    add("esse"),
                }};
            }};            

            BooksVolumesUseruploadedListResponse res = sdk.volumes.booksVolumesUseruploadedList(req, new BooksVolumesUseruploadedListSecurity("ipsam", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
