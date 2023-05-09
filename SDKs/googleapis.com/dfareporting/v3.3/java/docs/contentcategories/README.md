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

            DfareportingContentCategoriesDeleteRequest req = new DfareportingContentCategoriesDeleteRequest("molestiae", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "ut";
                key = "laborum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "corrupti";
                uploadProtocol = "maxime";
            }};            

            DfareportingContentCategoriesDeleteResponse res = sdk.contentCategories.dfareportingContentCategoriesDelete(req, new DfareportingContentCategoriesDeleteSecurity("ad", "quibusdam") {{
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

            DfareportingContentCategoriesGetRequest req = new DfareportingContentCategoriesGetRequest("facere", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "similique";
                key = "quasi";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "illum";
                uploadProtocol = "ea";
            }};            

            DfareportingContentCategoriesGetResponse res = sdk.contentCategories.dfareportingContentCategoriesGet(req, new DfareportingContentCategoriesGetSecurity("facere", "corrupti") {{
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

            DfareportingContentCategoriesInsertRequest req = new DfareportingContentCategoriesInsertRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                contentCategory = new ContentCategory() {{
                    accountId = "assumenda";
                    id = "culpa";
                    kind = "ipsa";
                    name = "Peggy Borer Sr.";
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "quaerat";
                key = "aliquid";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "enim";
                uploadProtocol = "cumque";
            }};            

            DfareportingContentCategoriesInsertResponse res = sdk.contentCategories.dfareportingContentCategoriesInsert(req, new DfareportingContentCategoriesInsertSecurity("ab", "quibusdam") {{
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

            DfareportingContentCategoriesListRequest req = new DfareportingContentCategoriesListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "perferendis";
                ids = new String[]{{
                    add("aspernatur"),
                    add("sapiente"),
                }};
                key = "nemo";
                maxResults = 389237L;
                oauthToken = "iste";
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "iusto";
                searchString = "culpa";
                sortField = DfareportingContentCategoriesListSortFieldEnum.NAME;
                sortOrder = DfareportingContentCategoriesListSortOrderEnum.DESCENDING;
                uploadType = "consequatur";
                uploadProtocol = "voluptates";
            }};            

            DfareportingContentCategoriesListResponse res = sdk.contentCategories.dfareportingContentCategoriesList(req, new DfareportingContentCategoriesListSecurity("dolorum", "fugit") {{
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

            DfareportingContentCategoriesPatchRequest req = new DfareportingContentCategoriesPatchRequest("eos", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                contentCategory = new ContentCategory() {{
                    accountId = "placeat";
                    id = "libero";
                    kind = "saepe";
                    name = "Stella Boehm";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "officiis";
                key = "sed";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "harum";
                uploadProtocol = "sequi";
            }};            

            DfareportingContentCategoriesPatchResponse res = sdk.contentCategories.dfareportingContentCategoriesPatch(req, new DfareportingContentCategoriesPatchSecurity("libero", "ipsa") {{
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

            DfareportingContentCategoriesUpdateRequest req = new DfareportingContentCategoriesUpdateRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                contentCategory = new ContentCategory() {{
                    accountId = "vero";
                    id = "dolorum";
                    kind = "omnis";
                    name = "Bobby Harris";
                }};;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "eius";
                key = "ipsa";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "iusto";
                uploadProtocol = "laborum";
            }};            

            DfareportingContentCategoriesUpdateResponse res = sdk.contentCategories.dfareportingContentCategoriesUpdate(req, new DfareportingContentCategoriesUpdateSecurity("in", "numquam") {{
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
