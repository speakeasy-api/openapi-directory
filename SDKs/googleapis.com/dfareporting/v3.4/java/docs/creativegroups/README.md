# creativeGroups

### Available Operations

* [dfareportingCreativeGroupsGet](#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [dfareportingCreativeGroupsInsert](#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [dfareportingCreativeGroupsList](#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [dfareportingCreativeGroupsPatch](#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [dfareportingCreativeGroupsUpdate](#dfareportingcreativegroupsupdate) - Updates an existing creative group.

## dfareportingCreativeGroupsGet

Gets one creative group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsGetRequest req = new DfareportingCreativeGroupsGetRequest("officiis", "quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "doloribus";
                key = "praesentium";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "ad";
                uploadProtocol = "ab";
            }};            

            DfareportingCreativeGroupsGetResponse res = sdk.creativeGroups.dfareportingCreativeGroupsGet(req, new DfareportingCreativeGroupsGetSecurity("harum", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsInsert

Inserts a new creative group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsInsertRequest req = new DfareportingCreativeGroupsInsertRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "accusamus";
                    advertiserId = "officiis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "nam";
                        id = "518c4da1-fad3-4551-af06-d4e5b72f0f54";
                        kind = "corrupti";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "commodi";
                    }};;
                    groupNumber = 511807;
                    id = "est";
                    kind = "consequatur";
                    name = "Bonnie Greenfelder Jr.";
                    subaccountId = "officia";
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "voluptates";
                key = "tempore";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "ratione";
                uploadProtocol = "aliquam";
            }};            

            DfareportingCreativeGroupsInsertResponse res = sdk.creativeGroups.dfareportingCreativeGroupsInsert(req, new DfareportingCreativeGroupsInsertSecurity("ea", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsList

Retrieves a list of creative groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsListRequest req = new DfareportingCreativeGroupsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                advertiserIds = new String[]{{
                    add("aut"),
                }};
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "repellat";
                groupNumber = 709300L;
                ids = new String[]{{
                    add("mollitia"),
                    add("quis"),
                    add("cumque"),
                }};
                key = "cumque";
                maxResults = 875236L;
                oauthToken = "a";
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                searchString = "quod";
                sortField = DfareportingCreativeGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingCreativeGroupsListSortOrderEnum.ASCENDING;
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingCreativeGroupsListResponse res = sdk.creativeGroups.dfareportingCreativeGroupsList(req, new DfareportingCreativeGroupsListSecurity("debitis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsPatch

Updates an existing creative group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsPatchRequest req = new DfareportingCreativeGroupsPatchRequest("quasi", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "aspernatur";
                    advertiserId = "atque";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "eius";
                        id = "5ac82b85-f8bc-42ca-ba8d-a4127dd597ff";
                        kind = "eius";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quasi";
                    }};;
                    groupNumber = 81613;
                    id = "similique";
                    kind = "id";
                    name = "Verna Sauer";
                    subaccountId = "rerum";
                }};;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "necessitatibus";
                key = "quisquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "incidunt";
                uploadProtocol = "voluptatibus";
            }};            

            DfareportingCreativeGroupsPatchResponse res = sdk.creativeGroups.dfareportingCreativeGroupsPatch(req, new DfareportingCreativeGroupsPatchSecurity("nihil", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsUpdate

Updates an existing creative group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsUpdateRequest req = new DfareportingCreativeGroupsUpdateRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "deleniti";
                    advertiserId = "aliquam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "totam";
                        etag = "soluta";
                        id = "d6a6f044-1d2c-43b8-8809-4373e060459b";
                        kind = "voluptates";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "cum";
                    }};;
                    groupNumber = 665311;
                    id = "fugiat";
                    kind = "perferendis";
                    name = "Mandy Cassin";
                    subaccountId = "iure";
                }};;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "et";
                key = "ipsam";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "minima";
                uploadProtocol = "laudantium";
            }};            

            DfareportingCreativeGroupsUpdateResponse res = sdk.creativeGroups.dfareportingCreativeGroupsUpdate(req, new DfareportingCreativeGroupsUpdateSecurity("quibusdam", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
