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

            DfareportingContentCategoriesDeleteRequest req = new DfareportingContentCategoriesDeleteRequest("blanditiis", "labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "voluptatem";
                key = "beatae";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "temporibus";
                uploadProtocol = "in";
            }};            

            DfareportingContentCategoriesDeleteResponse res = sdk.contentCategories.dfareportingContentCategoriesDelete(req, new DfareportingContentCategoriesDeleteSecurity("veritatis", "nobis") {{
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

            DfareportingContentCategoriesGetRequest req = new DfareportingContentCategoriesGetRequest("voluptatibus", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "rerum";
                key = "molestiae";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "blanditiis";
                uploadProtocol = "quaerat";
            }};            

            DfareportingContentCategoriesGetResponse res = sdk.contentCategories.dfareportingContentCategoriesGet(req, new DfareportingContentCategoriesGetSecurity("odit", "ab") {{
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

            DfareportingContentCategoriesInsertRequest req = new DfareportingContentCategoriesInsertRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                contentCategory = new ContentCategory() {{
                    accountId = "dolorem";
                    id = "rerum";
                    kind = "ut";
                    name = "Melody Stoltenberg";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "veniam";
                key = "unde";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "velit";
                uploadProtocol = "accusamus";
            }};            

            DfareportingContentCategoriesInsertResponse res = sdk.contentCategories.dfareportingContentCategoriesInsert(req, new DfareportingContentCategoriesInsertSecurity("veniam", "provident") {{
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

            DfareportingContentCategoriesListRequest req = new DfareportingContentCategoriesListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "accusantium";
                fields = "dicta";
                ids = new String[]{{
                    add("amet"),
                }};
                key = "occaecati";
                maxResults = 552512L;
                oauthToken = "aliquid";
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "culpa";
                searchString = "fuga";
                sortField = DfareportingContentCategoriesListSortFieldEnum.ID;
                sortOrder = DfareportingContentCategoriesListSortOrderEnum.ASCENDING;
                uploadType = "eveniet";
                uploadProtocol = "aliquid";
            }};            

            DfareportingContentCategoriesListResponse res = sdk.contentCategories.dfareportingContentCategoriesList(req, new DfareportingContentCategoriesListSecurity("optio", "adipisci") {{
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

            DfareportingContentCategoriesPatchRequest req = new DfareportingContentCategoriesPatchRequest("ab", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                contentCategory = new ContentCategory() {{
                    accountId = "explicabo";
                    id = "reiciendis";
                    kind = "dicta";
                    name = "Lowell Rice DDS";
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "et";
                key = "reiciendis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "itaque";
                uploadProtocol = "iste";
            }};            

            DfareportingContentCategoriesPatchResponse res = sdk.contentCategories.dfareportingContentCategoriesPatch(req, new DfareportingContentCategoriesPatchSecurity("quod", "quidem") {{
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

            DfareportingContentCategoriesUpdateRequest req = new DfareportingContentCategoriesUpdateRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                contentCategory = new ContentCategory() {{
                    accountId = "natus";
                    id = "ipsam";
                    kind = "repudiandae";
                    name = "Leslie Hartmann IV";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "molestiae";
                key = "mollitia";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "eum";
                uploadProtocol = "beatae";
            }};            

            DfareportingContentCategoriesUpdateResponse res = sdk.contentCategories.dfareportingContentCategoriesUpdate(req, new DfareportingContentCategoriesUpdateSecurity("suscipit", "eveniet") {{
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
