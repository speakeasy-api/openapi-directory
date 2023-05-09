# contentCategories

### Available Operations

* [dfareportingContentCategoriesDelete](#dfareportingcontentcategoriesdelete) - Deletes an existing content category.
* [dfareportingContentCategoriesGet](#dfareportingcontentcategoriesget) - Gets one content category by ID.
* [dfareportingContentCategoriesInsert](#dfareportingcontentcategoriesinsert) - Inserts a new content category.
* [dfareportingContentCategoriesList](#dfareportingcontentcategorieslist) - Retrieves a list of content categories, possibly filtered. This method supports paging.
* [dfareportingContentCategoriesPatch](#dfareportingcontentcategoriespatch) - Updates an existing content category. This method supports patch semantics.
* [dfareportingContentCategoriesUpdate](#dfareportingcontentcategoriesupdate) - Updates an existing content category.

## dfareportingContentCategoriesDelete

Deletes an existing content category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesDeleteRequest req = new DfareportingContentCategoriesDeleteRequest("impedit", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "molestiae";
                key = "deserunt";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "rerum";
                uploadProtocol = "consequuntur";
            }};            

            DfareportingContentCategoriesDeleteResponse res = sdk.contentCategories.dfareportingContentCategoriesDelete(req, new DfareportingContentCategoriesDeleteSecurity("magnam", "et") {{
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

## dfareportingContentCategoriesGet

Gets one content category by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesGetRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesGetResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesGetRequest req = new DfareportingContentCategoriesGetRequest("et", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "et";
                key = "debitis";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "excepturi";
                uploadProtocol = "quas";
            }};            

            DfareportingContentCategoriesGetResponse res = sdk.contentCategories.dfareportingContentCategoriesGet(req, new DfareportingContentCategoriesGetSecurity("repellat", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contentCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingContentCategoriesInsert

Inserts a new content category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentCategory;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesInsertRequest req = new DfareportingContentCategoriesInsertRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                contentCategory = new ContentCategory() {{
                    accountId = "veniam";
                    id = "perspiciatis";
                    kind = "commodi";
                    name = "Mildred Kreiger";
                }};;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "aliquid";
                key = "voluptate";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "velit";
                uploadProtocol = "tempora";
            }};            

            DfareportingContentCategoriesInsertResponse res = sdk.contentCategories.dfareportingContentCategoriesInsert(req, new DfareportingContentCategoriesInsertSecurity("aspernatur", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contentCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingContentCategoriesList

Retrieves a list of content categories, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesListRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesListResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesListSecurity;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesListRequest req = new DfareportingContentCategoriesListRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "asperiores";
                ids = new String[]{{
                    add("minima"),
                    add("cupiditate"),
                    add("molestiae"),
                }};
                key = "et";
                maxResults = 879824L;
                oauthToken = "excepturi";
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "inventore";
                searchString = "perspiciatis";
                sortField = DfareportingContentCategoriesListSortFieldEnum.ID;
                sortOrder = DfareportingContentCategoriesListSortOrderEnum.ASCENDING;
                uploadType = "ullam";
                uploadProtocol = "molestiae";
            }};            

            DfareportingContentCategoriesListResponse res = sdk.contentCategories.dfareportingContentCategoriesList(req, new DfareportingContentCategoriesListSecurity("adipisci", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contentCategoriesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingContentCategoriesPatch

Updates an existing content category. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentCategory;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesPatchRequest req = new DfareportingContentCategoriesPatchRequest("perspiciatis", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                contentCategory = new ContentCategory() {{
                    accountId = "at";
                    id = "nam";
                    kind = "id";
                    name = "Harvey Wiegand";
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "unde";
                key = "labore";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "laboriosam";
                uploadProtocol = "soluta";
            }};            

            DfareportingContentCategoriesPatchResponse res = sdk.contentCategories.dfareportingContentCategoriesPatch(req, new DfareportingContentCategoriesPatchSecurity("minus", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contentCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingContentCategoriesUpdate

Updates an existing content category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingContentCategoriesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentCategory;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingContentCategoriesUpdateRequest req = new DfareportingContentCategoriesUpdateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                contentCategory = new ContentCategory() {{
                    accountId = "aliquam";
                    id = "quas";
                    kind = "aut";
                    name = "Dawn Cole";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "libero";
                key = "iure";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "qui";
                uploadProtocol = "explicabo";
            }};            

            DfareportingContentCategoriesUpdateResponse res = sdk.contentCategories.dfareportingContentCategoriesUpdate(req, new DfareportingContentCategoriesUpdateSecurity("accusantium", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contentCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
